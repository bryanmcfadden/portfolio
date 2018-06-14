/* ===========================================================================
05/15/2018
Bryan McFadden

All functionality required for my portfolio pages
============================================================================= */
var skillsShown;
var project, projectSlide, projSlideTotal;
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
					$('.bar-chart #skill2').css({'opacity': 1,'height': '0%'}).stop().delay(400).animate({'height':'65%'}, 1000, 'easeOutExpo');
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
		//show main menu modal
		$('.mainMenu').css("display", "block");
		setTimeout( function(){
			$('.mainMenu').addClass("visible");

				setTimeout( function(){
					$('.mainMenuLinks').addClass("visible");
				},500);

		},100);

		//

	});
  /* ========= Introduction ================================================== */


	/* ========= My Projects =================================================== */
	/* ========================================================================= */

	$('.current-project-list li').on('click', function(){
		LoadSelectedProject($(this).index()); //array based - starts at 0
		//alert(projectsList[selProj][0]);
		 DisplayProjectView();
	});


	//this function loads a selected project from the project selector into view
	function LoadSelectedProject(pid) {
		project = pid;
		//check to see if project exists...then fetch Data

		//populate project values
		$('.project-details header h2').html(projectsList[pid][0]); //project name
		$('.project-details header h3').html(projectsList[pid][1] + ' / ' + projectsList[pid][2]); //project company + / + project type
		$('.project-details header em').html(projectsList[pid][3]); //ux methods
		$('.project-details .brief').html(projectsList[pid][4]); //project brief
		$('.project-details .job-title').html(projectsList[pid][5]); //assigned job title(s)
		$('.project-slides .summary').html(projectsList[pid][4]); //image description
		/*Grab first image within array */
		$('.project-slides img').attr("src", projectsList[pid][7][0][0]); //image source (aka img/mm_img_tspace.jpg)
		$('.project-slides .title').html(projectsList[pid][7][0][1]); //image caption
		projSlideTotal = projectsList[pid][7].length;
		BuildProjectSlideNavigation();

		//load images
		/*
		for(let i=0; i<projectsList[pid][5].length; i++){
			alert(projectsList[pid][5][i][0] + '-' + projectsList[pid][5][i][1]);
		}

		*/
		//function to load all ux deliverables
		LoadProjectUXDeliverables();

		//disable previous/next project buttons according to which project was selected
		if((pid+1) >= projTotal){
			DisableProjectNavigation('next', true);
		}else if(pid == 0){
			DisableProjectNavigation('previous', true);
		}
		//always default to disabling the previous project slide since we are loading
		//the project for the first time
		$('.prev-slide').prop("disabled", true);
		projectSlide=0;
	}

	//this function loads all ux deliverables from a project into the header as tags
	function LoadProjectUXDeliverables(){
	var i;
		$('.project-details .deliverables ul').html('');
		for(i=0;i<projectsList[project][6].length;i++){
			$('.project-details .deliverables ul').append('<li>'+ projectsList[project][6][i] + '</li>');
		}
	}

 //this function enables/disables the prev/next buttons to view projects
  function DisableProjectNavigation(btn, val){
		if(val){
			$('.'+btn+'-project').addClass("disabled");
			$('.'+btn+'-project').prop("disabled", true);
		}else{
			$('.'+btn+'-project').removeClass("disabled");
			$('.'+btn+'-project').prop("disabled", false);
		}
	}

	function LoadProjectView(){
		//project name
		$('.project-details header h2').fadeOut(speed, function(){
			$('.project-details header h2').html(projectsList[project][0]).fadeIn(speed);
			//enable previous project button
			if(project<projectsList.length){
				$('.previous-project').removeClass("disabled");
			}
		});
		//project company and type
		$('.project-details header h3').fadeOut(speed, function(){
			$('.project-details header h3').html(projectsList[project][1] + ' / ' + projectsList[project][2]).fadeIn(speed);
		});
		//ux methods
		$('.project-details header em').fadeOut(speed, function(){
			$('.project-details header em').html(projectsList[project][3]).fadeIn(speed);
		});
		//project brief
		$('.project-summary .brief').fadeOut(speed, function(){
			$('.project-summary .brief').html(projectsList[project][4]).fadeIn(speed);
		});
		//assigned job title(s)
		$('.project-summary .job-title').fadeOut(speed, function(){
			$('.project-summary .job-title').html(projectsList[project][5]).fadeIn(speed);
		});
		//ux deliverable(s)
		$('.project-summary .deliverables').fadeOut(speed, function(){
		 LoadProjectUXDeliverables();
		 $('.project-summary .deliverables').fadeIn(speed);
	 	});

		projSlideTotal = projectsList[project][7].length;
		//reset project slides to 0 since we are loading a new project into view
		projectSlide=0;
		LoadProjectSlides();
		BuildProjectSlideNavigation();
	}

	function LoadProjectSlides(){
		$('.project-slides img').fadeOut(speed, function(){
			$('.project-slides img').attr("src", projectsList[project][7][(projectSlide)][0]).fadeIn(speed);
		});

		$('.project-slides .title').fadeOut(speed, function(){
			$('.project-slides .title').html(projectsList[project][7][(projectSlide)][1]).fadeIn(speed);
		});

	  //disable next slide button if we are at the end of the list count
		if(projectSlide<(projSlideTotal-1)){
			if((projSlideTotal-1)==0){
				DisableProjectSlideNavigation("next", true);
			}
			DisableProjectSlideNavigation("next", false);
		}else{
			DisableProjectSlideNavigation("next", true);
		}
		//disable the previous slide button if we are at the first slide in list
		if(projectSlide==0){
			DisableProjectSlideNavigation("prev", true);
		}else{
			DisableProjectSlideNavigation("prev", false);
		}
	}

	//set project slide navigation
	function SetProjectSlideNavigation(){
		$('.proj-slides-nav ul li span').each(function(index){
			$(this).removeClass("active");
		});
		$('.proj-slides-nav ul li:nth-child('+ (projectSlide+1) +') span').addClass('active');
	}

	//this function enables/disables the prev/next buttons to view project slides
   function DisableProjectSlideNavigation(btn, val){
 		if(val){
 			$('.'+btn+'-slide').addClass("disabled");
 			$('.'+btn+'-slide').prop("disabled", true);
 		}else{
 			$('.'+btn+'-slide').removeClass("disabled");
 			$('.'+btn+'-slide').prop("disabled", false);
 		}
 	}

	function BuildProjectSlideNavigation(){
		$('.proj-slides-nav ul').html('');
		//todo: need to add unique titles to data and then insert into each list item title
		for(var i=0;i<projectsList[project][7].length;i++){
			$('.proj-slides-nav ul').append('<li><button title="Project view '+(i+1)+'"><span></span></button></li>');
		}
			$('.proj-slides-nav ul li:first-child span').addClass("active");
	}

	function ScrollMeTo(element){
		var elementTarget;
		if(element == "about"){ elementTarget = "#aboutMe";}
		$(".mainContentBox").mCustomScrollbar("stop").mCustomScrollbar("scrollTo",$(elementTarget),{scrollEasing:"easeInOut", scrollInertia: 1000});
	}

	$("body").on("click", ".sectionIntro .btnNext", function() {
		ScrollMeTo("about");
	});

 	//((((((((((((((((( PROJECT SLIDE NAVIGATION BUTTON DOTS ))))))))))))))))))))
	$("body").on("click", ".proj-slides-nav ul li", function() {
		projectSlide = $(this).index();
		LoadProjectSlides();
		SetProjectSlideNavigation();
	});

	//((((((((((((((((((((((((( PREVIOUS PROJECT BUTTON )))))))))))))))))))))))))
	$("body").on("click", ".previous-project", function(){
		project--;
		//alert((project+1) + ' ' + projectsList.length);
		LoadProjectView();

		if(project == 0){
			DisableProjectNavigation('previous', true);
		}
		DisableProjectNavigation('next', false);
	});

	//((((((((((((((((((((((((((( NEXT PROJECT BUTTON ))))))))))))))))))))))))))))
	$("body").on("click", ".next-project", function(){
		project++;
		//alert((project+1) + ' ' + projectsList.length);
		LoadProjectView();

		if(project == (projectsList.length-1)){
			DisableProjectNavigation('next', true);
		}
		DisableProjectNavigation('previous', false);
	});

	//((((((((((((((((((((( PREVIOUS SLIDE (PROJECT) BUTTON ))))))))))))))))))))))
	$("body").on("click", ".prev-slide", function(){
		projectSlide--;
		LoadProjectSlides();
		SetProjectSlideNavigation();
		/*
		if(project == 0){
			DisableProjectNavigation('previous', true);
		}
		DisableProjectNavigation('next', false);
		*/
	});

	//((((((((((((((((((((( PREVIOUS SLIDE (PROJECT) BUTTON ))))))))))))))))))))))
	$("body").on("click", ".next-slide", function(){
		projectSlide++;
		LoadProjectSlides();
		SetProjectSlideNavigation();
		/*
		if(project == 0){
			DisableProjectNavigation('previous', true);
		}
		DisableProjectNavigation('next', false);
		*/
	});

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
