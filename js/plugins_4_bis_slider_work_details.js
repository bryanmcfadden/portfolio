




var smartphoneWidthLimit = 500; // px

var initModal = true;

var isFormatToLandscapeMajFresh = false;



var imgDisplayed = 0;
var workDisplayed = 0;



// Fonction à appeler uniquement une fois le redimensionnement de la capture box terminée
function majYPositionSliderNavBtnInSideBar()
{
	var topPaddingCaptureBox = parseInt($(".sctWorkCntt.sctCaptures").css("padding-top"));
	var heightIllustrationSubBox = $(".illustrationSubBox").height();
	var heightNabBtnSlider = $(".btnNavSliderArrow.prevSlideBtn").height();
	
	var topMarginBtnNavSlider = parseInt(topPaddingCaptureBox + heightIllustrationSubBox / 2  - heightNabBtnSlider / 2);
	$(".btnNavSliderArrow").css("top", topMarginBtnNavSlider+"px");
}



function majCapturesBoxesFullyVisible(isMobile, areNavBtnsInSideBar)
{
	var widthBtnBurgerMenu = $(".menuBtn").width();
	var widthRgtRelMrgnBtnBrgrMnu = parseInt($(".menuBtn").css("right")) ;
	
	var mrgeBtwnBtnSldrAndIllsutrBox = $(window).width() / 100 * 5; /// uniquement utilisé si btns nav slider en side bar
	
	if(areNavBtnsInSideBar)
	{
		$(".btnNavSliderArrow").addClass("sideBar");
		
		var xRelMrgnForBtn = widthBtnBurgerMenu + widthRgtRelMrgnBtnBrgrMnu + widthRgtRelMrgnBtnBrgrMnu / 2;
		
		$(".btnNavSliderArrow.prevSlideBtn").css("left", xRelMrgnForBtn+"px");
		$(".btnNavSliderArrow.nextSlideBtn").css("right", xRelMrgnForBtn+"px");
	}
	else
	{
		$(".btnNavSliderArrow").removeClass("sideBar");
		$(".btnNavSliderArrow").css({"top":0});
		$(".btnNavSliderArrow.prevSlideBtn").css("left", 0);
		$(".btnNavSliderArrow.nextSlideBtn").css("right", 0);
	}
	
	var paddingTopBotCapturesBox = $(window).height() / 100 * 5; /// marges d'aération de la captureBox
	
	$(".sctWorkCntt.sctCaptures").css("padding", paddingTopBotCapturesBox+"px 0");
	
	// Calcule de la hauteur consommée par composants incompressibles (marges d'aération, bar des puces de nav du slider, box légende de l'illustration)
	var consumedHeightSpace = $(".illustLegend").height() + $(".btnsNavSlider").height() + paddingTopBotCapturesBox * 2;
	if(isMobile){consumedHeightSpace+=40;} // 40 = marge supp de sécurité en prévention de la toolbar URL mouvante sur devices mobiles
	
	// Calcule de la largeur consommée par composants incompressibles (marges d'aération, btns nav slider si en side bar, btn menu burger)
	var consumedWidthSpace;
	if(areNavBtnsInSideBar)
	{
		consumedWidthSpace = (parseInt($(".btnNavSliderArrow.prevSlideBtn").css("left")) + $(".btnNavSliderArrow.prevSlideBtn").width() + mrgeBtwnBtnSldrAndIllsutrBox) *2; // 30 = marge d'aération entre le btn de nav en flèche et la captures box
	}
	else
	{
		consumedWidthSpace = (widthBtnBurgerMenu + widthRgtRelMrgnBtnBrgrMnu * 2) * 2;
	}
	
	var availableHeight = $(window).height() - consumedHeightSpace;
	var availableWidth = $(window).width() - consumedWidthSpace;
	
	$(".illustrationSubBox").css("width", availableWidth+"px");
	$(".illustrationSubBox").css("height", availableHeight+"px");
	
	if(areNavBtnsInSideBar)
	{
		majYPositionSliderNavBtnInSideBar();
	}
}










function majCapturesBoxesMinimalResol(isSmartphone, areNavBtnsInSideBar)
{
	// Ratio idéal de illustrSubWrapper : 1,58 (coeff divisuer de la largeur, pr avoir hauteur ideal basée sur largeur dispo)
	var ratioAbsoluteResol = 1.58; // ex : 1040 x 660

	var widthBtnBurgerMenu = $(".menuBtn").width();
	var widthRgtRelMrgnBtnBrgrMnu = parseInt($(".menuBtn").css("right")) ;
	
	var mrgeBtwnBtnSldrAndIllsutrBox = $(window).width() / 100 * 5; /// uniquement utilisé si btns nav slider en side bar
	
	if(areNavBtnsInSideBar)
	{
		$(".btnNavSliderArrow").addClass("sideBar");
		
		// Si l'affichage concerne un smartphone (= le btn menu est en position absolute tout en haut de la page et ne consomme donc pas de largeur en posi y du slider)...
		if(isSmartphone)
		{
			var xRelMrgnForBtn = mrgeBtwnBtnSldrAndIllsutrBox;
		}
		else
		{
			var xRelMrgnForBtn = widthBtnBurgerMenu + widthRgtRelMrgnBtnBrgrMnu + widthRgtRelMrgnBtnBrgrMnu / 2;
		}
		
		$(".btnNavSliderArrow.prevSlideBtn").css("left", xRelMrgnForBtn+"px");
		$(".btnNavSliderArrow.nextSlideBtn").css("right", xRelMrgnForBtn+"px");
	}
	else
	{
		$(".btnNavSliderArrow").removeClass("sideBar");
		$(".btnNavSliderArrow").addClass("minimalistBtn");
		$(".btnNavSliderArrow").css({"top":0});
		$(".btnNavSliderArrow.prevSlideBtn").css("left", 0);
		$(".btnNavSliderArrow.nextSlideBtn").css("right", 0);
	}
	
	var paddingTopBotCapturesBox = $(window).height() / 100 * 5; /// marges d'aération de la captureBox
	
	$(".sctWorkCntt.sctCaptures").css("padding", paddingTopBotCapturesBox+"px 0");
	
	/*// Calcule de la hauteur consommée par composants incompressibles (marges d'aération, bar des puces de nav du slider, box légende de l'illustration)
	var consumedHeightSpace = $(".illustLegend").height() + $(".btnsNavSlider").height() + paddingTopBotCapturesBox * 2;
	if(isMobile){consumedHeightSpace+=40;} // 40 = marge supp de sécurité en prévention de la toolbar URL mouvante sur devices mobiles*/
	
	// Calcule de la largeur consommée par composants incompressibles (marges d'aération, btns nav slider si en side bar, btn menu burger)
	var consumedWidthSpace;
	if(areNavBtnsInSideBar)
	{
		consumedWidthSpace = (parseInt($(".btnNavSliderArrow.prevSlideBtn").css("left")) + $(".btnNavSliderArrow.prevSlideBtn").width() + mrgeBtwnBtnSldrAndIllsutrBox) *2; // 30 = marge d'aération entre le btn de nav en flèche et la captures box
	}
	else
	{
		// Si l'affichage concerne un smartphone (= le btn menu est en position absolute tout en haut de la page et ne consomme donc pas de largeur en posi y du slider)...
		if(isSmartphone)
		{
			consumedWidthSpace = mrgeBtwnBtnSldrAndIllsutrBox * 2;
		}
		else
		{
			consumedWidthSpace = (widthBtnBurgerMenu + widthRgtRelMrgnBtnBrgrMnu * 2) * 2;
		}
	}
	
	//var availableHeight = $(window).height() - consumedHeightSpace;
	var availableWidth = $(window).width() - consumedWidthSpace;
	
	var idealHeight = availableWidth / ratioAbsoluteResol;
	if(idealHeight>$(window).height()){idealHeight = $(window).height()-40;}
	
	$(".illustrationSubBox").css("width", availableWidth+"px");
	$(".illustrationSubBox").css("height", idealHeight+"px");
	
	if(areNavBtnsInSideBar)
	{
		majYPositionSliderNavBtnInSideBar();
	}
}





