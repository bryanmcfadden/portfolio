/* ===========================================================================
05/15/2018
Bryan McFadden

All functionality required for my portfolio pages
============================================================================= */

//Custom Scrollbar Creation
$(window).load(function(){
var skillsShown;

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
		var secIntro = $(".sectionIntro").height() + parseInt($(".sectionIntro").css("padding-top")) + parseInt($(".sectionIntro").css("padding-bottom")) - 74; // - 80
		if(scrollTopValue>secIntro){
			//alert('scrollTopValue='+scrollTopValue+'< tempHeight='+tempHeight);
			//change the menu button background color to black
			if($(".hamburger").hasClass("light")){
				$(".hamburger").removeClass("light");

				//show skills animation if necessary
				if(!skillsShown){
					$('.bar-chart #skill1').css({'opacity': 1,'height': '0%'}).stop().delay(200).animate({'height':'95%'}, 1000, 'easeOutExpo');
					$('.bar-chart #skill2').css({'opacity': 1,'height': '0%'}).stop().delay(400).animate({'height':'60%'}, 1000, 'easeOutExpo');
					$('.bar-chart #skill3').css({'opacity': 1,'height': '0%'}).stop().delay(600).animate({'height':'95%'}, 1000, 'easeOutExpo');
					$('.bar-chart #skill4').css({'opacity': 1,'height': '0%'}).stop().delay(800).animate({'height':'75%'}, 1000, 'easeOutExpo');
					$('.bar-chart #skill5').css({'opacity': 1,'height': '0%'}).stop().delay(1000).animate({'height':'15%'}, 1000, 'easeOutExpo');
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
	//$("body").on("click", '.openWorkDetails', function(){
	$('.current-project-list li').on('click', function(){
	var selProj = $(this).index(); //selected item

	LoadSelectedProject(selProj);
	//alert(projectsList[selProj][0]);


		 DisplayProjectView();
	});

	function LoadSelectedProject(pid) {
		var projTotal = projectsList.length;
		//check to see if project exists...then fetch Data

		//populate project values
		$('.project-details header h2').html(projectsList[pid][0]); //project name
		$('.project-details header h3').html(projectsList[pid][1] + ' / ' + projectsList[pid][2]); //project company + / + project type
		$('.project-details header em').html(projectsList[pid][3]); //ux roles
		//$('.project-details .text-summary').html(projectsList[pid][4]); //assigned job title
		$('.project-details .text-summary').html(projectsList[pid][5][0][1]); //image description

		//load images
		for(let i=0; i<projectsList[pid][5].length; i++){
			alert(projectsList[pid][5][i][0] + '-' + projectsList[pid][5][i][1]);
		}

	}

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
