/* ===========================================================================
05/15/2018
Bryan McFadden

All functionality required for my portfolio pages
============================================================================= */

//Custom Scrollbar Creation
$(window).load(function(){
var skillsShown;
var project, projectSlide;
var projTotal = projectsList.length;

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

		//load images
		/*
		for(let i=0; i<projectsList[pid][5].length; i++){
			alert(projectsList[pid][5][i][0] + '-' + projectsList[pid][5][i][1]);
		}
		*/
		//function to load all ux deliverables
		LoadProjectUXDeliverables();

		if(pid=>(projTotal-1)){
			$('.next-slide').addClass("disabled");
		}else if((pid-1)==0){
			$('.prev-slide').addClass("disabled");
		}
		projectSlide=0;
	}

	//this function loads all ux deliverables from project into the header
	function LoadProjectUXDeliverables(){
	var i;
		$('.project-details .deliverables ul').html('');
		for(i=0;i<projectsList[project][6].length;i++){
			$('.project-details .deliverables ul').append('<li>'+ projectsList[project][6][i] + '</li>');
		}
	}



	$("body").on("click", ".next-project", function(){
		project++;

		$('.project-details header h2').fadeOut(1000, function(){
			$('.project-details header h2').html(projectsList[project][0]).fadeIn(1000);

			//enable previous project button
			if(project<projectsList.length){
				$('.previous-project').removeClass("disabled");
			}
		});

		//set the project company and type
		$('.project-details header h3').fadeOut(1000, function(){
			$('.project-details header h3').html(projectsList[project][1] + ' / ' + projectsList[project][2]).fadeIn(1000);
		});

		//set the ux roles
		$('.project-details header em').fadeOut(1000, function(){
			$('.project-details header em').html(projectsList[project][3]).fadeIn(1000);
		});

		//set the project brief
		$('.project-summary .brief').fadeOut(1000, function(){
			$('.project-summary .brief').html(projectsList[project][4]).fadeIn(1000);
		});

		//set the assigned job title(s)
		$('.project-summary .job-title').fadeOut(1000, function(){
			$('.project-summary .job-title').html(projectsList[project][5]).fadeIn(1000);
		});

		$('.project-summary .deliverables').fadeOut(1000, function(){
		 LoadProjectUXDeliverables();
		 $('.project-summary .deliverables').fadeIn(1000);
	 });

		//set slide description (slide 0)
		$('.proj-slides .summary').fadeOut(1000, function(){
			$('.proj-slides .summary').html(projectsList[project][7][0][0]).fadeIn(1000);
		});

		//set slide title (slide 0)
		$('.proj-slides .title').fadeOut(1000, function(){
			$('.proj-slides .title').html(projectsList[project][7][0][2]).fadeIn(1000);
		});

		if((project-1)==projectsList.length){
			$('.next-project').addClass("disabled");
		}
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