function majCapturesBoxesFullscreen(isSmartphone)
{

	var widthBtnBurgerMenu = $(".menuBtn").width();
	var widthRgtRelMrgnBtnBrgrMnu = parseInt($(".menuBtn").css("right")) ;
	
	var mrgeBtwnBtnSldrAndIllsutrBox = $(window).width() / 100 * 5; /// uniquement utilisé si btns nav slider en side bar
	
	
		$(".btnNavSliderArrow").addClass("sideBar");
		
		// Si l'affichage concerne un smartphone (= le btn menu est en position absolute tout en haut de la page et ne consomme donc pas de largeur en posi y du slider)...
		if(isSmartphone)
		{
			var xRelMrgnForBtn = mrgeBtwnBtnSldrAndIllsutrBox;
		}
		else
		{
			var xRelMrgnForBtn = widthBtnBurgerMenu + widthRgtRelMrgnBtnBrgrMnu + widthRgtRelMrgnBtnBrgrMnu / 2;
		}
		
		$(".btnNavSliderArrow.prevSlideBtn").css("left", xRelMrgnForBtn+"px");
		$(".btnNavSliderArrow.nextSlideBtn").css("right", xRelMrgnForBtn+"px");
	
	
	var paddingTopBotCapturesBox = $(window).height() / 100 * 5; /// marges d'aération de la captureBox
	
	$(".sctWorkCntt.sctCaptures").css("padding", paddingTopBotCapturesBox+"px 0");
	
	/*// Calcule de la hauteur consommée par composants incompressibles (marges d'aération, bar des puces de nav du slider, box légende de l'illustration)
	var consumedHeightSpace = $(".illustLegend").height() + $(".btnsNavSlider").height() + paddingTopBotCapturesBox * 2;
	if(isMobile){consumedHeightSpace+=40;} // 40 = marge supp de sécurité en prévention de la toolbar URL mouvante sur devices mobiles*/
	
	// Calcule de la largeur consommée par composants incompressibles (marges d'aération, btns nav slider si en side bar, btn menu burger)
	var consumedWidthSpace;
	
		consumedWidthSpace = (parseInt($(".btnNavSliderArrow.prevSlideBtn").css("left")) + $(".btnNavSliderArrow.prevSlideBtn").width() + mrgeBtwnBtnSldrAndIllsutrBox) *2; // 30 = marge d'aération entre le btn de nav en flèche et la captures box
	
	
	var availableWidth = $(window).width() - consumedWidthSpace;
	
	var newIllustSubBoxHeight = $(window).height() - paddingTopBotCapturesBox*2; // a été enlevé < avec 40 la hauteur estimée de la toolbar URL dépliée entirèement des mobiles browsers
	
	$(".illustrationSubBox").css("width", availableWidth+"px");
	$(".illustrationSubBox").css("height", newIllustSubBoxHeight+"px");
	
	majYPositionSliderNavBtnInSideBar();
	
	if(isSmartphone)
	{
		$(".btnNavSliderArrow").addClass("minimalistBtn");
		
		if(lastDeviceFormat != newDeviceFormat && newDeviceFormat == "landscape")
		{
			isFormatToLandscapeMajFresh = false;
			
			$('html, body').animate({
				scrollTop: $(".sctWorkCntt.sctCaptures").eq(0).offset().top
			}, 1000);
		}
	}
}

function majBandesDecoIllustBox()
{
	var illustBoxHeight = parseInt($(".sctCaptures").height());
	var illustBoxHeightPadTop = parseInt($(".sctCaptures").css("padding-top"));
	var illustBoxHeightPadBot = parseInt($(".sctCaptures").css("padding-bottom"));
	var sliderBoxHeight = parseInt($(".illustrationSubBox").height());
	var navSliderBoxHeight = parseInt($(".navSlider").height());
	
	var bandeBckdDeco1Height = sliderBoxHeight * 0.5;
	var bandeBckdDeco1OffsetTop = illustBoxHeightPadTop + (sliderBoxHeight / 2) - (bandeBckdDeco1Height / 2);
	
	
	var bandeBckdDeco2Height = bandeBckdDeco1Height;
	var bandeBckdDeco2OffsetBottom = illustBoxHeightPadBot + navSliderBoxHeight;
	
	$(".bandeBckdDeco1").css("height", bandeBckdDeco1Height+"px");
	$(".bandeBckdDeco1").css("top", bandeBckdDeco1OffsetTop+"px");
	
	$(".bandeBckdDeco2").css("height", bandeBckdDeco2Height+"px");
	$(".bandeBckdDeco2").css("bottom", bandeBckdDeco2OffsetBottom+"px");
}

