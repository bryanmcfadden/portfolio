var widthCityTextBox = 0;

var GoogleMapsScriptsLoaded = false;
var bdxGMapObject;
var worldGMapObject;

var bdxGMapInitialized = false ;
var worldGMapInitialized = false ;

var mapActive = "none"; // indique quelle carte est à afficher à l'instant t, dans le cas où les scripts GMap auraient fini de charger après l'appel d'affichage des cartes à l'écran
// values : "none", "bdxMap", "worldMap"


var animTypeForAbtCitBoxDisplay = "cnttBased"; // "cnttBased" || "vwptBased"

var artificialAddedSpceForCityNameBox = 50;


function setNavElements()
{
	$(".wrapperBtnNextSection").removeClass("beginningStep");
	$(".menuBtn").removeClass("beginningStep");

	//$(".btnNextSection").addClass("movingArrow");
	setTimeout(function(){$(".btnNextSection").addClass("movingArrow");},1000);

}


function runIntroAnim()
{

	widthCityTextBox = $(".sctMainCntt.sctIntroduction .bordeauxLink").width() + artificialAddedSpceForCityNameBox*2;
	//setTimeout(function(){$(".sctIntroduction").removeClass("beginningStep");},100);

	/*$(".sctIntroduction .introPunchLine").animate({"opacity":1},100,
		function()
		{
			$(".sctIntroduction").removeClass("beginningStep");
			setTimeout(function(){setNavElements();},1000);

		});*/

	scrollToElement("mainCnttTop");
	setTimeout(function()
		{
			$(".sctIntroduction").removeClass("beginningStep");
			//setTimeout(function(){setNavElements();},200);
			setNavElements();

		},100);
}


function openAboutCityBoxAnim()
{
	$('.todayCityBtn').addClass("actif");
		$('.todayCityBtn').removeClass("openTodayTab");
		$('.tomorrowCityBtn').removeClass("actif");
		$('.tomorrowCityBtn').addClass("openTomorrowTab");

		$('.tomorrowCityBox, .tomorrowTagsList').css({"opacity":0, "display":"none"});
		$('.todayCityBox, .todayTagsList').css({"opacity":1, "display":"block"});



	initTabDataInfosAbtCityBox();

	$(".GoogleMapsWrapper").css({"z-index":"1000"});
	$(".wrapperBoxCityMeteoInfo").css({"opacity":0,"display":"block"});


	var durationAboutCityBoxAnims = 1000;

		// 1. Désactivation du btn d'ouverture about city box

		$(".bordeauxLink").removeClass("showBdx");
		$(".bordeauxLink").removeClass("link");

		// 2. Maj du btn menu

		$(".menuBtn").removeClass("openMenu");

		if(isTransformSupported())
		{
			$(".menuBtn").addClass("crossBtn");
		}
		else
		{
			$(".menuBtn").addClass("crossBtnStatic");
		}

		// 3. Maj de la scrollbar

		if(isDeviceMobile)
		{
			$('html,body').animate({ scrollTop: 0 }, 'slow', function()
			{
				$("html").css({"overflow":"hidden", "height":"100%"});
				$("body").css({"overflow":"hidden", "height":"100%"});
				$(".rootBox").css({"overflow":"hidden", "height":"100%"});
				$(".mainContentBox").css({"overflow":"hidden", "height":"100%"});
			});
		}
		else
		{
			$(".mainContentBox").mCustomScrollbar("stop");
			//$(".mCSB_container").animate({top: 0}, 1000, function(){});
			$(".mainContentBox").mCustomScrollbar("stop").mCustomScrollbar("scrollTo","top");
			setTimeout(function(){hideMainScrollbar(function()
					{
						$(".mainContentBox").mCustomScrollbar("stop").mCustomScrollbar("disable");
						$(".mCSB_container").animate({top: 0}, 500);
					})
			},1000);
		}

		// 3. Floutage du fond

		$(".sctMainCntt.sctIntroduction .bckgdBox").addClass("blured");

		// 4. Disparition des contenus non concernés

		$(".hiddenIfMeteoOpened").addClass("transitionStopped");



		var tempCount=0;
		var nbHiddenItems = $(".hiddenIfMeteoOpened").length;
		var elToHide = ".hiddenIfMeteoOpened";
		//console.log("isModalTypeOf('completeLandscapeCnttBased'): "+isModalTypeOf("completeLandscapeCnttBased"));
		if(!isModalTypeOf("completeLandscapeCnttBased"))
		{
			elToHide += ", .bordeauxLink";
			nbHiddenItems++;
		}
		$(elToHide).animate({"opacity":0}, durationAboutCityBoxAnims, function(){

			tempCount++;
			if(tempCount == (nbHiddenItems-1) )
			{

			// 4. Agrandissement artificiel de la box contenant le texte de la ville

				// On set la width par CSS
				//$(".sctMainCntt.sctIntroduction .bordeauxLink").css({"width" : widthCityTextBox+"px", "opacity":1});
				$(".sctMainCntt.sctIntroduction .bordeauxLink").css({"width" : widthCityTextBox+"px"});

				$(".hiddenIfMeteoOpened").css("visibility","hidden");

				// 5. Affichage du bloc About City

				majPosiModalComponentsAbtCity();

				if(animTypeForAbtCitBoxDisplay == "cnttBased" )
				{
					majCSSPropForCnttBased();
				}
				if(animTypeForAbtCitBoxDisplay == "vwptBased" )
				{
					majCSSPropForVwptBased();
				}
				else
				{
					console.log("ERR-FORMATANIM001");
				}

				$(".wrapperBoxCityMeteoInfo, .bordeauxLink").animate({"opacity":1}, durationAboutCityBoxAnims, function(){ $(".menuBtn").addClass("closeBdx"); $(".sctMainCntt.sctIntroduction .bckgdBox").css("background-attachment", "scroll"); });
			}
		});
}

