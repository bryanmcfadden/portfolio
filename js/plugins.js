// ===============================================================
// ---------------------------------------------------------------      CUSTOM SCROLLBAR MAIN CONTENT
// ===============================================================


function showMainScrollbar(fctCallback)
{
	$(".mainContentBox .mCSB_scrollTools").animate({"right": 0, "opacity":1}, function(){if(fctCallback){fctCallback();}});
}
function hideMainScrollbar(fctCallback)
{
	$(".mainContentBox .mCSB_scrollTools").animate({"opacity":0, "right": "-30px"}, 1000, function(){if(fctCallback){fctCallback();}});
}

// V3 with both custom and native scrollbars, based on window width (if width < 1100 => native scrollbar) :
function initScrollBar()
{

	if(isDeviceMobile){
		$("html").css({"overflow":"auto", "height":"auto"});
		$("body").css({"overflow":"auto", "height":"auto"});
		$(".rootBox").css({"overflow":"auto", "height":"auto"});
		$(".mainContentBox").css({"overflow":"auto", "height":"auto"});
		// here ooo
		// V1 (abandonné car crès un clipping dans le bloc d'intro : le texte bondi vers le haut d'un coup) :
		 $(".sctMainCntt.sctIntroduction").css({"height":$(window).height()+"px"});
		// V2 :
		//$(".sctMainCntt.sctIntroduction").css({"height":$(".sctMainCntt.sctIntroduction").height()+"px"});
		$(".bckgdBox").css("background-attachment", "scroll");

		$(document).scroll(function(){
			$(".btnNextSection").removeClass("movingArrow");

			if($(".menuBtn").hasClass("closeWorkDetails")){
				//$(".debug").html("<br> modalWorkDetails visible !"+$(".debug").html());
				majStyleBtnBurgerWorkDetailsModal($(document).scrollTop());
			}else{
				//$(".debug").html("<br> modalWorkDetails non visible !"+$(".debug").html());
				majStyleBtnBurger($(document).scrollTop());
			}
		});

	}else{
		alert('Here');
		$(".mainContentBox").mCustomScrollbar(
		{
					theme: "minimal-dark",
					scrollButtons:{ enable: 0 }/*,
					autoHideScrollbar : true*/,
					scrollInertia:700,
					mouseWheel:{ scrollAmount: 300 },
					callbacks:{
						whileScrolling:function(){
							$(".btnNextSection").removeClass("movingArrow");
							majStyleBtnBurger((this.mcs.top)*-1);

							alert('scrolling');
							// STORY TELLING
							if(storyTellingActivated)
							{
								if(stConsoleStep < 2)
								{
									if(stConsoleStep == 0)
									{
										console.log("---");
										console.log("");
										console.log("Wouhouuuuuuuuuh! I love when that scrolls :D");
										console.log("A-gain! A-gain! A-gain!");
										console.log("");

										stConsoleStep = 1;

										stConsoleInUse = true;

										setTimeout(function(){stConsoleInUse = false;},2000);
									}
									if(stConsoleStep == 1 && !stConsoleInUse)
									{
										console.log("---");
										console.log("");
										console.log("Wouhouuuuuuuuuuuuuuuuuuh! So much adrenaline :D");
										console.log("Here is a little reward for you: theuselessweb.com ;D ");
										console.log("");

										stConsoleStep = 2;
									}
								}
							}
						}
					}
		});

		$(".mainContentBox .mCSB_scrollTools").css("right", "-30px");

		//hideMainScrollbar(function(){console.log("end");});
		showMainScrollbar();
	}
}

// -------------------      end of CUSTOM SCROLLBAR MAIN CONTENT


// ===============================================================
// ---------------------------------------------------------------      CUSTOM SCROLLBAR WORK DETAILS MODAL
// ===============================================================


// V3 with both custom and native scrollbars, based on window width (if width < 1100 => native scrollbar) :
function initScrollBarWorkdDetailsModal()
{

	if(isDeviceMobile)
	{
			// déjà initialisé plus haut...
		/*$(document).scroll(function()
		{
			if($(".modalWorkDetails").hasClass("visible"))
			{
				majStyleBtnBurgerWorkDetailsModal($(document).scrollTop());
			}
			else
			{
				majStyleBtnBurger($(document).scrollTop());
			}

		});*/
	}
	else
	{
		$(".modalWorkDetails").mCustomScrollbar(
		{
					theme: "minimal-dark",
					scrollButtons:{ enable: 0 }/*,
					autoHideScrollbar : true*/,
					scrollInertia:700,
					mouseWheel:{ scrollAmount: 300 },
					callbacks:
					{
						whileScrolling:function()
						{
							majStyleBtnBurgerWorkDetailsModal((this.mcs.top)*-1);
						}
					}
		});

		//$(".mainContentBox .mCSB_scrollTools").css("right", "-30px");
		//showMainScrollbar(function(){console.log("end");});
	}
}

// -------------------      end of CUSTOM SCROLLBAR WORK DETAILS MODAL





// Smooth scroll intra nav ------------------------------------------------