function majIllustrationSubBox()
{
	
	var docWidth = $(window).width();
	var docHeight = $(window).height();
	
	var margesTopBotIllusSubBox = docHeight / 100 * 10; ///* avec 10 la marge en % de la hauteur du viewport; */
	var margesLftRthIllusSubBox = docWidth / 100 * 6; ///* avec 6 la marge en % de la largeur du viewport; */
	
	var widthBtnsNavSlider = $(".prevSlideBtn").width();
	
	var newWidthIllustSubBox;
	
	
	if(docWidth > 1100)
	{
		// Version desktop
		
		$(".btnNavSliderArrow").removeClass("minimalistBtn"); // reinit
		
		if(docHeight < 500)
		{
			// Captures boxes avec valeurs absolues
			// SliderNavBtns en side bar
			majCapturesBoxesMinimalResol(0, 1); // Param1 :: isSmartphone, Param2 :: areNavBtnsInSideBar
		}
		else
		{
			// Captures boxes entièrement visibles dans le docHeight
			// SliderNavBtns en side bar
			majCapturesBoxesFullyVisible(0, 1); // Param1 :: isMobile, Param2 :: areNavBtnsInSideBar
		}
	
		majSlider(imgDisplayed);
	
		majBandesDecoIllustBox();
	}
	else if ( (formatDevice == "portrait" && docWidth > 600 ) || ( formatDevice == "landscape" && docWidth > 800 ) )
	{
		if(lastDeviceFormat != newDeviceFormat || hasProjectJustChanged) // here
		{
				
		// Version tablet
		
		$(".btnNavSliderArrow").removeClass("minimalistBtn"); // reinit
		
		if(formatDevice == "landscape")
		{
			// Version landscape
			
			// Captures boxes entièrement visibles dans le docHeight (prévoir une marge en plus liée à la toolbar iPad Safari mobile)
			// SliderNavBtns en side bar
			majCapturesBoxesFullyVisible(1, 1); // Param1 :: isMobile, Param2 :: areNavBtnsInSideBar
		}
		else if(formatDevice == "portrait")
		{
			// Version portrait
			
			// Captures boxes avec valeurs absolues
			// SliderNavBtns en bottom bar
			majCapturesBoxesMinimalResol(0, 0); // Param1 :: isSmartphone, Param2 :: areNavBtnsInSideBar
		}
		else{console.log("Error - unknown device's format");}
	
		majSlider(imgDisplayed);
	
		majBandesDecoIllustBox();
		
		}
	}
	else
	{
		// Version mobile
		
		if(lastDeviceFormat != newDeviceFormat || hasProjectJustChanged)
		{
		
		if(formatDevice == "landscape")
		{
			// Version landscape
			
			// SliderBox en "fullscreen" (prévoir une marge en plus liée à la toolbar iPad Safari mobile)
			// SliderNavBtns en side bar (version minimisée pour gagner en largeur)
			// Si bloc captures visible en grande partie à l'écran, alors maj du scroll pour le positionner au centre (effet fullscreen quoi !) mais toujours possibilité de scroller
			majCapturesBoxesFullscreen(1) // Param1 :: isSmartphone
		}
		else if(formatDevice == "portrait")
		{
			// Version portrait
			
			// Captures boxes avec valeurs absolues
			// SliderNavBtns en bottom bar
			majCapturesBoxesMinimalResol(1, 0); // Param1 :: isSmartphone, Param2 :: areNavBtnsInSideBar
		}
	
		majSlider(imgDisplayed);
	
		majBandesDecoIllustBox();
		
		}
	}
	
	hasProjectJustChanged = false;
}


	// Si device.width > 1100
		// Desktop
		
		// Si device.height < 500
			// Captures boxes avec valeurs absolues
			// SliderNavBtns en side bar
		// Sinon
			// Captures boxes entièrement visibles dans le device.height
			// SliderNavBtns en side bar
	
	// Sinon, si ( (device.width < device.height) && (device.width > 600px) ) || ( (device.width > device.height) && (device.width > 800px) )
		// Tablet
	
		// Si (formatDevice(deviceWidth, deviceHeight) == "landscape")
			// Landscape
			
			// Captures boxes entièrement visibles dans le device.height (prévoir une marge en plus liée à la toolbar iPad Safari mobile)
			// SliderNavBtns en side bar
			
		// Sinon, si (formatDevice(deviceWidth, deviceHeight) == "portrait")
			// Portrait
			
			// Captures boxes avec valeurs absolues
			// SliderNavBtns en bottom bar
		
		// Sinon
			//console.log("Error - unknown device's format);
		
	// Sinon
		// Mobile
		
		// Si (formatDevice(deviceWidth, deviceHeight) == "landscape")
			// Landscape
			
			// SliderBox en "fullscreen" (prévoir une marge en plus liée à la toolbar iPad Safari mobile)
			// SliderNavBtns en side bar (version minimisée pour gagner en largeur)
			// Si bloc captures visible en grande partie à l'écran, alors maj du scroll pour le positionner au centre (effet fullscreen quoi !) mais toujours possibilité de scroller
			
		// Sinon, si (formatDevice(deviceWidth, deviceHeight) == "portrait")
			// Portrait
			
			// Captures boxes avec valeurs absolues
			// SliderNavBtns en bottom bar
		
		// Sinon
			//console.log("Error - unknown device's format);


// ======================================================================================================================= fonction de maj du contenu de la modal work details