function closeAboutCityBoxAnim()
{
	var durationAboutCityBoxAnims = 750;

	clearInterval(worldTourTimerId);

	if($('.tomorrowCityBtn').hasClass("actif"))
	{
		$("#weatherIcon").removeClass().addClass(tabWorldCities[0][8]);
		$(".meteoTempInfo").html(tabWorldCities[0][7]);
		$(".meteoDateInfo").html(todayDate);
		$("#cityText").html(tabWorldCities[0][0]+", "+tabWorldCities[0][1]);
	}

	/*if($('.tomorrowCityBtn').hasClass("actif"))
	{
		deActivateWorldTour();

		$('.todayCityBtn').addClass("actif");
		$('.todayCityBtn').removeClass("openTodayTab");
		$('.tomorrowCityBtn').removeClass("actif");
		$('.tomorrowCityBtn').addClass("openTomorrowTab");

		$('.tomorrowCityBox, .tomorrowTagsList').animate({"opacity":0}, 1000, function(){ $(this).css("display","none");
		$('.todayCityBox, .todayTagsList').animate({"opacity":1}, 1000, function(){ $('.tomorrowCityBtn').addClass("openTomorrowTab");});
			 });
			 ooo
	}*/

	/*$('.todayCityBox, .todayTagsList').css({"opacity":0, "display":"block"});

	deActivateWorldTour();

	setTimeout( function(){

			$('.tomorrowCityBox, .tomorrowTagsList').animate({"opacity":0}, 1000, function(){ $(this).css("display","none");
			$('.todayCityBox, .todayTagsList').animate({"opacity":1}, 1000, function(){ $('.tomorrowCityBtn').addClass("openTomorrowTab");});
			 });
			showBdxMap();

		},100);*/


	mapActive = "none"; // si GMap scripts finissent de charger alors que l'on ferme About city modal, on dit de ne pas affciher les cartes (c'est trop tard)

		// 1. Maj icon btn menu

		$(".menuBtn").removeClass("crossBtn crossBtnStatic");

		// 1. Défloutage du fond
		$(".sctMainCntt.sctIntroduction .bckgdBox").removeClass("blured");

		// 3. Maj de la scrollbar

		if(isDeviceMobile)
		{
			$("html").css({"overflow":"auto", "height":"auto"});
			$("body").css({"overflow":"auto", "height":"auto"});
			$(".rootBox").css({"overflow":"auto", "height":"auto"});
			$(".mainContentBox").css({"overflow":"auto", "height":"auto"});
		}
		else
		{
			$(".mainContentBox").mCustomScrollbar("update");
			showMainScrollbar();
		}

		// next

		// /!\ Une fois les éléments About city disparu : --------- <<<<







		var elToHide = ".wrapperBoxCityMeteoInfo, .gMap";
		if(animTypeForAbtCitBoxDisplay != "cnttBased")
		{
			elToHide += ", .bordeauxLink";
		}
		$(elToHide).animate({"opacity":0},function (){


			// 4. Reset de la largeur par défaut (auto) de la box contenant le texte de la ville

			$(".sctMainCntt.sctIntroduction .bordeauxLink").css({"width" : "auto"});
			$(".introPunchLine").css({"right":0});
			$(".hiddenIfMeteoOpened").css("visibility","visible");


			majCSSPropForCnttBased();


			// 4. Apparition des contenus non concernés par About city

			var tempCount=0;
			var nbHiddenItems = $(".hiddenIfMeteoOpened").length;
			var elToShow = ".hiddenIfMeteoOpened";
			if(animTypeForAbtCitBoxDisplay != "cnttBased")
			{
				elToShow += ", .bordeauxLink";
				nbHiddenItems++;
			}
			$(elToShow).animate({"opacity":1},durationAboutCityBoxAnims, function()
			{
				tempCount++;
				if(tempCount == (nbHiddenItems-1) )
				{
					$(".hiddenIfMeteoOpened").removeClass("transitionStopped");
				}
			});


			// /!\ A la fin de toutes les anims : -------------------------------- <<<<

			// Désactivation du btn d'ouverture about city box
			$(".bordeauxLink").addClass("showBdx");
			$(".bordeauxLink").addClass("link");

			// Maj du btn menu
			$(".menuBtn").addClass("openMenu");
			$(".menuBtn").removeClass("closeBdx");

			//$(".gMap").css({"opacity":0});
			//$(".GoogleMapsWrapper").css({"display":"none"});
			$(".GoogleMapsWrapper").css({"z-index":"-9999"});
			$(".wrapperBoxCityMeteoInfo").css({"display":"none"});
		});
}



