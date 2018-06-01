/* ===========================================================================
05/15/2018
Bryan McFadden

All functionality required for my portfolio pages
============================================================================== */
//Custom Scrollbar Creation
$(window).load(function(){
	// instantiate main content area scrollbar
	$(".mainContentBox").mCustomScrollbar({
		theme: "dark-2",
		scrollButtons:{ enable: 0 },
		scrollInertia:700,
		mouseWheel:{ scrollAmount: 300 },
		callbacks:{
			whileScrolling:function(){
				//$(".btnNextSection").removeClass("movingArrow");
				//majStyleBtnBurger((this.mcs.top)*-1);
				MenuButtonBackground((this.mcs.top)*-1);
			}
		}
	});
	// instantiate project view area scrollbar
	$(".projContentBox").mCustomScrollbar({
		theme: "dark-2",
		scrollButtons:{ enable: 0 },
		scrollInertia:700,
		mouseWheel:{ scrollAmount: 300 },
		callbacks:{
			whileScrolling:function(){
				//do something
			}
		}
	});

	function MenuButtonBackground(scrollTopValue){
		var tempHeight = $(".sectionIntro").height() + parseInt($(".sectionIntro").css("padding-top")) + parseInt($(".sectionIntro").css("padding-bottom")) - 74; // - 80
		if(scrollTopValue>tempHeight){
			//alert('scrollTopValue='+scrollTopValue+'< tempHeight='+tempHeight);
			//change the menu button background color to black
			if($(".hamburger").hasClass("light")){
				$(".hamburger").removeClass("light");
			}

		}else{
			//change the menu button background color to white
			$(".hamburger").addClass("light");
		}
 }
});

$(document).ready(function(){

	// Animate Bar-Chart
	 $('.bar-chart').waypoint(function(event, direction) {
		 $('#skill1').css({'height': '0%'}).stop().delay(200).animate({'height':'95%'}, 1000, 'easeOutExpo');
		 $('#skill2').css({'height': '0%'}).stop().delay(400).animate({'height':'60%'}, 1000, 'easeOutExpo');
		 $('#skill3').css({'height': '0%'}).stop().delay(600).animate({'height':'95%'}, 1000, 'easeOutExpo');
		 $('#skill4').css({'height': '0%'}).stop().delay(800).animate({'height':'75%'}, 1000, 'easeOutExpo');
		 $('#skill5').css({'height': '0%'}).stop().delay(1000).animate({'height':'15%'}, 1000, 'easeOutExpo');
	 }, {
	 offset: '80%',
	 triggerOnce: true
 	});

	function DisplayProjectView(){
		var proj = $(".projContentBox");

		if(proj.hasClass("open")){
			//alert('closing project view');
			proj.toggleClass("open");
			proj.addClass("close");
			proj.animate({opacity: 0.0,},1000,function(){
				proj.css({visibility: "hidden"});
			});
			$('.mainContentBox').animate({opacity: 1, visibility: "visible"},1000);
			//$(".recent-projects").animate({opacity: 1, visibility: "visible"},1000);
			$('.hamburger').toggleClass('light is-active');
		}else{
			//alert('opening project view');
			proj.toggleClass("open");
			proj.removeClass("close");
			proj.css({visibility:"visible", opacity: 0.0}).animate({opacity: 1.0},500);
			//$(".recent-projects").animate({opacity: 0, visibility: "hidden"},1000);
			$('.mainContentBox').animate({opacity: 0, visibility: "hidden"},1000);
			$('.hamburger').toggleClass('light is-active');
		}
	}

	$('.hamburger').on('click', function(e){
		DisplayProjectView();
	});
  /* ========= Introduction ================================================== */


	/* ========= My Projects =================================================== */
	$('.current-project-list li').on('click', function(){
		  DisplayProjectView();
	});


  /* ========= About Me ====================================================== */
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

 // View my resume button
  $('#btnViewResume').on('click', function(){
    $('#btnViewResume, #aboutArea h4').fadeOut(500, function(){
      DisplayResumeButtons(true);
    });
  });

 // Resume options buttons binding
  $('.resume').bind({
    mouseenter: function(e) {
      timerResumeButtons.stop();
    },
    mouseleave: function(e) {
      timerResumeButtons.start();
    }
  });

// Resume button hide/show functions
  function DisplayResumeButtons(val){
    if(val){
      // start timer
      timerResumeButtons.start();
      $('.resume').css({"width":"60px", "visibility":"visible"});
      $('.resume-doc').css("margin-right", "15px");
      $('.resume-pdf').css("margin-left", "80px");
      $('.resume').animate({"opacity":"1", "margin-left":"0"}, 700);

      $('#aboutMe h4').html(".doc or .pdf?");
      $('#aboutMe h4').fadeIn(500);
    }else{
      // stop timer
      timerResumeButtons.stop();
      $('.resume').animate({"opacity":"0", "margin-left":"0"}, 1000, function(){});
      $('.resume').css({"width":"1px", "visibility":"hidden"});
      $('.resume-doc').css("margin-right", "0px");

      $('#aboutMe h4').fadeOut(300, function(){
        $('#aboutMe h4').html("Want to know more?");
        $('#btnViewResume, #aboutMe h4').fadeIn(500);
      });
    }
  }
});