// Maj le slider avec les autres illustrations du projet actif
// Avec illustToDisplay "next" ou "prev" ou nombre entier (= index exact de l'illust à display)
function majSlider(illustToDisplay)
{
	$(".btnNavSliderArrow").addClass("illustLoading");
	
	var nbIllustActiveProject = tabDataWorks[workDisplayed][7].length;
	var animDirection; // "next" ou "prev"
	var oldIllustDisplayed = imgDisplayed;
	
	// 1. Définition de l'index de l'illust à afficher
	
	if(illustToDisplay == "next")
	{
		animDirection = "next";
		if((imgDisplayed+1)<nbIllustActiveProject){imgDisplayed = imgDisplayed+1;}else{imgDisplayed = 0;} // calcul index img à afficher, fnct de la loop du nb d'illust
	}
	else if(illustToDisplay == "prev")
	{
		animDirection = "prev";
		if((imgDisplayed-1)>= 0){imgDisplayed = imgDisplayed-1;}else{imgDisplayed = nbIllustActiveProject-1;} // calcul index img à afficher, fnct de la loop du nb d'illust
	}
	else if(illustToDisplay > -1 && illustToDisplay < nbIllustActiveProject)
	{
		if(illustToDisplay>imgDisplayed)
		{
			animDirection = "next";
		}
		else
		{
			animDirection = "prev";
		}
		imgDisplayed = illustToDisplay;
	}
	else
	{
		console.log("ERR-ISLOOP001");
	}
	
	// Maj des puces de nav du slider
	$(".sliderBtn").removeClass("active");
	$(".sliderBtn").eq(imgDisplayed).addClass("active");
	
	
	// 2. Disparition de l'illust actuellement affiché
	
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
	}
	
	var newImgDisplayedType = tabDataWorks[workDisplayed][7][imgDisplayed][4];
	var oldImgDisplayedType = tabDataWorks[workDisplayed][7][oldIllustDisplayed][4];
	
	var chgtDeviceType = false;
	if(newImgDisplayedType != oldImgDisplayedType){ chgtDeviceType = true;}
	else if(initModal){ chgtDeviceType = true;}
	
	initModal = false;
	
	var rootSliderBox = $(".illustrationSubBox"); 
	var deviceBox = $(".deviceSimulBox");
	
	var animToApply;
	
	
	// Maj du texte de la zone de légénde de l'illust displayed
	var legendAnimDuration;
	if( chgtDeviceType || (!chgtDeviceType && newImgDisplayedType == "doc") )
	{
		legendAnimDuration = 1000;
	}
	else
	{
		legendAnimDuration = 500;
	}
	$(".illustLegend .legendLabel").animate({"opacity":0}, legendAnimDuration, function(){
		$(".illustLegend .legendLabel").html(tabDataWorks[workDisplayed][7][imgDisplayed][1]);
		$(".illustLegend .legendLabel").animate({"opacity":1}, legendAnimDuration);
	});
	
	
	// =======================================
	// ============== CASE 1/3 ===============
	// =======================================
	if( (chgtDeviceType && (newImgDisplayedType == "doc" || oldImgDisplayedType == "doc") ) || (!chgtDeviceType && newImgDisplayedType == "doc") )
	{
		if(animDirection == "next")
		{
			// 1. Device box anim volet fadeOut vers la gauche
			animToApply = "fadeOutToLeft";
		}
		else
		{
			// 1. Device box anim volet fadeOut vers la droite
			animToApply = "fadeOutToRight";
		}
		
		deviceBox.addClass(animToApply);
		
		$(deviceBox).one(transitionEvent,
			function(event)
			{
				// -then- 2. TransitionOk = false
				rootSliderBox.removeClass("transitionOk");
				
				if(chgtDeviceType)
				{
					// 3. Maj type device ac new format
					majDeviceType(newImgDisplayedType, imgDisplayed);
				}
				
					
				// 4. Chargement new img
				var newIllustHTMLCode = '<img src="'+tabDataWorks[workDisplayed][7][imgDisplayed][0]+'" alt="'+tabDataWorks[workDisplayed][7][imgDisplayed][1]+'">';
				$(boxToHide+" .workIllustration").html(newIllustHTMLCode);
				
				var standByPosition;
				if(animDirection == "next")
				{
					// 5. Maj position device sur la droite, pr anim volet fadeIn vers la gauche
					standByPosition = "fadeOutToRight" ;
				}
				else
				{
					// 5. Maj position device sur la gauche, pr anim volet fadeIn vers la droite
					standByPosition = "fadeOutToLeft" ;
				}
				deviceBox.removeClass(animToApply).addClass(standByPosition);
				
				// 6. TransitionOk = true
				//rootSliderBox.addClass("transitionOk");
				setTimeout(function(){rootSliderBox.addClass("transitionOk");},50);
				
				// 7. Device box anim volet fadeIn
				//deviceBox.removeClass(standByPosition);
				setTimeout(function(){deviceBox.removeClass(standByPosition);},100);
				
				$(deviceBox).one(transitionEvent,
				function(event)
				{		
					$(".btnNavSliderArrow").removeClass("illustLoading");
				});	
				
				
			});
		
		/*	
			if animDirection = next
			1. Device box anim volet fadeOut vers la gauche
			else if animDirection = prev
			1. Device box anim volet fadeOut vers la droite
				-then- 3. TransitionOk = false
					   if chgt device
					   4. Maj type device ac new format
					   end if
					   5. Chargement new img
					   if animDirection = next
					   5. Maj position device sur la droite, pr anim volet fadeIn vers la gauche
					   else if animDirection = prev
					   5. Maj position device sur la gauche, pr anim volet fadeIn vers la droite
					   6. TransitionOk = true
					   if animDirection = next
					   7. Device box anim volet fadeIn vers la gauche
					   else if animDirection = prev
					   7. Device box anim volet fadeIn vers la droite*/
					   
					   
	}
	// =======================================
	// ============== CASE 2/3 ===============
	// =======================================
	else if( chgtDeviceType && (newImgDisplayedType != "doc" && oldImgDisplayedType != "doc") )
	{
		// 1. Img box anim fadeOut
		$(boxToHide).addClass("fadeOut");
		
		$(boxToHide).one(transitionEvent,
			function(event)
			{				
				// 2. Maj type device ac new format
				majDeviceType(newImgDisplayedType, imgDisplayed);
				
				// 3. Chargement new img
				var newIllustHTMLCode = '<img src="'+tabDataWorks[workDisplayed][7][imgDisplayed][0]+'" alt="'+tabDataWorks[workDisplayed][7][imgDisplayed][1]+'">';
				$(boxToHide+" .workIllustration").html(newIllustHTMLCode);
				
				// 4. Img box anim fadeIn
				$(boxToHide).removeClass("fadeOut");
				
				$(boxToHide).one(transitionEvent,
				function(event)
				{		
					$(".btnNavSliderArrow").removeClass("illustLoading");
				});				
			});
			
		
		// ============== CASE 2/3 ===============
			/*Si ( chgt device && (devicenewformat != doc && deviceoldformat != doc) )
			
			1. Img box anim fadeOut
				-then- 
					   2. Maj type device ac new format
					   -then- 3. Chargement new img
					   		  4. Img box anim fadeIn*/
							  
							  
	}
	// =======================================
	// ============== CASE 3/3 ===============
	// =======================================
	else if( !chgtDeviceType && newImgDisplayedType != "doc" )
	{
		// 1. Chargement new img dans img box libre (ie non affiché)
		var newIllustHTMLCode = '<img src="'+tabDataWorks[workDisplayed][7][imgDisplayed][0]+'" alt="'+tabDataWorks[workDisplayed][7][imgDisplayed][1]+'">';
		$(boxToShow+" .workIllustration").html(newIllustHTMLCode);
				
		// 2. TransitionOk = false
		rootSliderBox.removeClass("transitionOk");
			
		// if animDirection = next
		// 3. Maj position img box libre sur la droite
		// else if animDirection = prev
		// 3. Maj position img box libre sur la gauche
		/*if(animDirection == "next")
		{
			// 1. Device box anim volet fadeOut vers la gauche
			standByPosition = "goToRight" ;
		}
		else
		{
			// 1. Device box anim volet fadeOut vers la droite
			standByPosition = "goToLeft" ;
		}*/
		
		/*$(boxToHide).css({"z-index":2, "opacity":0});
		$(boxToShow).css({"display":"block", "z-index":1, "opacity":1});//});
		//$(boxToShow).addClass(standByPosition);*/
		$(boxToShow).css({"display":"block"});
		
		$(boxToHide).addClass("toFadeOut");
		$(boxToShow).addClass("toFadeIn");
		
		// 4. TransitionOk = true
		rootSliderBox.addClass("transitionOk");
		
		// if animDirection = next
		// 5. Img box old anim volet vers la gauche
		// else if animDirection = prev
		// 5. Img box old anim volet vers la droite
		// if animDirection = next
		// 6. Img box new anim volet vers la gauche
		// else if animDirection = prev
		// 6. Img box new anim volet vers la droite*/
		/*if(animDirection == "next")
		{
			animToApply = "goToLeft";
		}
		else
		{
			animToApply = "goToRight";
		}*/
		/*setTimeout(function(){$(boxToShow).removeClass(standByPosition);},100);
		setTimeout(function(){$(boxToHide).addClass(animToApply);},100);*/
		
		$(boxToHide).one(transitionEvent,
			function(event)
			{
				$(boxToHide).css("display","none");
				//$(boxToHide).removeClass(animToApply);
				
				$(boxToHide).removeClass("toFadeOut");
				$(boxToShow).removeClass("toFadeIn");
				
				////$(boxToHide).css({"z-index":1, "opacity":1});
				
				$(".btnNavSliderArrow").removeClass("illustLoading");
			});
		
		
		
		// ============== CASE 3/3 ===============	  
			/*Si ( ! chgt device && devicenewformat != doc) && clic btn "next"
			
			1. Chargement new img dans img box libre (ie non affiché)
			2. TransitionOk = false
			if animDirection = next
			3. Maj position img box libre sur la droite
			else if animDirection = prev
			3. Maj position img box libre sur la gauche
			4. TransitionOk = true
			if animDirection = next
			5. Img box old anim volet vers la gauche
			else if animDirection = prev
			5. Img box old anim volet vers la droite
			if animDirection = next
			6. Img box new anim volet vers la gauche
			else if animDirection = prev
			6. Img box new anim volet vers la droite*/
			
			
	}
	// =======================================
	// ============== CASE ERROR =============
	// =======================================
	else
	{
		console.log("ERR-FORMAT001");
	}
}