// ================================================ GOOGLE MAPS ==================================================================


// https://developers.google.com/maps/documentation/javascript/3.exp/reference?hl=fr


function loadGoogleMaps()
{
	var script = document.createElement('script');
	script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC7-HYWOECYHbUZu2Maw0VIWVHreWaEYp0&callback=gMapsScriptsLoaded";
	/*script.onload = function () {

		console.log("Le fichier JS source Google Maps a bien été chargé.");
    	GoogleMapsScriptsLoaded = true;

		// Attachement des maps aux éléments HTML concernés

		initBdxMap();
		initWorldMap();
	};*/


	$("body").append(script);
}
















function gMapsScriptsLoaded()
{
	GoogleMapsScriptsLoaded = true;

	//suppression du loader visuel en arrière-plan du bloc :
	$(".wrapperMapLoading").remove();

	initBdxGMap();
	initWorldGMap();

	if(mapActive == "bdxMap")
	{
		showBdxMap();
	}
	else if(mapActive == "worldMap")
	{
		showWorldMap();
	}
}

function initBdxGMap()
{
    bdxGMapObject = new google.maps.Map(document.getElementById('bdxGMap'), {
		zoom: 13,
		center: {lat: tabWorldCities[0][3], lng: tabWorldCities[0][4]},
		mapTypeControl: false,
		streetViewControl:false,
		zoomControl: false,
		setClickableIcons: false,
		scrollwheel:true,
		gestureHandling: "auto"
    });

	bdxGMapInitialized = true;
}
function initWorldGMap()
{
	worldGMapObject = new google.maps.Map(document.getElementById('worldGMap'), {
			/*center: {lat: 44.839921, lng: -0.576308},*/
			zoom: 2,
			mapTypeControl: false,
			streetViewControl:false,
			zoomControl: false,
			setClickableIcons: false,
			scrollwheel:false,
			disableDoubleClickZoom:true,
			gestureHandling:"none"
		});

	createCitiesMarkers();

	// Maj worldMap config
	var boundTopLeft = new google.maps.LatLng(67.728016, -139.159056);
	var boundBottomRight = new google.maps.LatLng(9.221904, 47.688833);
	var bounds = new google.maps.LatLngBounds(boundTopLeft, boundBottomRight);
	//worldGMapObject.setZoom(2);
	worldGMapObject.fitBounds(bounds, 0);

	worldGMapInitialized = true;
}

function showBdxMap()
{
	//$(".GoogleMapsWrapper").css({"display":"block"});
	$(".GoogleMapsWrapper").css({"z-index":"1000"});

	$(".bdxMap").css("z-index", "400");
	$(".worldMap").css("z-index", "300");

	$(".bdxMap").animate({"opacity":1},1000);
	$(".worldMap").animate({"opacity":0},1000);
	//setMapOnAll(null);

	mapActive = "bdxMap";

	setTimeout(function(){

	// Si le script de GMap a bien été chargé :
	if(GoogleMapsScriptsLoaded)
	{
		// Si la map bdx n'a pas été initialisée :
		if(!bdxGMapInitialized)
		{
			$(".GoogleMapsWrapper").css({"opacity":"1"}); // only for debuggage !

			//  initWorldMap()
			initBdxGMap();
		}
		else
		{
			google.maps.event.trigger(bdxGMapObject, 'resize');//
		}

		// Si la map world n'a pas été initialisée (ie if first click on tomorow btn) :
		if(!worldGMapInitialized)
		{
			//  initWorldMap()
			initWorldGMap();
		}
		else
		{
			google.maps.event.trigger(worldGMapObject, 'resize');//
		}

		// Maj bdxMap config
		bdxGMapObject.setZoom(13);
		bdxGMapObject.setCenter({lat: tabWorldCities[0][3], lng: tabWorldCities[0][4]}); // Bordeaux
	}

	},100);
}

