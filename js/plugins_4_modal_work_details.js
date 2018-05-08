var formatDevice;

/*
				   
tabDataWorks[0][0] > Titre app
tabDataWorks[0][1] > Marque / client
tabDataWorks[0][2] > Type d'app / ex : Business Intelligence app.
tabDataWorks[0][3] > Catégorie de real / ex : UX / UI Design
tabDataWorks[0][4] > URL
tabDataWorks[0][5] > Chemin de l'image d'entête
tabDataWorks[0][6] > Description de l'app
tabDataWorks[0][7][0][0] > Chemin illustration img 1
tabDataWorks[0][7][0][1] > Légende img 1
tabDataWorks[0][7][0][2] > Width img 1
tabDataWorks[0][7][0][3] > Height img 1
tabDataWorks[0][7][0][4] > Device img 1 / ex : "desktop"
tabDataWorks[0][8][0] > Tag compétence 1
tabDataWorks[0][9] > Rôle sur le projet

*/



var illustrationSubBox = $(".illustrationSubBox");
	var deviceSimulBox = $(".deviceSimulBox");
		var screenSimulBox = $(".screenSimulBox");
			var workIllustration = $(".workIllustration");
				var imgWorkIllust = $(".workIllustration img");
		var laptopPart = $(".laptopPart");










// ======================================================================================================================= fonction de maj du contenu de la modal work details

function majBtnsNavWorks()
{
	var nbWorksProject = tabDataWorks.length;
	
	if( workDisplayed >= (nbWorksProject-1) )
	{
		$(".previousProject").fadeIn(500);
		$(".nextProject").fadeOut(500);
	}
	else if( workDisplayed== 0 )
	{
		$(".previousProject").fadeOut(500);
		$(".nextProject").fadeIn(500);
	}
	else
	{
		$(".previousProject").fadeIn(500);
		$(".nextProject").fadeIn(500);
	}
}

function majDataActiveWork()
{
		
	// Header section
		$(".sctWorkCntt.sctWorkMainInfo h2").html(tabDataWorks[workDisplayed][0]);
		$(".sctWorkCntt.sctWorkMainInfo h3").html(tabDataWorks[workDisplayed][1]+" / "+tabDataWorks[workDisplayed][2]);
		$(".sctWorkCntt.sctWorkMainInfo em").html(tabDataWorks[workDisplayed][3]);
		
	// Description section
		if(tabDataWorks[workDisplayed][4] == "")
		{
			$(".sctWorkCntt.sctDescription .projectLink").css("display","none");
			$(".sctWorkCntt.sctDescription .projectLink").attr("href", "#");
			$(".sctWorkCntt.sctDescription .projectLinkURL").html("");
		}
		else
		{
			$(".sctWorkCntt.sctDescription .projectLink").css("display","inline-block");
			/*$(".sctWorkCntt.sctDescription .projectLink").attr("href", "http://"+tabDataWorks[workDisplayed][4]);
			$(".sctWorkCntt.sctDescription .projectLinkURL").html(tabDataWorks[workDisplayed][4]);*/
			
			
			$(".sctWorkCntt.sctDescription .projectLink").attr("href", tabDataWorks[workDisplayed][4]);
			var tempStr = tabDataWorks[workDisplayed][4];
			var tempRes = tempStr.replace("https://", "");
			tempRes = tempRes.replace("http://", "");
			$(".sctWorkCntt.sctDescription .projectLinkURL").html(tempRes);
		}
		
		$(".sctWorkCntt.sctDescription .descriptionProject").html(tabDataWorks[workDisplayed][6]);
		
	// Captures section
		var nbIllustActiveProject = tabDataWorks[workDisplayed][7].length ;
		var htmlPucesCntt="";
		for(var i = 0; i < nbIllustActiveProject ; i++)
		{
			htmlPucesCntt+= '<li><button class="btn sliderBtn"><span class="puceSliderBtn"></span></button></li>';
		}
		$(".sctWorkCntt.sctCaptures .btnsNavSlider").html(htmlPucesCntt);
		
		// Maj des puces de nav du slider
		$(".sliderBtn").removeClass("active");
		$(".sliderBtn").eq(imgDisplayed).addClass("active");
		
	// Role section
		var nbTagsActiveProject = tabDataWorks[workDisplayed][8].length ;
		var htmlTagsCntt="";
		for(var i = 0; i < nbTagsActiveProject ; i++)
		{
			htmlTagsCntt+= '<li class="skillTag">'+tabDataWorks[workDisplayed][8][i]+'</li>';
		}
		$(".sctWorkCntt.sctRole .skillsTagsList").html(htmlTagsCntt);
		
		$(".sctWorkCntt.sctRole .roleOnTheProject").html(tabDataWorks[workDisplayed][9]);
}