// ==================================== Fonction de maj du style visuel du device simulé =========================


// Maj l'apparence visuelle du conteneur de simulation du device
// Avec newIllustType le type de l'illustration à afficher etdonc le type de format du device à maj : "desktop", "phone", "tablet", "doc"
// Avec indexNewIllust l'index de la nouvelle illust à afficher dans le tab des data du work
function majDeviceType(newIllustType, indexNewIllust)
{
	$(".deviceSimulBox").removeClass("desktop tablet phone doc").addClass(newIllustType);
	
	var sliderBoxWidth = parseInt($(".illustrationSubBox").width());
	var sliderBoxHeight = parseInt($(".illustrationSubBox").height());
	
	var deviceBoxHeight ; //= $(".deviceSimulBox").height();
	var deviceBoxWidth ; //= $(".deviceSimulBox").width();
	
	var deviceSubWrapperBoxHeight;
	var deviceSubWrapperBoxWidth;
	
	var newIllustWidth = tabDataWorks[workDisplayed][7][imgDisplayed][2];
	var newIllustHeight = tabDataWorks[workDisplayed][7][imgDisplayed][3];
	
	var deviceBoxTopOffset;
	var deviceBoxSubWrapperTopOffset;
	var screenBoxTopOffset;
	
	var camCircleTopOffset;
	var camCircleLeftOrRightOffset;
	var soundBarTopOffset;
	var homeBtnTopOffset;
	var homeBtnBottomOffset;
	var homeBtnRightOffset;
	
	
	var availableWidthForScreen ;
	var availableHeightForScreen ;
	
	
	var topExtBorderHeight;
	var botExtBorderHeight;
	var leftExtBorderWidth;
	var rightExtBorderWidth;
	
	var topIntBorderHeight;
	var botIntBorderHeight;
	var leftIntBorderWidth;
	var rightIntBorderWidth;
	
	var desktopKeyboardHeight;
	
	var borderRadTopLeftRightExtBorder;
	var borderRadBottomLeftRightExtBorder;
	
	var borderRadTopLeftRightIntBorder;
	var borderRadBottomLeftRightIntBorder;
	
	var borderRadScreen;
	
	var tabletCamHeight;
	var tabletHomeBtnHeight;
	
	var phoneSoundBarHeight;
	var phoneHomeBtnHeight;
	
	var desktopCamHeight;
	
	if(newIllustType == "desktop")
	{
		topExtBorderHeight = sliderBoxHeight * 0.4 / 100 ; if( topExtBorderHeight < 2){ topExtBorderHeight = 2 ; }
		botExtBorderHeight = 0 ;
		leftExtBorderWidth = sliderBoxHeight * 0.4 / 100 ; if( leftExtBorderWidth < 2){ leftExtBorderWidth = 2 ; }
		rightExtBorderWidth = sliderBoxHeight * 0.4 / 100 ; if( rightExtBorderWidth < 2){ rightExtBorderWidth = 2 ; }
		
		topIntBorderHeight = sliderBoxHeight * 6 / 100 ; if( topIntBorderHeight < 6){ topIntBorderHeight = 6 ; }
		botIntBorderHeight = sliderBoxHeight * 6 / 100 ; if( topIntBorderHeight < 6){ topIntBorderHeight = 6 ; }
		leftIntBorderWidth = sliderBoxHeight * 6 / 100 ; if( leftIntBorderWidth < 6){ leftIntBorderWidth = 6 ; }
		rightIntBorderWidth = sliderBoxHeight * 6 / 100 ; if( rightIntBorderWidth < 6){ rightIntBorderWidth = 6 ; }
		
		desktopKeyboardHeight = sliderBoxHeight * 5 / 100 ; if( desktopKeyboardHeight < 8){ desktopKeyboardHeight = 8 ; }
		
		borderRadTopLeftRightExtBorder = sliderBoxHeight * 3.3 / 100 ;
		borderRadBottomLeftRightExtBorder = 0 ;
		
		borderRadTopLeftRightIntBorder = sliderBoxHeight * 3 / 100 ;
		borderRadBottomLeftRightIntBorder = 0 ;
		
		borderRadScreen = sliderBoxHeight * 1 / 100 ;
		
		desktopCamHeight = sliderBoxHeight * 0.66 / 100 ; if( desktopCamHeight < 2){ desktopCamHeight = 2 ; }
		
		
		
		/*
		
Desktop

- bordure extérieure top : 0.66% du height chacune (min 2px)
- bordure extérieure bottom : 0
- bordure extérieure left et right : 0.66% du height chacune (min 2px)

- bordure intérieure top : 9.8% du height chacune (min 6px)
- bordure intérieure bottom : 0
- bordure intérieure left et right : 9.8% du height chacune (min 6px)

- camera circle : 0.66% du height (min 2px)

- clavier : 5.6% du height

- border radius extérieur (top only) : 3.3% du height
- border radius intérieur (top only) : 3.3% du height

- border radius screen : 1% du height (à tester)

*/
	
	}
	else if(newIllustType == "tablet")
	{
		topExtBorderHeight = sliderBoxHeight * 0.6 / 100 ; if( topExtBorderHeight < 3){ topExtBorderHeight = 3 ; }
		botExtBorderHeight = sliderBoxHeight * 0.6 / 100 ; if( botExtBorderHeight < 3){ botExtBorderHeight = 3 ; }
		leftExtBorderWidth =  sliderBoxHeight * 0.6 / 100 ; if( leftExtBorderWidth < 3){ leftExtBorderWidth = 3 ; }
		rightExtBorderWidth =  sliderBoxHeight * 0.6 / 100 ; if( rightExtBorderWidth < 3){ rightExtBorderWidth = 3 ; }
		
		topIntBorderHeight = sliderBoxHeight * 3 / 100 ; if( topIntBorderHeight < 6){ topIntBorderHeight = 6 ; }
		botIntBorderHeight = sliderBoxHeight * 3 / 100 ; if( botIntBorderHeight < 6){ botIntBorderHeight = 6 ; }
		leftIntBorderWidth = sliderBoxHeight * 9.8 / 100 ; if( leftIntBorderWidth < 12){ leftIntBorderWidth = 12 ; }
		rightIntBorderWidth = sliderBoxHeight * 9.8 / 100 ; if( rightIntBorderWidth < 12){ rightIntBorderWidth = 12 ; }
		
		desktopKeyboardHeight = 0 ;
		
		borderRadTopLeftRightExtBorder = sliderBoxHeight * 7.2 / 100 ;
		borderRadBottomLeftRightExtBorder = sliderBoxHeight * 7.2 / 100 ;
		
		borderRadTopLeftRightIntBorder = sliderBoxHeight * 6.4 / 100 ;
		borderRadBottomLeftRightIntBorder = sliderBoxHeight * 6.4 / 100 ;
		
		borderRadScreen = sliderBoxHeight * 1 / 100 ;
		
		tabletCamHeight = sliderBoxHeight * 0.7 / 100 ; if( tabletCamHeight < 2){ tabletCamHeight = 2 ; }
		tabletHomeBtnHeight = sliderBoxHeight * 3.6 / 100 ; if( tabletHomeBtnHeight < 4){ tabletHomeBtnHeight = 4 ; }
		
		/*
		
Tablette

- bordure extérieure top et bottom : 1.3% du height chacune (min 3px)
- bordure extérieure left et right : 1.3% du height chacune (min 3px)

- bordure intérieure top et bottom : 3% du height chacune (min 6px)
- bordure intérieure left et right : 9.8% du height chacune (min 12px)

- camera circle : 0.66% du height (min 2px)
- home btn : 3.61% du height (min 4px)

- border radius extérieur : 7.2% du height
- border radius intérieur : 7.2% du height

- border radius screen : 2% du height (à tester)

*/
	}
	else if(newIllustType == "phone")
	{
		topExtBorderHeight = sliderBoxHeight * 0.6 / 100 ; if( topExtBorderHeight < 2){ topExtBorderHeight = 2 ; }
		botExtBorderHeight = sliderBoxHeight * 0.6 / 100 ; if( botExtBorderHeight < 2){ botExtBorderHeight = 2 ; }
		leftExtBorderWidth =  sliderBoxHeight * 0.6 / 100 ; if( leftExtBorderWidth < 2){ leftExtBorderWidth = 2 ; }
		rightExtBorderWidth =  sliderBoxHeight * 0.6 / 100 ; if( rightExtBorderWidth < 2){ rightExtBorderWidth = 2 ; }
		
		topIntBorderHeight = sliderBoxHeight * 7.2 / 100 ; if( topIntBorderHeight < 6){ topIntBorderHeight = 6 ; }
		botIntBorderHeight = sliderBoxHeight * 7.2 / 100 ; if( botIntBorderHeight < 6){ botIntBorderHeight = 6 ; }
		leftIntBorderWidth = sliderBoxHeight * 0.5 / 100 ; if( leftIntBorderWidth < 2){ leftIntBorderWidth = 2 ; }
		rightIntBorderWidth = sliderBoxHeight * 0.5 / 100 ; if( rightIntBorderWidth < 2){ rightIntBorderWidth = 2 ; }
		
		desktopKeyboardHeight = 0 ;
		
		borderRadTopLeftRightExtBorder = sliderBoxHeight * 7.2 / 100 ;
		borderRadBottomLeftRightExtBorder = sliderBoxHeight * 7.2 / 100 ;
		
		borderRadTopLeftRightIntBorder = sliderBoxHeight * 6.8 / 100 ;
		borderRadBottomLeftRightIntBorder = sliderBoxHeight * 6.8 / 100 ;
		
		borderRadScreen = sliderBoxHeight * 1 / 100 ;
		
		phoneSoundBarHeight = sliderBoxHeight * 0.7 / 100 ; if( phoneSoundBarHeight < 2){ phoneSoundBarHeight = 2 ; }
		phoneHomeBtnHeight = sliderBoxHeight * 3.6 / 100 ; if( phoneHomeBtnHeight < 4){ phoneHomeBtnHeight = 4 ; }
	
		
		/*
Phone

- bordure extérieure top et bottom : 0.8% du height chacune (min 2px)
- bordure extérieure left et right : 0.8% du height chacune (min 2px)

- bordure intérieure top et bottom : 7.2% du height chacune (min 6px)
- bordure intérieure left et right : 0.5% du height chacune (min 12px)

- sound bar : 0.66% du height (min 2px) (width fixe de 20% du parent)
- home btn : 3.61% du height (min 4px)

- border radius extérieur : 7.2% du height
- border radius intérieur : 7.2% du height

- border radius screen : 1% du height (à tester)

*/
	}
	else if(newIllustType == "doc")
	{
		topExtBorderHeight = 0 ;
		botExtBorderHeight = 0 ;
		leftExtBorderWidth = 0 ;
		rightExtBorderWidth = 0 ;
		
		topIntBorderHeight = 0 ;
		botIntBorderHeight = 0 ;
		leftIntBorderWidth = 0 ;
		rightIntBorderWidth = 0 ;
		
		desktopKeyboardHeight = 0 ;
		
		borderRadTopLeftRightExtBorder = 0 ;
		borderRadBottomLeftRightExtBorder = 0 ;
		
		borderRadTopLeftRightIntBorder = 0 ;
		borderRadBottomLeftRightIntBorder = 0 ;
		
		borderRadScreen = 0 ;
	}
	else
	{
		console.log("ERR-FORMAT002");
	}
	
	
	
	// =============================
	
	// Calcul des largeur + hauteur de screen box en fct de l'espace dispo et des valeurs précédemment calculées
	
	var screenBoxHeight;
	var screenBoxWidth;
		
	availableWidthForScreen = sliderBoxWidth - leftExtBorderWidth - rightExtBorderWidth - leftIntBorderWidth - rightIntBorderWidth;
	availableHeightForScreen = sliderBoxHeight - topExtBorderHeight - botExtBorderHeight - topIntBorderHeight - botIntBorderHeight - desktopKeyboardHeight;
	
	var anticipatedIllustHeight;
	// Mise à l'échelle de la hauteur :
	var coefMultiplicateur = availableWidthForScreen / newIllustWidth;
	anticipatedIllustHeight = newIllustHeight * coefMultiplicateur;
	
	// Si hauteur dépasse, alors recalcule en se basant cette fois sur la hauteur
	// Avec - 2 une marge de sécurité
	if((anticipatedIllustHeight - 2) > availableHeightForScreen)
	{
		coefMultiplicateur = availableHeightForScreen / newIllustHeight;
	}
	
	screenBoxHeight = newIllustHeight * coefMultiplicateur;
	screenBoxWidth = newIllustWidth * coefMultiplicateur;
	
	// =============================
	
	
	deviceSubWrapperBoxWidth = screenBoxWidth + leftIntBorderWidth + rightIntBorderWidth ;
	deviceSubWrapperBoxHeight = screenBoxHeight + topIntBorderHeight + botIntBorderHeight ;
	
	
	deviceBoxWidth = deviceSubWrapperBoxWidth + leftExtBorderWidth + rightExtBorderWidth ;
	deviceBoxHeight = deviceSubWrapperBoxHeight + topExtBorderHeight + botExtBorderHeight /*+ desktopKeyboardHeight*/ ;
	
	
	if( ( (sliderBoxHeight - desktopKeyboardHeight) - deviceBoxHeight ) > 1 )
	{
		deviceBoxTopOffset = parseInt( (parseInt($(".illustrationSubBox").height()) - deviceBoxHeight ) / 2 ) ;
		if(deviceBoxTopOffset<0) { deviceBoxTopOffset = 0; }
	}
	else
	{
		deviceBoxTopOffset = 0;
	}
	
	deviceBoxSubWrapperTopOffset = topExtBorderHeight;
	screenBoxTopOffset = topIntBorderHeight;
		
	if(newIllustType == "desktop")
	{
	}
	else if(newIllustType == "tablet")
	{
		// For tablet :
		
		camCircleTopOffset = deviceSubWrapperBoxHeight / 2 - ( tabletCamHeight / 2 );
		camCircleLeftOrRightOffset =  leftIntBorderWidth / 2 - ( tabletCamHeight / 2 );
		
		homeBtnTopOffset = deviceSubWrapperBoxHeight / 2 - ( tabletHomeBtnHeight / 2 );
		homeBtnRightOffset =  leftIntBorderWidth / 2 - ( tabletHomeBtnHeight / 2 );
	}
	else if(newIllustType == "phone")
	{
		// For phone :
		
		soundBarTopOffset = topIntBorderHeight / 2 - ( phoneSoundBarHeight / 2);
		homeBtnBottomOffset = botIntBorderHeight / 2 - ( phoneHomeBtnHeight / 2);
	}
	else if(newIllustType == "doc")
	{
	}
	else
	{
		console.log("ERR-FORMAT002Bis");
	}
	
	
	
	var tempBorderRadius;
	
	
	$(".deviceSimulBox").css("width", parseInt(deviceBoxWidth)+"px");
	$(".deviceSimulBox").css("height", parseInt(deviceBoxHeight)+"px");
	tempBorderRadius = parseInt(borderRadTopLeftRightExtBorder)+"px "+parseInt(borderRadTopLeftRightExtBorder)+"px "+parseInt(borderRadBottomLeftRightExtBorder)+"px "+parseInt(borderRadBottomLeftRightExtBorder)+"px ";
	$(".deviceSimulBox").css("border-radius", tempBorderRadius);
	$(".deviceSimulBox").css("top", deviceBoxTopOffset+"px");
	
	$(".deviceSimulBoxSubWraper").css("width", parseInt(deviceSubWrapperBoxWidth)+"px");
	$(".deviceSimulBoxSubWraper").css("height", parseInt(deviceSubWrapperBoxHeight)+"px");
	tempBorderRadius = parseInt(borderRadTopLeftRightIntBorder)+"px "+parseInt(borderRadTopLeftRightIntBorder)+"px "+parseInt(borderRadBottomLeftRightIntBorder)+"px "+parseInt(borderRadBottomLeftRightIntBorder)+"px ";
	$(".deviceSimulBoxSubWraper").css("border-radius", tempBorderRadius);
	$(".deviceSimulBoxSubWraper").css("top", parseInt(deviceBoxSubWrapperTopOffset)+"px");
	//$(".deviceSimulBoxSubWraper").css("left", leftExtBorderWidth+"px");
	
	$(".screenSimulBox").css("width", parseInt(screenBoxWidth)+"px");
	$(".screenSimulBox").css("height", parseInt(screenBoxHeight)+"px");
	if(newIllustType == "desktop")
	{
		tempBorderRadius = parseInt(borderRadScreen)+"px "+parseInt(borderRadScreen)+"px 0 0";
		$(".screenSimulBox").css("border-radius", tempBorderRadius );
	}
	else
	{
		$(".screenSimulBox").css("border-radius", parseInt(borderRadScreen)+"px" );
	}
	$(".screenSimulBox").css("top", parseInt(screenBoxTopOffset)+"px");
	//$(".screenSimulBox").css("left", leftIntBorderWidth+"px");
		
	if(newIllustType == "desktop")
	{	
		$(".laptopPart").css("height", parseInt(desktopKeyboardHeight)+"px");
		$(".laptopPart").css("bottom", parseInt(desktopKeyboardHeight)*-1+2+"px");
		$(".laptopPart").css("width", parseInt(deviceBoxWidth)*1.2+"px");
		if((parseInt(deviceBoxWidth)*1.2) > (parseInt($(".sctCaptures").width())-16))
		{
			$(".laptopPart").css("width", (parseInt($(".sctCaptures").width())-16)+"px");
			$(".laptopPart").css("left", ( ( parseInt($(".sctCaptures").width())-16 - deviceBoxWidth ) / 2 * -1 ) +"px");
		}
		else
		{
			$(".laptopPart").css("left", ( ( parseInt(deviceBoxWidth)*1.2 - deviceBoxWidth ) / 2 * -1 ) +"px");
		}
		
		$(".camDisk").css("width", parseInt(desktopCamHeight)+"px");
		$(".camDisk").css("height", parseInt(desktopCamHeight)+"px");
		var laptopCamCircleTopOffset = parseInt(topIntBorderHeight) / 2 - ( desktopCamHeight / 2 ) ;
		$(".camDisk").css("top", parseInt(laptopCamCircleTopOffset)+"px");
		var laptopCamCircleLeftOffset = deviceSubWrapperBoxWidth / 2 - ( parseInt(desktopCamHeight) / 2 ) ;
		$(".camDisk").css("left", parseInt(laptopCamCircleLeftOffset)+"px");
	}
	else if(newIllustType == "tablet")
	{
		$(".camDisk").css("width", parseInt(tabletCamHeight)+"px");
		$(".camDisk").css("height", parseInt(tabletCamHeight)+"px");
		$(".camDisk").css("top", parseInt(camCircleTopOffset)+"px");
		$(".camDisk").css("left", parseInt(camCircleLeftOrRightOffset)+"px");
		
		$(".homeBtnTablet").css("width", parseInt(tabletHomeBtnHeight)+"px");
		$(".homeBtnTablet").css("height", parseInt(tabletHomeBtnHeight)+"px");
		$(".homeBtnTablet").css("top", parseInt(homeBtnTopOffset)+"px");
		$(".homeBtnTablet").css("right", parseInt(homeBtnRightOffset)+"px");
		
		// Repositionnement de l'elem pr meilleur transition lorsque illust sera de type desktop
		$(".laptopPart").css("width", parseInt(deviceBoxWidth)+"px");
		$(".laptopPart").css("left", 0);
	}
	else if(newIllustType == "phone")
	{
		// For phone :
		
		$(".soundBar").css("height", parseInt(phoneSoundBarHeight)+"px");
		$(".soundBar").css("width", parseInt(deviceSubWrapperBoxWidth)*.2+"px");
		var soundBarTopOffset = parseInt(topIntBorderHeight) / 2 - ( phoneSoundBarHeight / 2 ) ;
		$(".soundBar").css("top", soundBarTopOffset+"px");
		var soundBarLeftOffset = deviceSubWrapperBoxWidth / 2 - ( parseInt($(".soundBar").width()) / 2  ) ;
		$(".soundBar").css("left", soundBarLeftOffset+"px");
		
		$(".homeBtnPhone").css("width", parseInt(phoneHomeBtnHeight)+"px");
		$(".homeBtnPhone").css("height", parseInt(phoneHomeBtnHeight)+"px");
		$(".homeBtnPhone").css("top", "auto");
		$(".homeBtnPhone").css("bottom", parseInt(homeBtnBottomOffset)+"px");
		var homeBtnLeftOffset = deviceSubWrapperBoxWidth / 2 - ( parseInt(phoneHomeBtnHeight) / 2 ) ;
		$(".homeBtnPhone").css("left", homeBtnLeftOffset+"px");
		
		// Repositionnement de l'elem pr meilleur transition lorsque illust sera de type desktop
		$(".laptopPart").css("width", parseInt(deviceBoxWidth)+"px");
		$(".laptopPart").css("left", 0);
	}
	else if(newIllustType == "doc")
	{
		// Repositionnement de l'elem pr meilleur transition lorsque illust sera de type desktop
		$(".laptopPart").css("width", parseInt(deviceBoxWidth)+"px");
		$(".laptopPart").css("left", 0);
	}
	else
	{
		console.log("ERR-FORMAT002Bis");
	}
	
}