function showWorldMap()
{
	//$(".GoogleMapsWrapper").css({"display":"block"});
	$(".GoogleMapsWrapper").css({"z-index":"1000"});

	$(".worldMap").css("z-index", "400");
	$(".bdxMap").css("z-index", "300");

	$(".worldMap").animate({"opacity":1},1000);
	$(".bdxMap").animate({"opacity":0},1000);

	mapActive = "worldMap";

	setTimeout(function(){

	// Si le script de GMap a bien été chargé :
	if(GoogleMapsScriptsLoaded)
	{

		// Si la map world n'a pas été initialisée (ie if first click on tomorow btn) :
		if(!worldGMapInitialized)
		{
			initWorldGMap();
		}
		else
		{
			google.maps.event.trigger(worldGMapObject, 'resize');//
		}

		//setMapOnAll(null);
		//setMapOnAll(worldGMapObject);
		//worldGMapObject.setCenter({lat: tabWorldCities[0][3], lng: tabWorldCities[0][4]}); // Bordeaux

		var boundTopLeft = new google.maps.LatLng(67.728016, -139.159056);
		var boundBottomRight = new google.maps.LatLng(9.221904, 47.688833);
		var bounds = new google.maps.LatLngBounds(boundTopLeft, boundBottomRight);
		//worldGMapObject.setZoom(2);
		worldGMapObject.fitBounds(bounds, 0);
	}

	},100);
}























function createCitiesMarkers()
{
	var imagePin = {
	  url: './img/icons/pin_red_white.svg',
	  size: new google.maps.Size(22, 30),
	  origin: new google.maps.Point(0, 0),
	  anchor: new google.maps.Point(11, 32),
	  scaledSize: new google.maps.Size(22, 30)
	};

	for (var i = 0; i < tabWorldCitiesLength; i++)
	{
		var cityPosition = {lat: tabWorldCities[i][3], lng: tabWorldCities[i][4]}
        var marker = new google.maps.Marker({
        	position: cityPosition,
			icon: imagePin/*,
			animation: google.maps.Animation.DROP*/
			//map: map
        });
        tabWorldCities[i][5] = marker;
		tabWorldCities[i][5].setMap(null); // hide marker on the map
    }
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
        for (var i = 0; i < tabWorldCities.length; i++) {
          tabWorldCities[i][5].setMap(map); // map = null if we want to hide every markers
        }
      }

function showCountries()
{
	indexTabWorldCities++;

	if(indexTabWorldCities==(tabWorldCitiesLength)){indexTabWorldCities=0;}

	//map.setCenter({lat: tabWorldCities[indexTabWorldCities][3], lng: tabWorldCities[indexTabWorldCities][4]});

	setMapOnAll(null); // hide every markers on the map
	//tabWorldCities[indexTabWorldCities][5].setMap(map); // print marker of the current city shown
	tabWorldCities[indexTabWorldCities][5].setMap(worldGMapObject); // print marker of the current city shown

	//console.log("indexTabWorldCities : "+indexTabWorldCities+ ", tabWorldCities[indexTabWorldCities][0] : "+tabWorldCities[indexTabWorldCities][0]+ ", tabWorldCitiesLength :"+tabWorldCitiesLength+".");
}












// =========================================================================
// ========================================================================= SCRIPTS DE POSITIONNEMENT DES COMPOSANTS MODAL ABOUT CITY
// =========================================================================




var tbInfAbtCtBx = new Array();

function initTabDataInfosAbtCityBox()
{

	// Si la modal About City est actuellement affichée...
	if($(".wrapperBoxCityMeteoInfo").css("display") == "block")
	{
		widthCityTextBox = $(".sctMainCntt.sctIntroduction .bordeauxLink").width();
	}
	else
	{
		widthCityTextBox = $(".sctMainCntt.sctIntroduction .bordeauxLink").width() + artificialAddedSpceForCityNameBox*2;
	}

	tbInfAbtCtBx['screenWidth'] = $(window).width();
	tbInfAbtCtBx['screenHeight'] = $(window).height();

	tbInfAbtCtBx['widthHeightMenuBtn'] = $(".menuBtn").width();
	tbInfAbtCtBx['margnLftRgtMenuBtn'] = parseInt($(".menuBtn").css("right"));
	tbInfAbtCtBx['margnTopBotMenuBtn'] = parseInt($(".menuBtn").css("top"));



	var tempDisplayProp = $(".wrapperBoxCityMeteoInfo").css("display");
	var tempOpacProp = $(".wrapperBoxCityMeteoInfo").css("opacity");
	$(".wrapperBoxCityMeteoInfo").css({"display": "block", "opacity":0});

	tbInfAbtCtBx['widthWrapBxCitMetInfPartSup'] = parseInt(widthCityTextBox);
	tbInfAbtCtBx['heightWrapBxCitMetInfPartSup'] = parseInt($(".wrapperBoxCityMeteoInfo").outerHeight()) + parseInt($(".btnNavAboutCityBox").outerHeight()) + parseInt($(".cityTagsList").outerHeight());

	tbInfAbtCtBx['widthWrapBxCitMetInfPartInf'] = parseInt($(".todayCityBox").outerWidth());
	tbInfAbtCtBx['heightWrapBxCitMetInfPartInf'] = parseInt($(".bdxByTitle").outerHeight()) + parseInt($(".bdxByTitle").css("margin-bottom")) + ( (parseInt($(".aboutBdxWebsite").eq(0).outerHeight()) + parseInt($(".aboutBdxWebsite").eq(0).css("margin-bottom"))) * 4 ) + 20; // il y a 4 liens / avec 20, une marge non récupérable défini via une propriété bottom:-xpx en CSS...

	$(".wrapperBoxCityMeteoInfo").css({"display": tempDisplayProp, "opacity": tempOpacProp});


}




