
String.prototype.format = function() {
  var s = this,
      i = arguments.length;

  while (i--) {
    s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
  }
  return s;
};

var flag = false;

!function($) {
  $.timeoutDialog = function(options) {
	  //console.log("line 16.js");
    var settings = {
      timeout: 1200,
      countdown: 60,
      title : 'Session Timeout Notification',
      message : 'Your AT&T Technology Delivery Center (TDC) session will expire in another {0} mins.',
      question: 'Do you want to extend the session?',
      keep_alive_button_text: 'Yes',
      sign_out_button_text: 'No, Sign me out',
      keep_alive_url: '/keep-alive',
      logout_url: null,
      logout_redirect_url: '/wps/myportal/SDC/Home',
      restart_on_yes: true,
      dialog_width: 430
    };
    //console.log("line 31.js");
    $.extend(settings, options);

    var TimeoutDialog = {
      init: function () {
        this.setupDialogTimer();
	},

      setupDialogTimer: function() {
        var self = this;
        window.setTimeout(function() {
        	if(!flag)
        		self.setupDialog();
        }, (settings.timeout - settings.countdown) * 1000);
      },

      setupDialog: function() {
        var self = this;
        //console.log("line 49.js");
        self.destroyDialog();
        //console.log("line 51.js");
        /*  $('<div id="idle-dialog" class="idle-modal-dialog"> ' +
                '<p id="idleMessage">' + settings.message.format('<span id="timeout-countdown">' + settings.countdown + '</span>') + '</p>' +
                '<p id="timeout-question">' + settings.question + '</p>' +
              '</div>')
            .appendTo('body')
            .dialog({
              modal: true,
              width: settings.dialog_width,
              minHeight: 'auto',
              zIndex: 10000,
              closeOnEscape: false,
              draggable: false,
              resizable: false,
//              dialogClass: 'idle-modal-dialog',
              buttons : {
                'keep-alive-button' : {
                  text: settings.keep_alive_button_text,
                  id: "timeout-keep-signin-btn",
                  click: function() {
                    self.keepAlive();
                  }
                }
              }
            });
        //self.showIdleDialog();
        self.startCountdown();
      }*/
        //console.log("line 79.js");
       	$('<div id="timeout-dialog" class="idle-timeout_width">'+
                '<p id="timeout-message">' + settings.message.format('<span id="timeout-countdown">' + settings.countdown + '</span>') + '</p>' +
                '<p id="timeout-question" class="borderBottom">' + settings.question + '<br/><br/></p>' +
              '</div>')
            .appendTo('body')
            .dialog({
              modal: true,
              width: settings.dialog_width,
              minHeight: 'auto',
              zIndex: 10000,
              closeOnEscape: false,
              draggable: false,
              resizable: false,
              dialogClass: 'timeout-dialog',
              title: settings.title,
              buttons : {
                'keep-alive-button' : {
                  text: settings.keep_alive_button_text,
                  id: "timeout-keep-signin-btn",
                  click: function() {
                    self.keepAlive();
                  }
                }
              }
            });
        
       	$('#timeout-dialog').siblings().addClass('session-titlebar');
       	$('.ui-dialog-title').addClass('session-header-title');
       	$('#timeout-dialog').parent().css('width','50%');
       	$('#timeout-dialog').parent().css('left','25%');
       	$('.ui-dialog-title').css('font-weight','normal');
        self.startCountdown();
      },

      destroyDialog: function() {
    	  //console.log("line 110.js");
    	  if ($("#timeout-dialog").length) {
              $("#timeout-dialog").dialog('close');
  		  //$(this).dialog("close");
            $('#timeout-dialog').remove();
          }
      },

      startCountdown: function() {
    	  //console.log("line 119.js");
        var self = this,
            counter = settings.countdown;

        this.countdown = window.setInterval(function() {
          counter -= 1;
          $("#timeout-countdown").html(counter);

          if (counter <= 0) {
            window.clearInterval(self.countdown);
            self.signOut(false);
          }

        }, 60*1000);
      },

      keepAlive: function() {
    	  //console.log("line 136.js");
        var self = this;
        this.destroyDialog();
        window.clearInterval(this.countdown);
        $.get(settings.keep_alive_url, function(data) {
          if (data == "OK") {
            if (settings.restart_on_yes) {
              self.setupDialogTimer();
            }
          }
          else {
            self.signOut(false);
          }
        });
      },

      showDialog: function(target){
    	  //console.log("line 153.js");
    	$('#container').load('nls/sessionOutWarning.html');
  		$('#container').modal('show');
  		//flag = true;
  		/*$('#redirectButton').click(function(){
			//window.location = target;
  			//flag = false;
  			window.location.href = '/wps/myportal/SDC/Home';
  			//return;
  		});*/

       },

       showIdleDialog: function(){
    	   //console.log("line 167.js");
    	   var self = this;
       	$('#idleDiv').load('nls/isleTimeWarning.html');
     		$('#idleDiv').modal('show');
     		$('#idleButton').click(function(){
	     		self.keepAlive();
     		});
          },

      signOut: function(is_forced) {
    	  //console.log("line 177.js");
        var self = this;
        this.destroyDialog();

        if (settings.logout_url != null) {
            $.post(settings.logout_url, function(data){
                self.redirectLogout(is_forced);
            });
        }
        else {
            self.redirectLogout(is_forced);
        }
      },

      redirectLogout: function(is_forced){
    	  //console.log("line 192.js");
        var target = settings.logout_redirect_url + '?next=' + encodeURIComponent(window.location.pathname + window.location.search);
        if (!is_forced)
        	target += '&timeout=t';
        	console.log("Your TDC session has expired. Click OK to establish a new session.");

        	this.showDialog(target);
	   }
    };
    //console.log("line 203.js");
    TimeoutDialog.init();
  };
}(window.jQuery);