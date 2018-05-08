
	var storyTellingActivated = true;
	var stConsoleStep = 0;
	var stConsoleInUse = false;
	var stResizedNotDone = true;
	var stBdxStoryPart1NotDone = true;
	var stBdxStoryPart2NotDone = true;
	var stCVNotDone = true;
	var stRDVAlreadyProposed = false;
	var stOtherExpNotDone = true;
	var stFrontExpNotDone = true;
	var stUXExpNotDone = true;
	var stDropALineNotDone = true;
	var stFinalContactNotDone = true;
	var stBottomReachedNotDone = true;



	var mobileMaxWidth = 1100;
	var isDeviceMobile = false; // true sir device.width < 1100px
	var isDeviceSmartphone = false; // true sir device.width < ???

	var indexImgToPreLoad = 0;
	var indexWorkIllustToPreLoad = 0;
	var iterationImgToPreloadError = 0;
	var tabImgToPreload;

	var msgOptimSitePrinted = false;
	var timerMsgOptimSite;
	var delayTimerMsgOptimSite = 10000;

	var scrollTopVal;

	var indexDisplayedQuote = 0; // index permettant de savoir quelle citation est actuellement affichée

	var lastDeviceFormat, newDeviceFormat; // "landscape", "portrait" / utilisés pour le scrollTop dynamique sur smartphone landscape, à hauteur du slider qd resize en landscape

	var hasProjectJustChanged = true; // permet sous tablet et smartphone de set correctement la 1re img du slider, au changement du projet actif

	var isUXUIExpertiseClicked = false;
	var isFrontExpertiseClicked = false;
	var isMoreExpertiseClicked = false;

	var todayDate;
	var tomorrowDate;