// Appelée au click sur le btn d'apparition ds infos sur la ville mais aussi resize du document
function majPosiModalComponentsAbtCity()
{
	resetTodayCityBoxProp();

	initTabDataInfosAbtCityBox();



	// ---------------------
	// ---------------------
	// ---------------------



	animTypeForAbtCitBoxDisplay = "vwptBased";


	if(isModalTypeOf("completeLandscapeCnttBased"))
	{
		animTypeForAbtCitBoxDisplay = "cnttBased";

		majLndscpCnttBasdForAbtCtyBox();

		// Si la modal About City est actuellement affichée...
		if($(".wrapperBoxCityMeteoInfo").css("display") == "block")
		{
			majCSSPropForCnttBased();
		}
	}
	else if(isModalTypeOf("completeLandscapeVwptBased"))
	{
		animTypeForAbtCitBoxDisplay = "vwptBased";

		majLndscpVwptBasdForAbtCtyBox();

		// Si la modal About City est actuellement affichée...
		if($(".wrapperBoxCityMeteoInfo").css("display") == "block")
		{
			majCSSPropForVwptBased();
		}
	}
	else if(isModalTypeOf("square"))
	{
		animTypeForAbtCitBoxDisplay = "vwptBased";

		majSquareVwptBasdForAbtCtyBox();

		// Si la modal About City est actuellement affichée...
		if($(".wrapperBoxCityMeteoInfo").css("display") == "block")
		{
			majCSSPropForVwptBased();
		}
	}
	else if(isModalTypeOf("partialLandscape"))
	{
		animTypeForAbtCitBoxDisplay = "vwptBased";

		majPartialLndscpVwptBasdForAbtCtyBox();

		// Si la modal About City est actuellement affichée...
		if($(".wrapperBoxCityMeteoInfo").css("display") == "block")
		{
			majCSSPropForVwptBased();
		}
	}
	/*else if(isModalTypeOf("completePortrait"))
	{
	}*/
	else if(isModalTypeOf("partialPortrait"))
	{
		animTypeForAbtCitBoxDisplay = "vwptBased";

		majPartialPortraitVwptBasdForAbtCtyBox();

		// Si la modal About City est actuellement affichée...
		if($(".wrapperBoxCityMeteoInfo").css("display") == "block")
		{
			majCSSPropForVwptBased();
		}
	}
	else
	{
		console.log("ERR-MODCIT001");
	}
}














