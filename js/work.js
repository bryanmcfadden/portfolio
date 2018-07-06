/* ===========================================================================
07/03/2018
Bryan McFadden

All events and functionality required for the work (recent projects) pages
============================================================================= */

var projectSlide;

/* ========================================================================== */
// FUNCTIONS
/* ========================================================================== */

// loads project and displays in content view
function DisplayProjectView(){
  var proj = $(".projContentBox");

  if(proj.hasClass("open")){
    //alert('closing project view');
    proj.toggleClass("open");
    proj.addClass("close");
    proj.animate({opacity: 0.0,},1000,function(){
      proj.css({visibility: "hidden"});
      // clear all slides from project view
      $('.project-slides ul').empty();
      $('.proj-slides-nav ul').empty();
    });
    $('.mainContentBox').animate({opacity: 1, visibility: "visible"},1000);
    //$(".work").animate({opacity: 1, visibility: "visible"},1000);
    $('.hamburger').removeClass("light is-active");
  }else{
    //alert('opening project view');
    proj.toggleClass("open");
    proj.removeClass("close");
    proj.css({visibility:"visible", opacity: 0.0}).animate({opacity: 1.0},1000);
    //$(".work").animate({opacity: 0, visibility: "hidden"},1000);
    $('.mainContentBox').animate({opacity: 0, visibility: "hidden"},1000);
    $('.hamburger').addClass("light is-active");
  }
}

// -----------------------------------------------------------------------------
// loads a selected project from the project selector into view
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

	//function to load all ux deliverables
	LoadProjectUXDeliverables();

	projSlideTotal = projectsList[pid][7].length;
	projectSlide=0;
	LoadProjectSlides();
	BuildProjectSlideNavigation();
	/*Grab first image within array
	$('.project-slides img').attr("src", projectsList[pid][7][0][0]); //image source (aka img/mm_img_tspace.jpg)
	$('.project-slides .title').html(projectsList[pid][7][0][1]); //image caption
	*/

	//disable previous/next project buttons according to which project was selected
	if((pid+1) >= projTotal){
		DisableProjectNavigation('next', true);
	}else if(pid == 0){
		DisableProjectNavigation('previous', true);
	}
	//always default to disabling the previous project slide since we are loading
	//the project for the first time
	$('.prev-slide').prop("disabled", true);
}

// -----------------------------------------------------------------------------
// loads all ux deliverables from a project into the header as tags
function LoadProjectUXDeliverables(){
var i;
	$('.project-details .deliverables ul').html('');
	for(i=0;i<projectsList[project][6].length;i++){
		$('.project-details .deliverables ul').append('<li>'+ projectsList[project][6][i] + '</li>');
	}
}

// -----------------------------------------------------------------------------
// enables/disables the prev/next buttons to view projects
function DisableProjectNavigation(btn, val){
	if(val){
		$('.'+btn+'-project').addClass("disabled");
		$('.'+btn+'-project').prop("disabled", true);
	}else{
		$('.'+btn+'-project').removeClass("disabled");
		$('.'+btn+'-project').prop("disabled", false);
	}
}

// -----------------------------------------------------------------------------
// Loads a selected project into project view when already open
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
	projectSlide=0;  //reset project slides to 0 since we are loading a new project into view
	LoadProjectSlides();
	BuildProjectSlideNavigation();
}

// Sets secondary project slide navigation to select first item
// -----------------------------------------------------------------------------
function SetProjectSlideNavigation(){
	$('.proj-slides-nav ul li').each(function(index){
		$(this).removeClass("active");
	});

  $('.proj-slides-nav ul li.sec-slide-'+projectSlide).addClass('active');
}

// loads project slides for a selected project
// -----------------------------------------------------------------------------
function LoadProjectSlides(){
	for(var s = 0; s < projSlideTotal; s++){
	//	alert(projectsList[project][7][s][0]);
	// for each slide, make a hidden div
		$('.project-details .project-slides ul').append('<li class="col-md-8 slide_' + s + ' hidden"><img src="'+ projectsList[project][7][s][0] + '" /><span>' + projectsList[project][7][s][1] + '</span>');
	}
	$('.project-details .project-slides ul li:first-child').removeClass('hidden');
	$('.project-details .project-slides ul li:first-child').delay(2000).animate({'opacity':1}, 1000, function(){
		// do nothing
	});
	/*
	$('.project-slides img').fadeOut(speed, function(){
		$('.project-slides img').attr("src", projectsList[project][7][(projectSlide)][0]).fadeIn(speed);
	});

	$('.project-slides .title').fadeOut(speed, function(){
		$('.project-slides .title').html(projectsList[project][7][(projectSlide)][1]).fadeIn(speed);
	});
	*/
  //disable next slide button if we are at the end of the list count
	if(projectSlide<(projSlideTotal-1)){
		if((projSlideTotal-1)==0){
			DisableProjectSlideNavigation("next", true);
		}
		DisableProjectSlideNavigation("next", false);
	}else{
		DisableProjectSlideNavigation("next", true);
	}
	//FUNCTION -- disable the previous slide button if we are at the first slide in list
	if(projectSlide==0){
		DisableProjectSlideNavigation("prev", true);
	}else{
		DisableProjectSlideNavigation("prev", false);
	}
}