function closeMenuModal()
{
	if(isDeviceMobile)
						{
							$(".mainMenuBox").css({"height":"100vh;"});

							$("html").css({"overflow":"auto", "height":"auto"});
							$("body").css({"overflow":"auto", "height":"auto"});
							$(".rootBox").css({"overflow":"auto", "height":"auto"});

							$(document).scrollTop(scrollTopVal);
						}

		$(".menuBtn").removeClass("closeMenu");

		//$(".menuBtn").removeClass("crossBtn");
		//$(".menuBtn").removeClass("crossBtnStatic");
		setTimeout(function(){$(".menuBtn").removeClass("crossBtn");},100);
		setTimeout(function(){$(".menuBtn").removeClass("crossBtnStatic");},100);

		$(".mainMenuLinks").removeClass("visibleLinks");

		if(isDeviceSmartphone)
		{
			setTimeout(function(){ $(".mainMenuBox").removeClass("visible"); },800);
		}
		else
		{
			setTimeout(function(){ $(".mainMenuBox").removeClass("visible"); },500);
		}

		setTimeout(function(){

				/*if(isDeviceMobile)
						{
							$("html").css({"overflow":"auto", "height":"auto"});
							$("body").css({"overflow":"auto", "height":"auto"});
							$(".rootBox").css({"overflow":"auto", "height":"auto"});
							$(".mainMenuBox").css({"height":"auto"});
						}*/
						$(".mainMenuBox").css("display", "none");
						majDisplayedQuote();

						$(".menuBtn").addClass("openMenu");

						$(".menuBtn").removeClass("modalMenuBtn");


			},1200);
}


// Avec element = "contact" || "about" || "expertise" || "work" || mainCnttTop" || "workModalTop"
function scrollToElement(element)
{
	var elementTarget;
	if( element == "contact" || element == "about" || element == "expertise" || element == "work" || element == "mainCnttTop" )
	{
		if( element == "contact" ) { elementTarget = ".sctMainCntt.sctContact" ; }
		else if( element == "about" ) { elementTarget = ".sctMainCntt.sctAboutMe" ; }
		else if( element == "expertise" ) { elementTarget = ".sctMainCntt.sctExpertise " ; }
		else if( element == "work" ) { elementTarget = ".sctMainCntt.sctWork " ; }
		else if( element == "mainCnttTop" ) { elementTarget = ".sctMainCntt.sctIntroduction " ; }

		// Si isDeviceMobile : système de calcul basé sur le scroll natif, sinon sur la custom scroll bar !
		if(isDeviceMobile)
		{
			// Version écran < 1100px ie tablets et smartphones  ...

			$('html, body').animate({
				scrollTop: $(elementTarget).eq(0).offset().top
			}, 1000);
		}
		else
		{
			$(".mainContentBox").mCustomScrollbar("stop").mCustomScrollbar("scrollTo",$(elementTarget).eq(0),{scrollEasing:"easeInOut", scrollInertia: 1000});
		}
	}
	else if( element == "workModalTop" )
	{
		if( element == "workModalTop" ) { elementTarget = ".modalWorkDetails .sctWorkMainInfo" ; }

		// Si isDeviceMobile : système de calcul basé sur le scroll natif, sinon sur la custom scroll bar !
		if(isDeviceMobile)
		{
			// Version écran < 1100px ie tablets et smartphones  ...

			$('html, body').animate({
				scrollTop: $(elementTarget).eq(0).offset().top
			}, 1000);
		}
		else
		{
			$(".modalWorkDetails").mCustomScrollbar("stop").mCustomScrollbar("scrollTo",$(elementTarget).eq(0),{scrollEasing:"easeInOut", scrollInertia: 1000});
		}
	}
	else
	{
		console.log("ERR-SCROLL001");
	}
}




var indexMadeWithPicto = 1;

var tabMadeWithSeriousPicto = new Array (
								"icon-heart-6",
								"icon-magic",
								"icon-asl",
								"icon-beaker",
								"icon-smile",
								/*"icon-frown",*/
								"icon-heartbeat",
								"icon-extinguisher",
								"icon-light-up",
								"icon-moon",
								"icon-star-6",
								"icon-cafe",
								"icon-bug",
								"icon-lightbulb-1",
								"icon-pencil-alt",
								"icon-hourglass",
								"icon-graduation-cap",
								"icon-stackoverflow",
								"icon-w3c",
								"icon-copyright",
								"icon-html5",
								"icon-css3"/*,
								"icon-award",*/
					);

var tabMadeWithFunnyPicto = new Array (
								"icon-heart-6",
								"icon-magic",
								"icon-asl",
								"icon-beaker",
								"icon-smile",
								/*"icon-frown",*/
								"icon-heartbeat",
								"icon-extinguisher",
								"icon-light-up",
								"icon-moon",
								"icon-star-6",
								"icon-cafe",
								"icon-bug",
								"icon-lightbulb-1",
								"icon-pencil-alt",
								"icon-hourglass",
								"icon-graduation-cap",
								"icon-stackoverflow",
								"icon-w3c",
								"icon-copyright",
								"icon-html5",
								"icon-css3"/*,
								"icon-award",*/
					);

/* In this version, tabMadeWithSeriousPicto is completely unused finally */
// with seriousPictoOnly = boolean
function majMadeWithPictoFooter(seriousPictoOnly)
{
	$(".specialMention.beatingHeart").removeClass("beatingHeart");

	if(seriousPictoOnly)
	{
		var tabPictosLength = tabMadeWithSeriousPicto.length;
	}
	else
	{
		var tabPictosLength = tabMadeWithFunnyPicto.length;
	}

	if(indexMadeWithPicto >= tabPictosLength) { indexMadeWithPicto = 0 ;}

	if(seriousPictoOnly)
	{
		var newPictoClass = tabMadeWithSeriousPicto[indexMadeWithPicto] ;
	}
	else
	{
		var newPictoClass = tabMadeWithFunnyPicto[indexMadeWithPicto] ;
	}


	/**/

	$(".sctMainCntt .specialMention i").addClass("hidden");

	setTimeout(function(){
			//$(".sctMainCntt .specialMention i").addClass("hidden");
			$(".sctMainCntt .specialMention i").attr("class", newPictoClass);
		},700);

	indexMadeWithPicto++;
}