// Avec testedType = "completeLandscapeCnttBased" || "completeLandscapeVwptBased"  || "square" || "partialLandscape" || "completePortrait" || "partialPortrait"
function isModalTypeOf(testedType)
{
	var margeAerationPackHauteurMenuBtn = tbInfAbtCtBx['widthHeightMenuBtn'] + tbInfAbtCtBx['margnTopBotMenuBtn'] * 2;
	var margeAerationPackLargeurMenuBtn = tbInfAbtCtBx['widthHeightMenuBtn'] + tbInfAbtCtBx['margnLftRgtMenuBtn'] * 2;

	var smallHoriSuppMarge = tbInfAbtCtBx['screenWidth'] * 1.03 - tbInfAbtCtBx['screenWidth']; if(smallHoriSuppMarge > 10){smallHoriSuppMarge = 10;}
	var bigHoriSuppMarge = tbInfAbtCtBx['screenWidth'] * 1.05 - tbInfAbtCtBx['screenWidth']; if(bigHoriSuppMarge > 20){bigHoriSuppMarge = 20;}

	var margeAeration10px = 10;

	var hauteurColInfosAbtCity, largeurColInfosAbtCity, hauteurDispo, hauteurDispoAcBtnMenu, largeurDisponible, largeurDisponibleAcBtnMenu ;



	if(testedType == "completeLandscapeCnttBased")
	{
		// si la box du lien "Bordeaux" n'est pas extensible en largeur, ou que le lien Bdx a dû passer sur une 2e ligne par manque de place en largeur
		if(!isBdxLinkExtensible(false) || parseInt($(".bordeauxLink").offset().top) > (parseInt($(".statusFrontDev").offset().top)+10) )
		{
			return false;
		}
		else
		{
			var neededYSpceByMenuBtn = tbInfAbtCtBx['widthHeightMenuBtn'] + tbInfAbtCtBx['margnTopBotMenuBtn'] * 2;

			var tempDisplayProp = $(".wrapperBoxCityMeteoInfo").css("display");
			var tempOpacProp = $(".wrapperBoxCityMeteoInfo").css("opacity");
			$(".wrapperBoxCityMeteoInfo").css({"display": "block", "opacity":0});
			var bdxCityBoxOffsetTop = parseInt($(".wrapperBoxCityMeteoInfo").offset().top);
			var navBdxCityBoxOffsetTop = parseInt($(".btnNavAboutCityBox").offset().top);
			$(".wrapperBoxCityMeteoInfo").css({"display": tempDisplayProp, "opacity": tempOpacProp});

			// S'il n'y a pas suffisament de place au-dessus des box About City pour le btn Menu, il doit y avoir assez de place sur la droite !
			if(bdxCityBoxOffsetTop < neededYSpceByMenuBtn)
			{
				// S'il n'y a pas assez de place pour le btn Menu sur la droite...
				if(!isBdxLinkExtensible(true) || navBdxCityBoxOffsetTop < 30)
				{
					return false;
				}
				else
				{
					//console.log("|||||||FORMAT||||||| => completeLandscapeCnttBased");
					return true;
				}
			}
			else
			{
				//console.log("|||||||FORMAT||||||| => completeLandscapeCnttBased");
				return true;
			}
		}
	}
	else if(testedType == "completeLandscapeVwptBased")
	{
		/*

		tbInfAbtCtBx['screenWidth'] = $(window).width();
	tbInfAbtCtBx['screenHeight'] = $(window).height();

	tbInfAbtCtBx['widthHeightMenuBtn'] = $(".menuBtn").width();
	tbInfAbtCtBx['margnLftRgtMenuBtn'] = parseInt($(".menuBtn").css("right"));
	tbInfAbtCtBx['margnTopBotMenuBtn'] = parseInt($(".menuBtn").css("top"));



	var tempDisplayProp = $(".wrapperBoxCityMeteoInfo").css("display");
	var tempOpacProp = $(".wrapperBoxCityMeteoInfo").css("opacity");
	$(".wrapperBoxCityMeteoInfo").css({"display": "block", "opacity":0});

	tbInfAbtCtBx['widthWrapBxCitMetInfPartSup'] = parseInt(widthCityTextBox);
	tbInfAbtCtBx['heightWrapBxCitMetInfPartSup'] = parseInt($(".wrapperBoxCityMeteoInfo").outerHeight()) + parseInt($(".btnNavAboutCityBox").outerHeight()) + parseInt($(".cityTagsList").outerHeight());

	tbInfAbtCtBx['widthWrapBxCitMetInfPartInf'] = parseInt($(".todayCityBox").outerWidth());
	tbInfAbtCtBx['heightWrapBxCitMetInfPartInf'] = parseInt($(".bdxByTitle").outerHeight()) + parseInt($(".bdxByTitle").css("margin-bottom")) + ( (parseInt($(".aboutBdxWebsite").eq(0).outerHeight()) + parseInt($(".aboutBdxWebsite").eq(0).css("margin-bottom"))) * 4 ) + 20; // il y a 4 liens / avec 20, une marge non récupérable défini via une propriété bottom:-xpx en CSS...


			*/

		hauteurColInfosAbtCity = tbInfAbtCtBx['heightWrapBxCitMetInfPartSup'] + tbInfAbtCtBx['heightWrapBxCitMetInfPartInf'];
		largeurColInfosAbtCity = tbInfAbtCtBx['widthWrapBxCitMetInfPartSup'];
		hauteurDispo = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity - margeAeration10px * 2;
		hauteurDispoAcBtnMenu = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity - margeAerationPackHauteurMenuBtn - margeAerationPackHauteurMenuBtn / 2;
		largeurDisponible = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity * 2 - bigHoriSuppMarge * 2 - smallHoriSuppMarge;
		largeurDisponibleAcBtnMenu = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity * 2 - margeAerationPackLargeurMenuBtn * 2 - smallHoriSuppMarge;
		/*
		console.log(" /- hauteurColInfosAbtCity : "+hauteurColInfosAbtCity);
		console.log(" /- largeurColInfosAbtCity : "+largeurColInfosAbtCity);
		console.log(" /- hauteurDispo : "+hauteurDispo);
		console.log(" /- hauteurDispoAcBtnMenu : "+hauteurDispoAcBtnMenu);
		console.log(" /- largeurDisponible : "+largeurDisponible);
		console.log(" /- largeurDisponibleAcBtnMenu : "+largeurDisponibleAcBtnMenu);*/


		if( hauteurDispo  < 0 || largeurDisponible < 0 )
		{
			return false;
		}
		else if( hauteurDispoAcBtnMenu < 0 && largeurDisponibleAcBtnMenu < 0 )
		{
			return false;
		}
		else
		{
			//console.log("|||||||FORMAT||||||| => completeLandscapeVwptBased");
			return true;
		}
	}
	else if(testedType == "square")
	{
		hauteurColInfosAbtCity = tbInfAbtCtBx['heightWrapBxCitMetInfPartSup'];
		largeurColInfosAbtCity = tbInfAbtCtBx['widthWrapBxCitMetInfPartSup'] + tbInfAbtCtBx['widthWrapBxCitMetInfPartInf'] + smallHoriSuppMarge;
		hauteurDispo = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity * 2 - margeAeration10px * 2 - smallHoriSuppMarge;
		hauteurDispoAcBtnMenu = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity * 2 - margeAeration10px * 2 - smallHoriSuppMarge - margeAerationPackHauteurMenuBtn - margeAerationPackHauteurMenuBtn / 2;
		largeurDisponible = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - bigHoriSuppMarge * 2;
		largeurDisponibleAcBtnMenu = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - bigHoriSuppMarge * 2 - margeAerationPackLargeurMenuBtn * 2;

		if( hauteurDispo  < 0 || largeurDisponible < 0 )
		{
			return false;
		}
		else if( hauteurDispoAcBtnMenu < 0 && largeurDisponibleAcBtnMenu < 0 )
		{
			return false;
		}
		else
		{
			//console.log("|||||||FORMAT||||||| => square");
			return true;
		}
	}
	else if(testedType == "partialLandscape")
	{
		hauteurColInfosAbtCity = tbInfAbtCtBx['heightWrapBxCitMetInfPartSup'];
		largeurColInfosAbtCity = tbInfAbtCtBx['widthWrapBxCitMetInfPartSup'];
		hauteurDispo = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity - margeAeration10px * 2;
		hauteurDispoAcBtnMenu = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity - margeAerationPackHauteurMenuBtn - margeAerationPackHauteurMenuBtn / 2;
		largeurDisponible = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity * 2 - bigHoriSuppMarge * 2 - smallHoriSuppMarge;
		largeurDisponibleAcBtnMenu = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity * 2 - margeAerationPackLargeurMenuBtn * 2;

		if( hauteurDispo  < 0 || largeurDisponible < 0 )
		{
			return false;
		}
		else if( hauteurDispoAcBtnMenu < 0 && largeurDisponibleAcBtnMenu < 0 )
		{
			return false;
		}
		else
		{
			//console.log("|||||||FORMAT||||||| => partialLandscape");
			return true;
		}
	}
	/*else if(testedType == "completePortrait")
	{
	}*/
	else if(testedType == "partialPortrait")
	{
		hauteurColInfosAbtCity = tbInfAbtCtBx['heightWrapBxCitMetInfPartSup'];
		largeurColInfosAbtCity = tbInfAbtCtBx['widthWrapBxCitMetInfPartSup'];
		hauteurDispo = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity * 2 - margeAeration10px * 2 - smallHoriSuppMarge;
		hauteurDispoAcBtnMenu = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity * 2 - margeAeration10px * 2 - smallHoriSuppMarge - margeAerationPackHauteurMenuBtn - margeAerationPackHauteurMenuBtn / 2;
		largeurDisponible = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - bigHoriSuppMarge * 2;
		largeurDisponibleAcBtnMenu = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - margeAerationPackLargeurMenuBtn * 2;




		if( (tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity)  < 0 )
		{
			return false;
		}
		else if( (tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity*2 )  < 0 )
		{
			return false;
		}
		else
		{
			//console.log("|||||||FORMAT||||||| => partialPortrait");
			return true;
		}
	}
	else
	{
		//console.log("|||||||FORMAT||||||| => aucun / bloquage du lien / fermeture de la modal si ouverte");
		return false;
	}
}