$(document).ready(function(){

	// ============================================================ INITIALISATION (loader + global design)
	majImgPathTabDataWorks();
	timerMsgOptimSite = setTimeout(function(){showMshOptimSite();}, delayTimerMsgOptimSite);

	// Whean document ready (which means JS and CSS files loaded), play init function
	initAppOpening();

	newDeviceFormat = returnFormatDevice($(window).width(), $(window).height());

	// ========================================================================================== MENU BTNS
	$(".mainMenuLinks .linkToHome").click(function() { closeMenuModal(); setTimeout(function(){scrollToElement("mainCnttTop");},1000); });
	$(".mainMenuLinks .linkToAbout").click(function() { closeMenuModal(); setTimeout(function(){scrollToElement("about");},1000); });
	$(".mainMenuLinks .linkToExpertise").click(function() { closeMenuModal(); setTimeout(function(){scrollToElement("expertise");},1000); });
	$(".mainMenuLinks .linkToWork").click(function() { closeMenuModal(); setTimeout(function(){scrollToElement("work");},1000); });
	$(".mainMenuLinks .linkToContact").click(function() { closeMenuModal(); setTimeout(function(){scrollToElement("contact");},1000); });

  // ==========================================================================================
	$(".makeMeTravel").click(function() { closeAboutCityBoxAnim(); setTimeout(function(){scrollToElement("contact");},1000); });

	$(".subWrapperBtnNextSection").click(function(){
		$(".btnNextSection").removeClass("movingArrow");
	  scrollToElement("about");
	});

	$(".dropALineBtn").click(function()
	{
		scrollToElement("contact");

		// STORY TELLING
		if(storyTellingActivated && stDropALineNotDone)
		{
			stDropALineNotDone = false;

			console.log("---");
			console.log("");
			console.log("Interested in my skills, uh?");
			console.log("That's great. You know what to do next ;)");
			console.log("");
		}
	});

	$(".sctMainCntt .backToTop").click(function()
	{
		scrollToElement("mainCnttTop");
	});

	$(".sctWorkCntt .backToTop").click(function()
	{
		scrollToElement("workModalTop");
	});



	$("body").on("click", '.openMenu', function()
	{
		$(".menuBtn").removeClass("openMenu");
		$(".menuBtn").addClass("modalMenuBtn");

		scrollTopVal = $(document).scrollTop();

		if(isDeviceMobile)
		{
			$("html").css({"overflow":"hidden", "height":"100%"});
				$(".mainMenuBox").css({"position":"fixed"});
					$(".mainMenuBox").css({"height":"100%"});
		}

		if(isTransformSupported())
		{
			$(".menuBtn").addClass("crossBtn");
		}
		else
		{
			$(".menuBtn").addClass("crossBtnStatic");
		}



		$(".mainMenuBox").css("display", "block");
		setTimeout(function()
		{
			$(".mainMenuBox").addClass("visible");

			setTimeout(function()
			{

				if(isDeviceMobile)
				{
					$("html").css({"overflow":"hidden", "height":"100%"}); // cross picto ok / pas de cliping / overflow non bloqué*/
					/*$(".rootBox").css({"overflow":"hidden", "height":"100%"});
					$("body").css({"overflow":"hidden", "height":"100%"}); // prob cross picto / pas de cliping / overflow bien bloqué*/
				}

				$(".mainMenuLinks").addClass("visibleLinks");

			},500);

			setTimeout(function(){ $(".menuBtn").addClass("closeMenu");},1000);


		},100);

	});

	$("body").on("click", '.closeMenu', function()
	{

		closeMenuModal();
	});


	$("body").on("click", '.moreWorksCntt', function()
	{
		if($(this).hasClass("showMoreWorks"))
		{
			$(".hiddenWork").removeClass("hidden");

			$(this).removeClass("showMoreWorks");
			$(this).addClass("showLessWorks");

			$(".leftBotCorner").eq(0).css("border-radius", 0);
			$(".rightBotCorner").eq(0).css("border-radius", 0);

			$(".labelBtnMoreWorks").html("Less projects");

		}
		else
		{
			$(".hiddenWork").addClass("hidden");

			if($(window).width() > 520)
			{
				$(".leftBotCorner").eq(0).css("border-radius", "0 0 0 10px");
				$(".rightBotCorner").eq(0).css("border-radius", "0 0 10px 0");
			}

			$(this).removeClass("showLessWorks");
			$(this).addClass("showMoreWorks");

			$(".labelBtnMoreWorks").html("More projects");
		}

	});


	/* ============================================================================================= for debug only */
	// =============================================================================================
	// =============================================================================================
	// =============================================================================================
	// =============================================================================================

	//<div class="debug"><button class="btn1">ScrollTop</button>
	/*
	$("body").on("click", '.btn1', function()
	{
		$(".debug").css("background-color", "orange");
		// $(document, "body", "html", ".rootBox", ".mainContentBox").scrollTop(0);

		 scrollToElement("mainCnttTop");

	});

	$("body").on("click", '.btn2', function()
	{

		 $(".rootBox").css("top","0");
		 $(".rootBox").css("margin-top","0");
		 $(".mainContentBox").css("top","0");
		 $(".mainContentBox").css("margin-top","0");
		 $(".rootBox").css("overflow","hidden");
		 $(".mainContentBox").css("overflow","hidden");
		 $(".rootBox").css("overflow","visible");
		 $(".mainContentBox").css("overflow","visible");

	});
	$("body").on("click", '.btn3', function()
	{
		$(".mainContentBox").css("z-index","999");
		$(".debug").css("background-color", "brown");
		$(document, "body", "html", ".rootBox", ".mainContentBox").css("height","0");
		 $(document, "body", "html", ".rootBox", ".mainContentBox").css("height","auto");
	});
	*/



	/* end of debug only */
	// =============================================================================================
	// =============================================================================================
	// =============================================================================================
	// =============================================================================================



	$("body").on("click", '.openWorkDetails', function(){
		var indexWorkToDisplay = $(this).index(); // $( this ).parent("li").index();

		initModal = true;

		if($(".menuBtn").hasClass("darkMenuBtn"))
		{
			previousMenuBtnStyle = "darkMenuBtn";
		}
		else if($(".menuBtn").hasClass("lightMenuBtn"))
		{
			previousMenuBtnStyle = "lightMenuBtn";
		}

		$(".menuBtn").removeClass("openMenu");
		$(".menuBtn").addClass("modalMenuBtn");

		scrollTopVal = $(document).scrollTop();

		if(isDeviceMobile)
		{
			/*$("html").css({"overflow":"hidden", "height":"100%"});*/
			$(".modalWorkDetails").css({"position":"fixed"});
			//$(".modalWorkDetails").css({"height":"100%"});

			// .modalWorkDetails défini dans css par défaut avec overflow hidden et height 100%
			$(".modalWorkDetails").css({"height":"auto"});

		}
		else
		{
			// add custom scroll bar to .modalWorkDetails
			$(".modalWorkDetails #mCSB_2_container").css("top",0);
			initScrollBarWorkdDetailsModal();
		}


		if(isTransformSupported())
		{
			$(".menuBtn").addClass("crossBtn");
		}
		else
		{
			$(".menuBtn").addClass("crossBtnStatic");
		}


		/*Solution 1 :
		$(".modalWorkDetails").css("display", "block");*/

		/*Solution 2 :*/
		$(".modalWorkDetails").css("visibility", "visible");

		setTimeout(function()
		{
			//$(".modalWorkDetails").addClass("visible");

			// Chargement des data
			majWorkDetailsModalFilling(indexWorkToDisplay, true);
			// Maj de la resolt de captures & illustration boxes
			//majIllustrationSubBox(); // désactivé car inclus désormais dans  majWorkDetailsModalFilling() ci-dessus

			// Solution 1 : $(".modalWorkDetails").removeClass("hidden");

			/**/
			// Solution 2 :

			if(isDeviceMobile)
			{
				// Hack for iPhone, which doesn't render properly offscreen element with position:fixed
				$(".modalWorkDetails").css({"position":"relative"});
				$(".modalWorkDetails").css({"position":"fixed"});
			}
			$(".rootBox").removeClass("worksModalClosed");
			$(".rootBox").removeClass("worksModalOpened");
			$(".rootBox").removeClass("worksModalToClose");
			$(".rootBox").addClass("worksModalToOpen");



			var animTime = 2500;
			if(isDeviceMobile)
			{
				animTime = 1100;
			}

			setTimeout(function()
			{

				if(isDeviceMobile)
				{
					//$("html").css({"overflow":"hidden", "height":"100%"}); // cross picto ok / pas de cliping / overflow non bloqué*/
					/*$(".rootBox").css({"overflow":"hidden", "height":"100%"});
					$("body").css({"overflow":"hidden", "height":"100%"}); // prob cross picto / pas de cliping / overflow bien bloqué*/

					$(document).scrollTop(0);
					//$(".modalWorkDetails").css({"position":"relative", "top":0, "left":0});
					setTimeout(function(){
						$(".modalWorkDetails").css({"position":"relative", "top":0, "left":0});
						$(".mainContentBox").css("display","none");
						$(".rootBox").removeClass("worksModalToOpen");
						$(".rootBox").addClass("worksModalOpened");
					},100);
					//$(".mainContentBox").css("display","none");
				}

				//$(".mainMenuLinks").addClass("visibleLinks");

			},animTime);

			setTimeout(function(){ $(".menuBtn").addClass("closeWorkDetails");},1000);


		},100);

	});


	$("body").on("click", '.nextProject', function()
	{
		if(!$(".nextProject").hasClass("workLoading"))
		{
			majWorkDetailsModalFilling("next", false); // false => no initFilling (ie animations to activate)
		}
	});

	$("body").on("click", '.previousProject', function()
	{
		if(!$(".nextProject").hasClass("workLoading"))
		{
			majWorkDetailsModalFilling("prev", false); // false => no initFilling (ie animations to activate)
		}
	});


	$("body").on("click", '.closeWorkDetails', function()
	{

		$(".menuBtn").removeClass("closeWorkDetails");

		if(isDeviceMobile)
						{
							//$(".modalWorkDetails").css({"height":"100vh;"});

							//$("html").css({"overflow":"auto", "height":"auto"});
							//$("body").css({"overflow":"auto", "height":"auto"});
							//$(".rootBox").css({"overflow":"auto", "height":"auto"});

							/*V1 :
							$(".modalWorkDetails").css("position","fixed");

							$(".mainContentBox").css("display","block");

							$(document).scrollTop(scrollTopVal);*/

							var currentScrollTop = $(document).scrollTop();

							$(".modalWorkDetails").css({"height":"100vh", "overflow":"auto"});
							$(".modalWorkDetails").scrollTop(currentScrollTop);
							$(".modalWorkDetails").css("position","fixed");

							$(".mainContentBox").css("display","block");

							$(document).scrollTop(scrollTopVal);
						}

		//setTimeout(function(){$(".menuBtn").removeClass("closeWorkDetails");},100);

		setTimeout(function(){$(".menuBtn").removeClass("crossBtn");},200);
		setTimeout(function(){$(".menuBtn").removeClass("crossBtnStatic");},200);

		//$(".mainMenuLinks").removeClass("visibleLinks");

		/* Solution 1 :
		setTimeout(function(){ $(".modalWorkDetails").addClass("hidden"); },200);*/

		// Solution 2 :
		setTimeout(function(){
			$(".rootBox").removeClass("worksModalClosed");
			$(".rootBox").removeClass("worksModalOpened");
			$(".rootBox").removeClass("worksModalToOpen");
			$(".rootBox").addClass("worksModalToClose");
		},200);

		var animTime = 2500;
			if(isDeviceMobile)
			{
				animTime = 1300;
			}

		setTimeout(function(){

				if(isDeviceMobile)
						{

							$(".rootBox").addClass("worksModalClosed");
							$(".rootBox").removeClass("worksModalToClose");
						}

						/*Solution 1 :
						$(".modalWorkDetails").css("display", "none");*/

						/*Solution 2 :*/
						$(".modalWorkDetails").css("visibility", "hidden");

						$(".menuBtn").addClass("openMenu");

						/* before :

						$(".menuBtn").removeClass("darkMenuBtn, lightMenuBtn");
						$(".menuBtn").addClass(previousMenuBtnStyle);
						*/

						if(previousMenuBtnStyle=="darkMenuBtn" && !$(".menuBtn").hasClass("darkMenuBtn"))
						{
							$(".menuBtn").removeClass("lightMenuBtn");
							$(".menuBtn").addClass(previousMenuBtnStyle);
						}
						else if(previousMenuBtnStyle=="lightMenuBtn" && !$(".menuBtn").hasClass("lightMenuBtn"))
						{
							$(".menuBtn").removeClass("darkMenuBtn");
							$(".menuBtn").addClass(previousMenuBtnStyle);
						}
						/*else
						{
							alert("Warning #45e5 - API service b2");
						}*/

						$(".menuBtn").removeClass("modalMenuBtn");


			},animTime);
	});


	$("body").on("click", '.nextSlideBtn', function()
	{
		if(!$(".nextSlideBtn").hasClass("illustLoading"))
		{
			majSlider("next");
		}
	});
	$("body").on("click", '.prevSlideBtn', function()
	{
		if(!$(".prevSlideBtn").hasClass("illustLoading"))
		{
			majSlider("prev");
		}
	});

	$("body").on("click", '.sliderBtn', function()
	{
		majSlider($( this ).parent("li").index());
	});



	// -----------------------------------------------------------------------------------------------------------  SECTION ABOUT ME

	var chronoHiddingFlagBtn;

	function hiddingFlagBtns()
	{
		clearTimeout(chronoHiddingFlagBtn);

		$(".sctAboutMe .goldBtn.enCV, .sctAboutMe .goldBtn.frCV, .sctAboutMe h4").animate({"opacity": "0"},500, function(){

			$(".sctAboutMe .goldBtn.enCV, .sctAboutMe .goldBtn.frCV").css({"width": "1px", "visibility":"hidden", "opacity" : 0, "margin-left":"0"});
			$(".sctAboutMe .goldBtn.enCV").css({"margin-right":"0"});

			$(".sctAboutMe .goldBtn.mainBtn").fadeIn(500);
			$(".sctAboutMe h4").html("Want to know more?"); $(".sctAboutMe h4").animate({"opacity": "1"},500);

		});
	}

	$(".sctAboutMe .goldBtn.mainBtn").click(function()
	{
		chronoHiddingFlagBtn = setTimeout(function(){hiddingFlagBtns();},15000);


		$(".sctAboutMe .goldBtn.mainBtn").fadeOut(500, function(){
			$(".sctAboutMe .goldBtn.enCV, .sctAboutMe .goldBtn.frCV").css({"width": "60px", "visibility":"visible", "opacity" : 0});
			$(".sctAboutMe .goldBtn.enCV").css({"margin-right":"15px"});
			$(".sctAboutMe .goldBtn.frCV").css({"margin-left":"80px"});
			$(".sctAboutMe .goldBtn.enCV, .sctAboutMe .goldBtn.frCV, .sctAboutMe h4").animate({"opacity": "1", "margin-left":"0"},500);
		});

		$(".sctAboutMe h4").animate({"opacity": "0", "margin-left":"0"},500, function(){
			$(".sctAboutMe h4").html(".docx or .pdf ?");
		});

	});

	$(".sctAboutMe .goldBtn.enCV, .sctAboutMe .goldBtn.frCV").click(function()
	{
		hiddingFlagBtns();

		// STORY TELLING
		/*
		if(storyTellingActivated && stCVNotDone)
		{
			stCVNotDone = false;

			console.log("---");
			console.log("");
			console.log("If this CV (100% authentic of course) put some stars in your eyes and some heat in your heart,");
			console.log("I will be glad to meet you over a coffee.");
			if(stRDVAlreadyProposed)
			{
				console.log("At the risk of repeating myself...");
			}
			console.log("=> you, me, Meriadeck's Starbucks (41 Rue du Château d'Eau, 33000 Bordeaux), next saturday, 8AM ;)");
			console.log("Interested? -> letsmeetus@aldricrivat.com");
			console.log("");

			stRDVAlreadyProposed= true;
		}
		*/
	});

	$(".sctAboutMe .goldBtn.enCV, .sctAboutMe .goldBtn.frCV").hover(function()
	{
		clearTimeout(chronoHiddingFlagBtn);
		chronoHiddingFlagBtn = setTimeout(function(){hiddingFlagBtns();},15000);
	});





	// -----------------------------------------------------------------------------------------------------------  end of SECTION ABOUT ME

	// -----------------------------------------------------------------------------------------------------------  SECTION FOOTER


	$(".sctContact address .goldBtn").click(function()
	{
		// STORY TELLING
		if(storyTellingActivated && stFinalContactNotDone)
		{
			stFinalContactNotDone = false;

			console.log("---");
			console.log("");
			console.log("Feel free to contact me at any hour of the day and  night.");
			console.log("You prefer to see me in the flesh? Great, let's meet in town => letsmeet@aldricrivat.com");
			console.log("");
		}
	});

	$(".sctFooter").hover(function()
	{
		// STORY TELLING
		if(storyTellingActivated && stBottomReachedNotDone)
		{
			stBottomReachedNotDone = false;

			console.log("---");
			console.log("");
			console.log("Ow! You reached the bottom! Should I conclude you've enjoyed my website? :D");
			console.log("Don't hesitate to tell me about it => wantsomefeedback@aldricrivat.com");
			console.log("Thanks for stopping by! :)");
			console.log("");
		}
	});




	// -----------------------------------------------------------------------------------------------------------  end of SECTION FOOTER






	// -----------------------------------------------------------------------------------------------------------  SECTION INSPIRATION



	/*$(".displayNewQuote").hover(function()
	{
		$(".displayNewQuote [class^='icon-']").toggleClass("spining");
	});*/

	$(".displayNewQuote").click(function()
	{
		displayNewQuote();
	});





	// -----------------------------------------------------------------------------------------------------------  SECTION EXPERTISE


	$(".moreCntntBtn").click(function()
	{
		if($(this).hasClass("showMore"))
		{
			var needToSetScrollTop = false;
			var scrollDurationExp = 1000;



			// 0. Maj du scroll si nécessaire, pour un max de confort de lecture

			var activeColExpertise = $(this).parent(".colExpertise");

			// Si isDeviceMobile : système de calcul basé sur le scroll natif, sinon sur la custom scroll bar !
			if(isDeviceMobile)
			{
				var posiExPertiseCol = parseInt(activeColExpertise.offset().top);
				var targetPosi = parseInt($('html').scrollTop());
				if(targetPosi <= 0 || targetPosi == undefined || targetPosi == null)
				{
					targetPosi = parseInt($('body').scrollTop());
				}

				//$(".debug").html("targetPosi : "+targetPosi+"<br>"+"targetPosi2 : "+targetPosi2+"<br>"+"targetPosi3 : "+targetPosi3+"<br>");


				//$(".debug").html("$('html').scrollTop() : "+$('html').scrollTop()+" <br> $('body').scrollTop() : "+$('body').scrollTop()+" <br> posiExPertiseCol : "+posiExPertiseCol);



				if( (targetPosi+20) < posiExPertiseCol || (targetPosi-20) > posiExPertiseCol )
				{
					needToSetScrollTop = true;

					// Version tablet / smartphone ...
					$('html,body').stop().animate({ scrollTop: (activeColExpertise.offset().top-0)+"px" }, scrollDurationExp);
					// même comportement que sous smartphone - excepté que sous smartphone il y a la condition si device = format portrait
				}
				else
				{
					needToSetScrollTop = false;
				}

			}
			else
			{
				var offsetTopRootBox = parseInt($(".mainContentBox  .mCSB_container").css("top"))*-1;

				var topPosiColExpertiseInMainCnttBox = $(".sctExpertise").position();
					topPosiColExpertiseInMainCnttBox =  parseInt(topPosiColExpertiseInMainCnttBox.top);

					topPosiColExpertiseInMainCnttBox+= parseInt($(".sctExpertise").css("padding-top")) + parseInt($(".sctExpertise h2").css("padding-bottom")) + parseInt($(".sctExpertise h2").css("margin-bottom")) + parseInt($(".sctExpertise h2").css("height")) - 20; // 40 marge d'aération

				//var posiExPertiseCol = parseInt(parseactiveColExpertise.offset().top);
				//var targetPosi = parseInt(activeColExpertise.scrollTop());

				if( (topPosiColExpertiseInMainCnttBox+20) < offsetTopRootBox || (topPosiColExpertiseInMainCnttBox-20) > offsetTopRootBox )
				{
					needToSetScrollTop = true;

					/*var docHeightVal = $(window).height();

					var offsetTopRootBox = parseInt($(".mainContentBox  .mCSB_container").css("top")) * -1;

					var topPosiColExpertiseInMainCnttBox = activeColExpertise.position();
						topPosiColExpertiseInMainCnttBox =  parseInt(topPosiInspiBoxInMainCnttBox.top);*/




					//var topToactiveColExpertise = offsetTopRootBox + diffBottomInspiBoxVsBottomViewport;
					//, timeout:2000
					$(".mainContentBox").mCustomScrollbar("stop").mCustomScrollbar("scrollTo",topPosiColExpertiseInMainCnttBox,{scrollEasing:"easeInOut", scrollInertia:scrollDurationExp});

					//$(".mainContentBox").mCustomScrollbar("stop").mCustomScrollbar("scrollTo",activeColExpertise,{scrollEasing:"easeInOut"});
				}
				else
				{
					needToSetScrollTop = false;
				}

			}











			$(this).removeClass("showMore");
			$(this).addClass("showLess");
			var compTextBlock = $(this).parent(".colExpertise").find(".part2");
			compTextBlock.css({"position":"absolute", "opacity":"0", "height": "auto"});
			var tempHeightBlock = parseInt(compTextBlock.css("height"));
			compTextBlock.css({"height": 0, "position":"relative", "opacity":"0.8"});



			if(needToSetScrollTop)
			{
				setTimeout( function() {  compTextBlock.css("height",tempHeightBlock+"px");  } , scrollDurationExp );
			}
			else
			{
				setTimeout( function() {  compTextBlock.css("height",tempHeightBlock+"px");  } , 100 );
			}


			// ======= Maj du bandeau Drop me a line

			// 1. Maj du texte

			var clickedSkillsCounter=0;
			if(isUXUIExpertiseClicked){clickedSkillsCounter++;}
			if(isFrontExpertiseClicked){clickedSkillsCounter++;}
			if(isMoreExpertiseClicked){clickedSkillsCounter++;}
			clickedSkillsCounter = 0; //

			var newCTAHTMLContent="";

			if($(this).parent(".colExpertise").hasClass("uxuiExpertise"))
			{
				isUXUIExpertiseClicked = true; newCTAHTMLContent = /*"proven"*/ "<em>UX / UI design</em>'s";

				// STORY TELLING
				if(storyTellingActivated && stUXExpNotDone)
				{
					stUXExpNotDone = false;

					console.log("---");
					console.log("");
					console.log("I trully love UX & UI design.");
					console.log("");
					console.log("I would sum up the designer as a mix of sensibility, empathy, web expertise and cognitive thinking.");
					console.log("");
					console.log("Solving problems...");
					console.log("Interesting user needs...");
					console.log("Organizing & arranging information...");
					console.log("Drawing beautiful, simple & intuitive interfaces...");
					console.log("Testing well thought-out solutions...");
					console.log("");
					console.log("For me, being a designer is a great source of personal accomplishment.");
					console.log("");
				}
			}
			if($(this).parent(".colExpertise").hasClass("frontendExpertise"))
			{
				isFrontExpertiseClicked = true; newCTAHTMLContent = /*"proven"*/ "<em>front-end development</em>'s";

				// STORY TELLING
				if(storyTellingActivated && stFrontExpNotDone)
				{
					stFrontExpNotDone = false;

					console.log("---");
					console.log("");
					console.log("I'm a profesionnal front-end (web) developer.");
					console.log("");
					console.log("No, I'm not a fat guy with glasses who is trying to hack NSA databases.");
					console.log("Yes, I'm a passionnate guy who loves to give life to (amazing) web products.");
					console.log("");
					console.log("No, I'm not bored and tired by going through thousands lines of abstract caracters & expressions.");
					console.log("Yes, I'm passionnate about coding and see front-end development like a challenge,");
					console.log("or \"human vs computer\" game that I can play for hours (and win).");
					console.log("");
					console.log("No, I am not a computer, spitting out perfect scripts generated by an omniscient brain.");
					console.log("Yes, I am an experienced IT profesionnal who goes through a slow but efficient learning process");
					console.log("to understand and anticipate how browsers \"think\" and \"act\".");
					console.log("");
					console.log("No, I don't spend 24h/7d on my computer, plunged into tens of thousands of code lines.");
					console.log("Yes, I spend a lot of time and energy integrating interfaces, making algorithms,");
					console.log("finding mistakes and resolving problems.");
					console.log("");
					console.log("No, I don't wake up every afternoon to write the maximum code lines that I can in the day.");
					console.log("Yes, I wake up every morning to craft reliable and maintanable web solutions");
					console.log("which efficiently meet user needs.");
					console.log("");
					console.log("No, I'm not an amateur (everything you want) front-back-side-end developer,");
					console.log("who will lose control at the first big issue.");
					console.log("Yes, I'm a professional (web) front-end developer,");
					console.log("who can manage pressure and on whom you can rely.");
					console.log("");
				}
			}
			if($(this).parent(".colExpertise").hasClass("otherExpertise"))
			{
				isMoreExpertiseClicked = true; newCTAHTMLContent = "varied";

				// STORY TELLING
				if(storyTellingActivated && stOtherExpNotDone)
				{
					stOtherExpNotDone = false;

					console.log("---");
					console.log("");
					console.log("My skills go beyong design and front-end development.");
					console.log("But you will have to discover them by yourself, hiring me ;)");
					console.log("");
				}
			}

			if(clickedSkillsCounter>=1)
			{
				newCTAHTMLContent = "proven";
			}

			$(".callToActionWrapper .specification").html(newCTAHTMLContent);




			// 2. Si le bandeau Drop me a line n'est pas encore déroulé, on le déroule
			if( parseInt($(".callToActionWrapper").css("height")) == 0 )
			{
				$(".callToActionWrapper").css({"position":"absolute", "opacity":"0", "height": "auto"});
				var tempHeightBlock2 = parseInt($(".callToActionWrapper").css("height"));
				$(".callToActionWrapper").css({"height": 0, "position":"relative", "opacity":"1"});

				setTimeout( function() {  $(".callToActionWrapper").css("height",tempHeightBlock2+"px");  } , 2000 );
			}

		}
		else
		{
			$(this).removeClass("showLess");
			$(this).addClass("showMore");
			$(this).parent(".colExpertise").find(".part2").css("height", 0);
		}
	});


















	// -----------------------------------------------------------------------------------------------------------  MODAL ABOUT CITY


	setTabWorldCitiesWithWeather();

	todayDate = returnDate();
	tomorrowDate = returnDate(1);

	// ---

	$("#weatherIcon").removeClass().addClass(tabWorldCities[0][8]);
	$(".meteoTempInfo").html(tabWorldCities[0][7]);
	$(".meteoDateInfo").html(todayDate);
	//alert(tabWorldCities[0][0]+", "+tabWorldCities[0][1]);
	$("#cityText").html(tabWorldCities[0][0]+", "+tabWorldCities[0][1]);

	$.simpleWeather({ woeid: tabWorldCities[0][6], unit: 'c', success: function(weather) {
					$("#weatherIcon").removeClass().addClass(returnWeatherIcon(weather.code));
					$(".meteoTempInfo").html(weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp);
				}
			});

	// ---


	$("body").on("click", '.showBdx', function()
	{
		openAboutCityBoxAnim();

		// STORY TELLING
		if(storyTellingActivated && stBdxStoryPart1NotDone)
		{
			stBdxStoryPart1NotDone = false;

			console.log("---");
			console.log("");
			console.log("Ow, Bordeaux... What a wonderful city to live in!");
			console.log("And maybe to work in too???");
			console.log("");
			console.log("Well, let discuss this question over a coffee!");
			if(stRDVAlreadyProposed)
			{
				console.log("At the risk of repeating myself...");
			}
			console.log("=> you, me, Meriadeck's Starbucks (41 Rue du Château d'Eau, 33000 Bordeaux), next saturday, 8AM.");
			console.log("So, what do you say? -> isayyes@aldricrivat.com");
			console.log("");

			stRDVAlreadyProposed = true;
		}
	});

	$("body").on("click", '.closeBdx', function()
	{
		closeAboutCityBoxAnim();
	});


	$("body").on("click", '.openTomorrowTab', function()
	{
		initTomorrowTab();

		// STORY TELLING
		if(storyTellingActivated && stBdxStoryPart2NotDone)
		{
			stBdxStoryPart2NotDone = false;

			console.log("---");
			console.log("");
			console.log("I really like Bordeaux. But life is short and new experiences matter.");
			console.log("That's why I'm always open to new opportunities.");
			console.log("And if you want to make me travel 10Km or 10.000Km to offer me an amazing job, just know that I've already packed my bags ;)");
			console.log("");
		}
	});

	$("body").on("click", '.openTodayTab', function()
	{
		initTodayTab();
	});



	// -----------------------------------------------------------------------------------------------------------  fin de MODAL ABOUT CITY




	// ------------------------------------------------------------------------ SECTION FOOTER ------------------------------------------

	$("body").on("click", '.specialMention i', function()
	{
		majMadeWithPictoFooter(false); // seriousPictoOnly param = false = displays every picto (serious AND funny)
	});




	// -----------------------------------------------------------------------------------------------------------  fin de SECTION FOOTER


	// ================================================================================================================================================================
	// ------------------------------------------ ON RESIZE SCRIPTS ---------------------------------------------------------------------------------------------------
	// ================================================================================================================================================================





	$(window).resize(function(){


		// -----------------------------------------------------------------------------------------------------------  COMMUN

		if(isDeviceSmartphne())
		{
			isDeviceSmartphone = true;
		}
		else
		{
			isDeviceSmartphone = false;
		}


		// STORY TELLING
		if(storyTellingActivated && stResizedNotDone)
		{
			stResizedNotDone = false;

			console.log("---");
			console.log("");
			console.log("Eh eh, checking for the responsivness of my website ?");
			console.log("I pass a lot of time trying to make it as responsive as I can.");
			console.log("Juggling with media queries, fluid units (%, vh & co.) and Javascript.");
			console.log("");
			console.log("Please, if you find some broken behaviors contact me to report them.");
			console.log("It will be much appreciated !!! <3");
			console.log("(I track this bugbears with all my heart. But you know what it is...)");
			console.log("Here is you're reward: weirdorconfusing.com ;D");
			console.log("Yes, I give it to you in advance... It's what I call \"trust\". And we trully need to trust each other if we are going to work together, don't we? :)");
			console.log("");
			//setTimeout(function(){console.log("xxxx");},1000);
		}













		// -----------------------------------------------------------------------------------------------------------  SECTION INTRO

		// Maj du height du 1ier bloc de mainContent (.sctIntroduction) => height doit être égale à viewport.height (sauf sur mobile : qu'à l'initialisation / pas au resize à cause des toolbar URL mouvantes sur browser mobile)
		if(!isDeviceMobile)
		{
			$(".sctMainCntt.sctIntroduction").css({"height":$(window).height()+"px"});
		}



		// -----------------smartphone------------------------------------------------------------------------------------------  BURGER MENU BTN

		// Si device = 's resol => btn menu absolute (not fixed), else menu fixed
		majPosiMenuBtnAbsoluteOrFixed();



		// -----------------------------------------------------------------------------------------------------------  MODAL WORK DETAILS

		// Redéfinition du format de la page (paysage || portrait)
		formatDevice = returnFormatDevice($(window).width(), $(window).height());

		// Maj de la resolt de captures & illustration boxes, si la modal detailw work est affichée
		if($(".modalWorkDetails").css("display") == "block")
		{

			lastDeviceFormat = newDeviceFormat;
			newDeviceFormat = returnFormatDevice($(window).width(), $(window).height());

			initModal = true;
			majIllustrationSubBox();

		}


		// -----------------------------------------------------------------------------------------------------------  MODAL ABOUT CITY

		// Si la modal About City est actuellement affichée...
		if($(".wrapperBoxCityMeteoInfo").css("display") == "block")
		{
			majPosiModalComponentsAbtCity();
		}

	});



});