//this function enables/disables the prev/next buttons to view project slides
// -----------------------------------------------------------------------------
 function DisableProjectSlideNavigation(btn, val){
		if(val){
			$('.'+btn+'-slide').addClass("disabled");
			$('.'+btn+'-slide').prop("disabled", true);
		}else{
			$('.'+btn+'-slide').removeClass("disabled");
			$('.'+btn+'-slide').prop("disabled", false);
		}
	}

// create secondary slide navigation under project slides
// -----------------------------------------------------------------------------
function BuildProjectSlideNavigation(){
	$('.proj-slides-nav ul').html('');
	//todo: need to add unique titles to data and then insert into each list item title
	for(var i=0;i<projectsList[project][7].length;i++){
		$('.proj-slides-nav ul').append('<li class="sec-slide-'+i+'"><button title="Project view '+(i+1)+'"><span></span></button></li>');
	}
		$('.proj-slides-nav ul li:first-child').addClass("active");
}

/* ========================================================================== */
// EVENTS
/* ========================================================================== */

// View more projects button
$('body').on('click', '.view-more-projects', function(){
	var btn = $('.view-more-projects');
	if(btn.hasClass('open')){
		//alert('open');
		$('.work li.hidden-project').each(function(index){
    	$(this).delay(300*index).addClass('hidden');
		});
    btn.html('<span>+</span>more projects');
		ScrollMeTo('work');
  }else{
		//alert('closed');
		$('.work li.hidden-project').each(function(index){
    	$(this).delay(300*index).removeClass('hidden');
    });
		btn.html('<span>-</span>less projects');
  }
  btn.toggleClass('open');
  btn.blur();
});

// Project list item selection
// -----------------------------------------------------------------------------
$('.current-project-list li').on('click', function(){
	LoadSelectedProject($(this).index()); //array based - starts at 0
	//alert(projectsList[selProj][0]);
	DisplayProjectView();
	viewingProject = true;
});

// Project slides secondary navigation buttons (dots)
// -----------------------------------------------------------------------------
$("body").on("click", ".proj-slides-nav ul li", function() {
	projectSlide = ($(this).index()-1);
	LoadProjectSlides();
	SetProjectSlideNavigation();
});

// Previous project button
// -----------------------------------------------------------------------------
$("body").on("click", ".previous-project", function(){
	project--;
	//alert((project+1) + ' ' + projectsList.length);
	LoadProjectView();

	if(project == 0){
		DisableProjectNavigation('previous', true);
	}
	DisableProjectNavigation('next', false);
});

// Next project button
// -----------------------------------------------------------------------------
$("body").on("click", ".next-project", function(){
	project++;
	//alert((project+1) + ' ' + projectsList.length);
	LoadProjectView();

	if(project == (projectsList.length-1)){
		DisableProjectNavigation('next', true);
	}
	DisableProjectNavigation('previous', false);
});

// Previous project slide button
$("body").on("click", ".prev-slide", function(){
	projectSlide--;
	LoadProjectSlides();
	SetProjectSlideNavigation();

  var sel;
	var prev = '.project-details .project-slides ul li.slide_' + (projectSlide+1);









});

// Next project slide button
// -----------------------------------------------------------------------------
$("body").on("click", ".next-slide", function(){
	projectSlide++;
	var sel = '.project-details .project-slides ul li.slide_' + projectSlide;
	var prev;

	if(projectSlide != 1){
		prev = '.project-details .project-slides ul li.slide_'+ (projectSlide-1);
	}else{
		prev = '.project-details .project-slides ul li.slide_0';
	}

  $('.project-slides .next-slide').blur();
  // enable/disable slide buttons
  if(projectSlide == (projSlideTotal-1)){
    DisableProjectSlideNavigation("next", true);
  }else{
    DisableProjectSlideNavigation("next", false);
  }
  if(projectSlide > 0){
    DisableProjectSlideNavigation("prev", false);
  }else{
    DisableProjectSlideNavigation("prev", true);
  }

	$(prev).animate({'opacity' : 0}, speed, function(){
		$(prev).addClass('hidden');
		// TODO: need to deselect and set secondary navigation
    SetProjectSlideNavigation();

		$(sel).removeClass('hidden');
		$(sel).animate({'opacity':1}, speed, function(){
			 // TODO: enable previous/next slide buttons
		});
	});
});