// Indique s'il y a assez d'espace à droite pour élargir la box du nom de ville (ne tient pas compte de l'espace nécessaire au btn menu sur la droite !!!)
// Avec menuBtnConsidered un booléne indiquant s'il faut ou non prendre en compte l'espace vital du btn Menu pour le calcul de la place restante en largeur
function isBdxLinkExtensible(menuBtnConsidered)
{
	var availableSpceOnScrnRgtSide = $(window).width() - parseInt($(".introStatus > .insecable").eq(0).offset().left) - $(".introStatus > .insecable").eq(0).outerWidth();
	// Si la modal About City est actuellement affichée...
	if($(".wrapperBoxCityMeteoInfo").css("display") == "block")
	{
		//var tempVar = $(".introStatus > .insecable").eq(0).outerWidth();
		//availableSpceOnScrnRgtSide = $(window).width() - tempVar - parseInt($(".introStatus > .insecable").eq(0).offset().left) + ( tempVar / 1.1 - artificialAddedSpceForCityNameBox * 2 );
		var svdVal = parseInt($(".bordeauxLink").width());
		$(".bordeauxLink").css("width","auto");
		var availableSpceOnScrnRgtSide = $(window).width() - parseInt($(".introStatus > .insecable").eq(0).offset().left) - $(".introStatus > .insecable").eq(0).outerWidth();
		$(".bordeauxLink").css("width",svdVal+"px");
	}

	if(menuBtnConsidered)
	{
		availableSpceOnScrnRgtSide -= ($(".menuBtn").width() + (parseInt($(".menuBtn").css("right")) * 2 ));
		//console.log('availableSpceOnScrnRgtSide -= ($(".menuBtn").width() ('+$(".menuBtn").width()+') + (parseInt($(".menuBtn").css("right")) ('+parseInt($(".menuBtn").css("right"))+') * 2 ));');
		//console.log("availableSpceOnScrnRgtSide après : "+availableSpceOnScrnRgtSide);
	}

	var neededRgtMorSpceIfAnimCnttBased = widthCityTextBox;
	neededRgtMorSpceIfAnimCnttBased = ( neededRgtMorSpceIfAnimCnttBased - (widthCityTextBox - artificialAddedSpceForCityNameBox * 2) ) / 2;
	// Si on prend en compte l'espace du btn menu sur la droite, alors on n'ajoute pas la marge d'aération de 20px / les marges du btn menu suffiront !
	if(!menuBtnConsidered){neededRgtMorSpceIfAnimCnttBased += 20; /* 20 px de marge d'aération sur la droite de l'écran*/}

	//console.log("if(availableSpceOnScrnRgtSide "+availableSpceOnScrnRgtSide+" >= neededRgtMorSpceIfAnimCnttBased "+neededRgtMorSpceIfAnimCnttBased+")")
	if(availableSpceOnScrnRgtSide >= neededRgtMorSpceIfAnimCnttBased)
	{
		return true;
	}
	else
	{
		return false;
	}
}






