

$(document).ready(function(){

  var timerResumeButtons = {
    start: function(){
      if (typeof this.timeoutID === 'number'){
        this.stop();
      }
      this.timeoutID = setTimeout(function(){DisplayResumeButtons(false);},15000);
    },
    stop: function(){
      window.clearTimeout(this.timeoutID);
      this.timeoutID = undefined;
    }
  }

 // about me
  $('#btnViewResume').on('click', function(){
    $('#btnViewResume, #aboutArea h4').fadeOut(500, function(){
      DisplayResumeButtons(true);
    });
  });


  $('.resume').bind({
    mouseenter: function(e) {
      timerResumeButtons.stop();
    },
    mouseleave: function(e) {
      timerResumeButtons.start();
    }
  });


  function DisplayResumeButtons(val){
    if(val){
      // start timer, hide button, change test and show doc/pdf buttons
      //timerResumeButtons = setTimeout(function(){DisplayResumeButtons(false);},5000);
      timerResumeButtons.start();
      $('.resume').css({"width":"60px", "visibility":"visible"});
      $('.resume-doc').css("margin-right", "15px");
      $('.resume-pdf').css("margin-left", "80px");
      $('.resume').animate({"opacity":"1", "margin-left":"0"}, 700);

      $('#aboutArea h4').html(".docx or .pdf?");
      $('#aboutArea h4').fadeIn(500);
    }else{
      // hide doc/pdf buttons, change test and show view resume button
      timerResumeButtons.stop();
      $('.resume').animate({"opacity":"0", "margin-left":"0"}, 1000, function(){});
      $('.resume').css({"width":"1px", "visibility":"hidden"});
      $('.resume-doc').css("margin-right", "0px");

      $('#aboutArea h4').fadeOut(300, function(){
        $('#aboutArea h4').html("Want to know more?");
        $('#btnViewResume, #aboutArea h4').fadeIn(500);
      });
    }
  }

});
