/* ===========================================================================
05/15/2018
Bryan McFadden

All global events and functionality required for my portfolio pages

Additional scripting files:
work.js
contact.js
============================================================================= */
var skillsShown;
var project, projSlideTotal;
var viewingProject = false;
var projTotal = projectsList.length;
var speed = 800;

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
				MenuButtonBackground((this.mcs.top)*-1);
			}
		}
	});

	// FUNCTION ******************************************************************
 	// changes color of hamburger menu according to page background
	function MenuButtonBackground(scrollTopValue){
		//true == project viewport
		//false == main view
		var secIntro;
			if(viewingProject){
				secIntro = $(".project-details header").height() + parseInt($(".project-details header").css("padding-top")) + parseInt($(".project-details header").css("padding-bottom")) - 74;
			}else{
				secIntro = $(".sectionIntro").height() + parseInt($(".sectionIntro").css("padding-top")) + parseInt($(".sectionIntro").css("padding-bottom")) - 74; // - 80
			}

			if(scrollTopValue>secIntro){
				//alert('scrollTopValue='+scrollTopValue+'< tempHeight='+tempHeight);
				//change the menu button background color to black
				if($(".hamburger").hasClass("light")){
					$(".hamburger").removeClass("light");

						//show skills animation if necessary
						if(!viewingProject && !skillsShown){
							$('.bar-chart #skill1').css({'opacity': 1,'height': '0%'}).stop().delay(200).animate({'height':'90%'}, 1000, 'easeOutExpo');
							$('.bar-chart #skill2').css({'opacity': 1,'height': '0%'}).stop().delay(400).animate({'height':'60%'}, 1000, 'easeOutExpo');
							$('.bar-chart #skill3').css({'opacity': 1,'height': '0%'}).stop().delay(600).animate({'height':'95%'}, 1000, 'easeOutExpo');
							$('.bar-chart #skill4').css({'opacity': 1,'height': '0%'}).stop().delay(800).animate({'height':'75%'}, 1000, 'easeOutExpo');
							$('.bar-chart #skill5').css({'opacity': 1,'height': '0%'}).stop().delay(1000).animate({'height':'88%'}, 1000, 'easeOutExpo');
							skillsShown = true;
						}
				}
			}else{
				//change the menu button background color to white
				$(".hamburger").addClass("light");
			}
 	}
});

$(document).ready(function(){
	/* ========= Main Menu ==================================================== */
	/* ======================================================================== */
	// /////////////////// HAMBURGER MENU BUTTON ////////////////////////////////
	$('.hamburger').on('click', function(e){
		if(viewingProject){
			DisplayProjectView();
			viewingProject = false;
		}else{
			if($(this).hasClass("is-active")){
				//main menu is open and we are closing it
				$('.mainMenuLinks').removeClass("visible");
				$('.mainMenu').removeClass("visible");
				//if we are in the top half with the light class applied when opening the menu
				//how do we make sure we keep it there?
				$('.hamburger').removeClass("light is-active");
				$('.mainMenu').css("display", "none");
				setTimeout( function(){
					//do something
				},1000);
			}else{
				//show main menu modal
				$('.mainMenu').css("display", "block");
				setTimeout( function(){
					$('.mainMenu').addClass("visible");
					$('.hamburger').addClass("light is-active");

						setTimeout( function(){
							$('.mainMenuLinks').addClass("visible");
						},500);
				},100);
			}
		}
		$('.hamburger').blur();
	});

	// /////////////////// MAIN NAVAGATION LINKS ////////////////////////////////
	$('body').on('click', '.mainMenuLinks .menuLink', function(){
		var location;
		if( $(this).hasClass('aboutLink') ){ location = 'about'; }
		else if( $(this).hasClass('skillsLink') ){ location = 'skills'; }
		else if( $(this).hasClass('workLink') ){ location = 'work'; }
		else if( $(this).hasClass('contactLink') ){ location = 'contact'; }
		else{
			//selected homeLink
			location = 'main';
		}

		$('.mainMenuLinks').removeClass("visible");
		$('.mainMenu').removeClass("visible");
		$('.hamburger').removeClass("is-active");
		setTimeout( function(){
			$('.mainMenu').css("display", "none");
			ScrollMeTo(location);
		},1000);
	});
	/* ========================================================================= */
  /* ========= Introduction ================================================== */
	/* ========================================================================= */

	// ///////////// INTRO SECTION - NEXT SECTION BUTTON /////////////////////////
	$("body").on("click", ".sectionIntro .btnNext", function() {
		ScrollMeTo("about");
	});

	// FUNCTION ******************************************************************
	// scrolls user to specific area
	function ScrollMeTo(element){
		var elementTarget;
		if( element == "main" || element == "about" || element == "skills" || element == "work" || element == "contact" )
		{
			if(element == "about"){ elementTarget = "#aboutMe"; }
			else if(element == "skills"){ elementTarget = "#mySkills"; }
			else if(element == "work"){ elementTarget = "#work"; }
			else if(element == "contact"){ elementTarget = "#contactMe"; }
			else if(element == "main"){ elementTarget = "#main"; }
		}
		$(".mainContentBox").mCustomScrollbar("stop").mCustomScrollbar("scrollTo",$(elementTarget),{scrollEasing:"easeInOut", scrollInertia: 1000});
	}

	/* ========================================================================= */
  /* ========= About Me ====================================================== */
	/* ========================================================================= */
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