// ---------------------------------------------------------- Fonctions chargement des fichiers du site et fonctionnalité de loading
	
	function preloadTabWorkIllust()
		{
			var nbIllustToPreload = tabDataWorks[workDisplayed][7].length;
			
			var imgToPreload = $("<img class='preloadBoxBckgd' src='"+tabDataWorks[workDisplayed][7][indexWorkIllustToPreLoad][0]+"' />");
			imgToPreload.css({"position":"absolute", "visibility":"hidden", "height":0, "display":"initial"});
				
			$('body').append(imgToPreload);
				
			imgToPreload.on('load', function()
			{
					
				// Suppression du bloc de DOM preloading
				$(".preloadBoxBckgd").remove();
				
				if(indexWorkIllustToPreLoad >= (nbIllustToPreload-1))
				{
					//console.log("Toutes les illustrations du projet ont été chargées.");
				}
				else
				{
					indexWorkIllustToPreLoad++;
					preloadTabWorkIllust();
				}	
			});
		}

// Remplit (sans afficher) la modal des détails d'un projet (projet 1 à l'init)
// Avec workToDisplay "next" ou "prev" ou nombre entier (= index exact du work à display)
// Avec isInitFilling une variabe booléenne pour signaler si la modal s'initialise, ie : chargement instantané des infos, sans anim
function majWorkDetailsModalFilling(workToDisplay, isInitFilling)
{
	hasProjectJustChanged = true;
		
	$(".navProjectBtn").addClass("workLoading");
	
	var nbWorksProject = tabDataWorks.length;
	var animDirection; // "next" ou "prev"
	var oldWorkDisplayed = workDisplayed;
	
	// 1. Définition de l'index du projet à afficher
	
	if(workToDisplay == "next")
	{
		animDirection = "next";
		workDisplayed = workDisplayed+1;
	}
	else if(workToDisplay == "prev")
	{
		animDirection = "prev";
		workDisplayed = workDisplayed-1;
	}
	else if(workToDisplay > -1 && workToDisplay < nbWorksProject)
	{
		if(workToDisplay>workDisplayed)
		{
			animDirection = "next";
		}
		else
		{
			animDirection = "prev";
		}
		workDisplayed = workToDisplay;
	}
	else
	{
		console.log("ERR-MAJINDPROJ001");
	}
	
	majBtnsNavWorks();
	
	// 2. Préchargement des images du slider du projet en cours + 1re image du slider du projet suivant !
	indexWorkIllustToPreLoad = 1; // reset de la variable à 1 pr dire à la fct de preload des illust du projet de commencer à la 2e img
	preloadTabWorkIllust();		
	
	/*// 2. Disparition de l'illust actuellement affiché
	
	var boxToHide, boxToShow;
	if($(".illustBox1").css("display") == "block")
	{
		boxToHide = ".illustBox1";
		boxToShow = ".illustBox2";
	}
	else
	{
		boxToHide = ".illustBox2";
		boxToShow = ".illustBox1";
	}*/
	
	imgDisplayed = 0;
	
	if(isInitFilling)
	{
		
		$(".sctWorkCntt.sctWorkMainInfo .bckgdBox").css("background-image", "url("+tabDataWorks[workDisplayed][10]+")");
		$(".sctWorkCntt.sctFooter .bckgdBox").css("background-image", "url("+tabDataWorks[workDisplayed][10]+")");
		majDataActiveWork();
		
		// Maj de la resolt de captures & illustration boxes
		initModal = true;
		majIllustrationSubBox();
		
		$(".navProjectBtn").removeClass("workLoading");		
	}
	else
	{
		//var elemToAnim = ".sctWorkMainInfo h2, .sctWorkMainInfo h3, .sctWorkMainInfo em, .sctDescription .projectLink, .sctDescription .descriptionProject, .sctCaptures .illustrationSubBox, .sctCaptures .illustLegend, .sctCaptures .btnsNavSlider, .sctRole .skillsTagsList, .sctRole .roleOnTheProject";
		var elemToAnim = ".sctWorkMainInfo h2, .sctWorkMainInfo h3, .sctWorkMainInfo em, .sctDescription .projectLink, .sctDescription .descriptionProject"; // A des fins de performance, seul les éléments potentiellements au-dessu de la ligne de flotaison sont concernés par l'anim
		// , .sctCaptures .illustrationSubBox
		
			// Maj de la resolt de captures & illustration boxes
			initModal = true;
			majIllustrationSubBox();
			
		$(elemToAnim).stop().animate({"opacity":0}, 1000, function()
		{
			majDataActiveWork();
			
			$(elemToAnim).stop().animate({"opacity":1}, 1000, function(){  $(".navProjectBtn").removeClass("workLoading");	});
		});
		$(".sctWorkCntt.sctWorkMainInfo .bckgdBox").stop().animate({"opacity":0}, 1000, function()
		{
			$(".sctWorkCntt.sctWorkMainInfo .bckgdBox").css("background-image", "url("+tabDataWorks[workDisplayed][10]+")");
			$(".sctWorkCntt.sctFooter .bckgdBox").css("background-image", "url("+tabDataWorks[workDisplayed][10]+")");
			
			$(".sctWorkCntt.sctWorkMainInfo .bckgdBox").stop().animate({"opacity":0.07}, 1000, function(){});
		});
			
	}
	
}