/*


hauteurColInfosAbtCity = hauteurColInfosSup + hauteurColInfosInf
		largeurColInfosAbtCity = largeurColInfosSup
		hauteurDispo = hauteurEcran - hauteurColInfosAbtCity - margeAeration10px * 2
		hauteurDispoAcBtnMenu = hauteurEcran - hauteurColInfosAbtCity - margeAerationPackHauteurMenuBtn - margeAerationPackHauteurMenuBtn / 2
		largeurDisponible = largeurEcran - largeurColInfosAbtCity * 2 - margeAeration3% * 2 - margeAeration1.5%
		largeurDisponibleAcBtnMenu = largeurEcran - largeurColInfosAbtCity * 2 - margeAerationPackLargeurMenuBtn * 2


		si(  largeurColInfosAbtCity > largeurDisponibleAcBtnMenu && hauteurColInfosAbtCity > hauteurDispoAcBtnMenu      )
		{
			return false
		}
		else
		{
			console.log("|||||||FORMAT||||||| => completeLandscapeVwptBased");
			return true;
		}



*/


// ================================================================================== CHGT ONGLETS TODAY <> TOMORROW





function initTodayTab()
{
	$('.todayCityBtn').addClass("actif");
	$('.todayCityBtn').removeClass("openTodayTab");
	$('.tomorrowCityBtn').removeClass("actif");

	$('.todayCityBox, .todayTagsList').css({"opacity":0, "display":"block"});

	deActivateWorldTour();

	setTimeout( function(){

			$('.tomorrowCityBox, .tomorrowTagsList').animate({"opacity":0}, 1000, function(){ $(this).css("display","none");
			$('.todayCityBox, .todayTagsList').animate({"opacity":1}, 1000, function(){ $('.tomorrowCityBtn').addClass("openTomorrowTab");});
			 });
			showBdxMap();

		},100);

}


function initTomorrowTab()
{
	$('.tomorrowCityBtn').addClass("actif");
	$('.tomorrowCityBtn').removeClass("openTomorrowTab");
	$('.todayCityBtn').removeClass("actif");

	activateWorldTour();

	$('.tomorrowCityBox, .tomorrowTagsList').css({"opacity":0, "display":"block"});

	setTimeout( function(){

			$('.todayCityBox, .todayTagsList').animate({"opacity":0}, 1000, function(){ $(this).css("display","none");
			$('.tomorrowCityBox, .tomorrowTagsList').animate({"opacity":1}, 1000, function(){ $('.todayCityBtn').addClass("openTodayTab");});
			 });
			showWorldMap();

		},100);


}


var worldTourTimerId;

function activateWorldTour()
{
	clearInterval(worldTourTimerId);

	indexTabWorldCities = -1;

	showCountries();
	$("#cityText").html(tabWorldCities[indexTabWorldCities][0]+", "+tabWorldCities[indexTabWorldCities][1]+"?");
	majWeatherBox("tomorrow");

	worldTourTimerId = setInterval(function(){
		// 1. Changement map locator
		showCountries();
		// 2. Changement city text
		$("#cityText").html(tabWorldCities[indexTabWorldCities][0]+", "+tabWorldCities[indexTabWorldCities][1]+"?");
		// 3. Changement city meteo
		majWeatherBox("tomorrow");
	},3000);
}

function deActivateWorldTour()
{
	clearInterval(worldTourTimerId);

	// 1. Reinit. city text
	$("#cityText").html("Bordeaux, France");
	// 2. Reinit. city meteo
	$("#cityText").html(tabWorldCities[0][0]+", "+tabWorldCities[0][1]);
	majWeatherBox("today");
}
