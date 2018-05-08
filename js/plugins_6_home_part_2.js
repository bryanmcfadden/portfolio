


// 1. Fct Format modal About city box 1 - ie landscape complete ===========================================================
// ------------------------------------------------------------------------------------------------------------------------

function majLndscpCnttBasdForAbtCtyBox()
{
	/*// Si la modal About City est actuellement affichée...
	if($(".wrapperBoxCityMeteoInfo").css("display") == "block")
	{
		majCSSPropForCnttBased();
	}*/
	
		
	var tbInfos = tbInfAbtCtBx;
	
	var tempDisplayProp = $(".wrapperBoxCityMeteoInfo").css("display");
	var tempOpacProp = $(".wrapperBoxCityMeteoInfo").css("opacity");
	$(".wrapperBoxCityMeteoInfo").css({"display": "block", "opacity":0});
	
	var gMapsWrapTop = parseInt($(".btnNavAboutCityBox").offset().top);
	
	
	var tempToDeduce = 0;
	if(parseInt($(".wrapperBoxCityMeteoInfo").width()) != tbInfos['widthWrapBxCitMetInfPartSup'])
	{
		tempToDeduce = ( tbInfos['widthWrapBxCitMetInfPartSup'] - parseInt($('.wrapperBoxCityMeteoInfo').width()) ) / 2;
		//console.log("Et lààààààààààààààààààà : tempToDeduce ("+tempToDeduce+") = ( tbInfos['widthWrapBxCitMetInfPartSup'] ("+tbInfos['widthWrapBxCitMetInfPartSup']+") - parseInt($('.wrapperBoxCityMeteoInfo').width()) ("+parseInt($('.wrapperBoxCityMeteoInfo').width())+") ) / 2;");
	}
	
	
	var abtCitBoxRight = tbInfos['screenWidth'] - parseInt($(".wrapperBoxCityMeteoInfo").offset().left) + tempToDeduce - tbInfos['widthWrapBxCitMetInfPartSup'];
	//console.log("Gnagna : abtCitBoxRight ("+abtCitBoxRight+") = tbInfos['screenWidth'] ("+tbInfos['screenWidth']+") - parseInt($('.wrapperBoxCityMeteoInfo').offset().left) ("+parseInt($('.wrapperBoxCityMeteoInfo').offset().left)+") - tbInfos['widthWrapBxCitMetInfPartSup'] ("+tbInfos['widthWrapBxCitMetInfPartSup']+");");
	var availableLeftSpce = parseInt($(".wrapperBoxCityMeteoInfo").offset().left);
			
	$(".wrapperBoxCityMeteoInfo").css({"display": tempDisplayProp, "opacity": tempOpacProp});
	
	
	//var gMapsWrapWidth = largeurEcran - largeurBoxCity - margeDroiteEcran - margeSecuAcBoxCity - margeGaucheEcran-=MargeDroite;
	var gMapsWrapWidth = tbInfos['screenWidth'] - tbInfos['widthWrapBxCitMetInfPartSup'] - abtCitBoxRight - 50 - abtCitBoxRight;
	//console.log("gMapsWrapWidth ("+gMapsWrapWidth+") = tbInfos['screenWidth'] ("+tbInfos['screenWidth']+") - tbInfos['widthWrapBxCitMetInfPartSup'] ("+tbInfos['widthWrapBxCitMetInfPartSup']+") - abtCitBoxRight ("+abtCitBoxRight+") - 50 - abtCitBoxRight ("+abtCitBoxRight+");");
	
	var gMapsWrapLeft = abtCitBoxRight;
	
	var gMapsWrapHeight = tbInfos['screenHeight'] - gMapsWrapTop * 2 ;
	
	$(".GoogleMapsWrapper").width(gMapsWrapWidth);
	$(".GoogleMapsWrapper").height(gMapsWrapHeight);
	$(".GoogleMapsWrapper").css({"left": gMapsWrapLeft, "top": gMapsWrapTop});
}



// 2. Fct Format modal About city box 2 - ie landscape complete basé sur le Viewport ===========================================================
// ------------------------------------------------------------------------------------------------------------------------

function majLndscpVwptBasdForAbtCtyBox()
{
	
	var margeAerationPackHauteurMenuBtn = tbInfAbtCtBx['widthHeightMenuBtn'] + tbInfAbtCtBx['margnTopBotMenuBtn'] * 2;
	var margeAerationPackLargeurMenuBtn = tbInfAbtCtBx['widthHeightMenuBtn'] + tbInfAbtCtBx['margnLftRgtMenuBtn'] * 2;
	
	var smallHoriSuppMarge = tbInfAbtCtBx['screenWidth'] * 1.03 - tbInfAbtCtBx['screenWidth']; if(smallHoriSuppMarge > 50){smallHoriSuppMarge = 10;}
	var bigHoriSuppMarge = tbInfAbtCtBx['screenWidth'] * 1.05 - tbInfAbtCtBx['screenWidth']; if(bigHoriSuppMarge > 20){bigHoriSuppMarge = 20;}
	
	var margeAeration10px = 10;
	
	var hauteurColInfosAbtCity, largeurColInfosAbtCity, hauteurDispo, hauteurDispoAcBtnMenu, largeurDisponible, largeurDisponibleAcBtnMenu ;
	
	var largeurBoxGMaps, hauteurBoxGMaps, leftMargeGmapsBox, leftMargeCityBoxPartSup, leftMargeCityBoxPartInf, topMargeGmapsBox, topMargeCityBoxPartSup, topMargeCityBoxPartInf ;
	

		
		
		
		
		
		
		hauteurColInfosAbtCity = tbInfAbtCtBx['heightWrapBxCitMetInfPartSup'] + tbInfAbtCtBx['heightWrapBxCitMetInfPartInf'];
		largeurColInfosAbtCity = tbInfAbtCtBx['widthWrapBxCitMetInfPartSup'];
		hauteurDispo = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity - margeAeration10px * 2;
		hauteurDispoAcBtnMenu = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity - margeAerationPackHauteurMenuBtn - margeAerationPackHauteurMenuBtn / 2;
		largeurDisponible = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity * 2 - bigHoriSuppMarge * 2 - smallHoriSuppMarge;
		largeurDisponibleAcBtnMenu = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity * 2 - margeAerationPackLargeurMenuBtn * 2;
		
		/*// Si la modal About City est actuellement affichée...
		if($(".wrapperBoxCityMeteoInfo").css("display") == "block")
		{
			majCSSPropForVwptBased();
		}*/
		
		/*
		
		
		
		if(hauteurDispoAcBtnMenu < 0)
		{
			largeurBoxGMaps -= margeAerationPackLargeurMenuBtn ;
		}
		
		
		*/
		
		if( largeurColInfosAbtCity > largeurDisponibleAcBtnMenu || hauteurColInfosAbtCity > hauteurDispoAcBtnMenu )
		{
			// On calcule les val à mettre en place en se souciant du btn Menu
			
			//console.log("ooo if( largeurColInfosAbtCity > largeurDisponibleAcBtnMenu || hauteurColInfosAbtCity > hauteurDispoAcBtnMenu ) : true");
			
			if( largeurColInfosAbtCity > largeurDisponibleAcBtnMenu )
			{
				// Plus d'espace sur la hauteur top, pr le btn menu
			
				largeurBoxGMaps = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - bigHoriSuppMarge * 2 - smallHoriSuppMarge ;
			if(hauteurDispoAcBtnMenu < 0){ largeurBoxGMaps = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - margeAerationPackLargeurMenuBtn * 2 - smallHoriSuppMarge }
				if(largeurBoxGMaps > ( largeurColInfosAbtCity * 2 ) ) { largeurBoxGMaps = largeurColInfosAbtCity * 2 ;}
				hauteurBoxGMaps = hauteurColInfosAbtCity ;
				
				leftMargeGmapsBox = ( tbInfAbtCtBx['screenWidth'] - largeurBoxGMaps - smallHoriSuppMarge - largeurColInfosAbtCity ) / 2 ; 
				leftMargeCityBoxPartSup = tbInfAbtCtBx['screenWidth'] - leftMargeGmapsBox - largeurColInfosAbtCity ;
				//leftMargeCityBoxPartInf = inutile;
				
				topMargeGmapsBox = (tbInfAbtCtBx['screenHeight'] - margeAerationPackHauteurMenuBtn - hauteurBoxGMaps) / 2 + margeAerationPackHauteurMenuBtn;
				if(topMargeGmapsBox > margeAerationPackHauteurMenuBtn){topMargeGmapsBox-=30;}
				if(hauteurDispoAcBtnMenu < 0){ topMargeGmapsBox = (tbInfAbtCtBx['screenHeight'] - hauteurBoxGMaps) / 2 ; }
				topMargeCityBoxPartSup = topMargeGmapsBox;
				//topMargeCityBoxPartInf = inutile;
			}
			else if ( hauteurColInfosAbtCity > hauteurDispoAcBtnMenu )
			{
			
				// Plus d'espace sur la largeur right, pr le btn menu
			
				largeurBoxGMaps = tbInfAbtCtBx['screenWidth'] - margeAerationPackLargeurMenuBtn * 2 - largeurColInfosAbtCity - smallHoriSuppMarge ;
				if(largeurBoxGMaps > ( largeurColInfosAbtCity * 2 ) ) { largeurBoxGMaps = largeurColInfosAbtCity * 2 ;}
				hauteurBoxGMaps = hauteurColInfosAbtCity ;
				
				leftMargeGmapsBox = ( tbInfAbtCtBx['screenWidth'] - largeurBoxGMaps - smallHoriSuppMarge - largeurColInfosAbtCity ) / 2 ; 
				leftMargeCityBoxPartSup = tbInfAbtCtBx['screenWidth'] - leftMargeGmapsBox - largeurColInfosAbtCity ;
				//leftMargeCityBoxPartInf = inutile;
				
				topMargeGmapsBox = (tbInfAbtCtBx['screenHeight'] - hauteurBoxGMaps) / 2;
				topMargeCityBoxPartSup = topMargeGmapsBox;
				//topMargeCityBoxPartInf = inutile;
			}
		}
		else
		{
			
			// On calcule les val à mettre en place sans se soucier du btn Menu
			
			largeurBoxGMaps = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - bigHoriSuppMarge * 2 - smallHoriSuppMarge ;
			if(largeurBoxGMaps > ( largeurColInfosAbtCity * 2 ) ) { largeurBoxGMaps = largeurColInfosAbtCity * 2 ;}
			hauteurBoxGMaps = hauteurColInfosAbtCity ;
			
			leftMargeGmapsBox = ( tbInfAbtCtBx['screenWidth'] - largeurBoxGMaps - smallHoriSuppMarge - largeurColInfosAbtCity ) / 2 ; 
			leftMargeCityBoxPartSup = tbInfAbtCtBx['screenWidth'] - leftMargeGmapsBox - largeurColInfosAbtCity ;
			//leftMargeCityBoxPartInf = inutile;
			
			topMargeGmapsBox = (tbInfAbtCtBx['screenHeight'] - hauteurBoxGMaps) / 2;
			topMargeCityBoxPartSup = topMargeGmapsBox;
			//topMargeCityBoxPartInf = inutile;
		}
		
		topMargeCityBoxPartSup += parseInt($(".wrapperBoxCityMeteoInfo").outerHeight()) - parseInt($(".btnNavAboutCityBox").outerHeight());
		
		$(".GoogleMapsWrapper").css({"top": topMargeGmapsBox+"px", "left": leftMargeGmapsBox+"px", "height": hauteurBoxGMaps+"px", "width": largeurBoxGMaps+"px"});
		$(".cityMagicBoxBtn").css({"top": topMargeCityBoxPartSup+"px", "left": leftMargeCityBoxPartSup+"px"});
		
		
	
	
	
}



// 3. Fct Format modal About city box 3 - ie square basé sur le Viewport ===========================================================
// ------------------------------------------------------------------------------------------------------------------------

function majSquareVwptBasdForAbtCtyBox()
{
	
	
	var margeAerationPackHauteurMenuBtn = tbInfAbtCtBx['widthHeightMenuBtn'] + tbInfAbtCtBx['margnTopBotMenuBtn'] * 2;
	var margeAerationPackLargeurMenuBtn = tbInfAbtCtBx['widthHeightMenuBtn'] + tbInfAbtCtBx['margnLftRgtMenuBtn'] * 2;
	
	var smallHoriSuppMarge = tbInfAbtCtBx['screenWidth'] * 1.03 - tbInfAbtCtBx['screenWidth']; if(smallHoriSuppMarge > 50){smallHoriSuppMarge = 10;}
	var bigHoriSuppMarge = tbInfAbtCtBx['screenWidth'] * 1.05 - tbInfAbtCtBx['screenWidth']; if(bigHoriSuppMarge > 20){bigHoriSuppMarge = 20;}
	
	var margeAeration10px = 10;
	
	var hauteurColInfosAbtCity, largeurColInfosAbtCity, hauteurDispo, hauteurDispoAcBtnMenu, largeurDisponible, largeurDisponibleAcBtnMenu ;
	
	var largeurBoxGMaps, hauteurBoxGMaps, leftMargeGmapsBox, leftMargeCityBoxPartSup, leftMargeCityBoxPartInf, topMargeGmapsBox, topMargeCityBoxPartSup, topMargeCityBoxPartInf ;
	

		
		
		
		
		
		
		hauteurColInfosAbtCity = tbInfAbtCtBx['heightWrapBxCitMetInfPartSup'];
		largeurColInfosAbtCity = tbInfAbtCtBx['widthWrapBxCitMetInfPartSup'] + tbInfAbtCtBx['widthWrapBxCitMetInfPartInf'] + smallHoriSuppMarge;
		hauteurDispo = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity * 2 - margeAeration10px * 2 - smallHoriSuppMarge;
		hauteurDispoAcBtnMenu = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity * 2 - margeAeration10px * 2 - smallHoriSuppMarge - margeAerationPackHauteurMenuBtn - margeAerationPackHauteurMenuBtn / 2;
		largeurDisponible = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - bigHoriSuppMarge * 2;
		largeurDisponibleAcBtnMenu = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - bigHoriSuppMarge * 2 - margeAerationPackLargeurMenuBtn * 2;
		
		/*// Si la modal About City est actuellement affichée...
		if($(".wrapperBoxCityMeteoInfo").css("display") == "block")
		{
			majCSSPropForVwptBased();
		}*/
		
		
		largeurBoxGMaps = tbInfAbtCtBx['widthWrapBxCitMetInfPartSup'] + tbInfAbtCtBx['widthWrapBxCitMetInfPartInf'] + smallHoriSuppMarge;
		hauteurBoxGMaps = hauteurColInfosAbtCity ;
			
		leftMargeGmapsBox = ( tbInfAbtCtBx['screenWidth'] - largeurBoxGMaps ) / 2 ; 
		leftMargeCityBoxPartSup = leftMargeGmapsBox ;
		leftMargeCityBoxPartInf = tbInfAbtCtBx['screenWidth'] - leftMargeGmapsBox - tbInfAbtCtBx['widthWrapBxCitMetInfPartInf'] ;
			
		topMargeGmapsBox = (tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity - hauteurBoxGMaps - smallHoriSuppMarge) / 2 + hauteurColInfosAbtCity + smallHoriSuppMarge;
		topMargeCityBoxPartSup = topMargeGmapsBox - smallHoriSuppMarge - hauteurColInfosAbtCity;
		//topMargeCityBoxPartInf = inutile;
		
		
		//topMargeCityBoxPartSup += parseInt($(".wrapperBoxCityMeteoInfo").outerHeight()) - parseInt($(".btnNavAboutCityBox").outerHeight());
		
		$(".GoogleMapsWrapper").css({"top": topMargeGmapsBox+"px", "left": leftMargeGmapsBox+"px", "height": hauteurBoxGMaps+"px", "width": largeurBoxGMaps+"px"});
		$(".cityMagicBoxBtn").css({"top": topMargeCityBoxPartSup+"px", "left": leftMargeCityBoxPartSup+"px"});
		
		$(".todayCityBox").css({"top": 0, "bottom": "auto", "left": (tbInfAbtCtBx['widthWrapBxCitMetInfPartSup'] + smallHoriSuppMarge)+"px"});
		$(".tomorrowCityBox").css({"top": 0, "bottom": "auto", "left": (tbInfAbtCtBx['widthWrapBxCitMetInfPartSup'] + smallHoriSuppMarge)+"px"});
		
		
	
	
}



// 4. Fct Format modal About city box 4 - ie landscape partiel basé sur le Viewport ===========================================================
// ------------------------------------------------------------------------------------------------------------------------

function majPartialLndscpVwptBasdForAbtCtyBox()
{
	
	var margeAerationPackHauteurMenuBtn = tbInfAbtCtBx['widthHeightMenuBtn'] + tbInfAbtCtBx['margnTopBotMenuBtn'] * 2;
	var margeAerationPackLargeurMenuBtn = tbInfAbtCtBx['widthHeightMenuBtn'] + tbInfAbtCtBx['margnLftRgtMenuBtn'] * 2;
	
	var smallHoriSuppMarge = tbInfAbtCtBx['screenWidth'] * 1.03 - tbInfAbtCtBx['screenWidth']; if(smallHoriSuppMarge > 50){smallHoriSuppMarge = 10;}
	var bigHoriSuppMarge = tbInfAbtCtBx['screenWidth'] * 1.05 - tbInfAbtCtBx['screenWidth']; if(bigHoriSuppMarge > 20){bigHoriSuppMarge = 20;}
	
	var margeAeration10px = 10;
	
	var hauteurColInfosAbtCity, largeurColInfosAbtCity, hauteurDispo, hauteurDispoAcBtnMenu, largeurDisponible, largeurDisponibleAcBtnMenu ;
	
	var largeurBoxGMaps, hauteurBoxGMaps, leftMargeGmapsBox, leftMargeCityBoxPartSup, leftMargeCityBoxPartInf, topMargeGmapsBox, topMargeCityBoxPartSup, topMargeCityBoxPartInf ;
	

		
		
		
		
		
		
		hauteurColInfosAbtCity = tbInfAbtCtBx['heightWrapBxCitMetInfPartSup'];
		largeurColInfosAbtCity = tbInfAbtCtBx['widthWrapBxCitMetInfPartSup'];
		hauteurDispo = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity - margeAeration10px * 2;
		hauteurDispoAcBtnMenu = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity - margeAerationPackHauteurMenuBtn - margeAerationPackHauteurMenuBtn / 2;
		largeurDisponible = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity * 2 - bigHoriSuppMarge * 2 - smallHoriSuppMarge;
		largeurDisponibleAcBtnMenu = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity * 2 - margeAerationPackLargeurMenuBtn * 2;
		
		
		/*// Si la modal About City est actuellement affichée...
		if($(".wrapperBoxCityMeteoInfo").css("display") == "block")
		{
			majCSSPropForVwptBased();
		}*/
		
		
		if( largeurColInfosAbtCity > largeurDisponibleAcBtnMenu || hauteurColInfosAbtCity > hauteurDispoAcBtnMenu )
		{
			// On calcule les val à mettre en place en se souciant du btn Menu
			
			if( largeurColInfosAbtCity > largeurDisponibleAcBtnMenu )
			{
				// Plus d'espace sur la hauteur top, pr le btn menu
			
				largeurBoxGMaps = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - bigHoriSuppMarge * 2 - smallHoriSuppMarge ;
			if(hauteurDispoAcBtnMenu < 0){ largeurBoxGMaps = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - margeAerationPackLargeurMenuBtn * 2 - smallHoriSuppMarge }
				if(largeurBoxGMaps > ( largeurColInfosAbtCity * 2 ) ) { largeurBoxGMaps = largeurColInfosAbtCity * 2 ;}
				hauteurBoxGMaps = hauteurColInfosAbtCity ;
				
				leftMargeGmapsBox = ( tbInfAbtCtBx['screenWidth'] - largeurBoxGMaps - smallHoriSuppMarge - largeurColInfosAbtCity ) / 2 ; 
				leftMargeCityBoxPartSup = tbInfAbtCtBx['screenWidth'] - leftMargeGmapsBox - largeurColInfosAbtCity ;
				//leftMargeCityBoxPartInf = inutile;
				
				topMargeGmapsBox = (tbInfAbtCtBx['screenHeight'] - margeAerationPackHauteurMenuBtn - hauteurBoxGMaps) / 2 + margeAerationPackHauteurMenuBtn;
				if(topMargeGmapsBox > margeAerationPackHauteurMenuBtn){topMargeGmapsBox-=30;}
			if(hauteurDispoAcBtnMenu < 0){ topMargeGmapsBox = (tbInfAbtCtBx['screenHeight'] - hauteurBoxGMaps) / 2 ; }
				topMargeCityBoxPartSup = topMargeGmapsBox;
				//topMargeCityBoxPartInf = inutile;
				
				
				
			}
			else if ( hauteurColInfosAbtCity > hauteurDispoAcBtnMenu )
			{
			
				// Plus d'espace sur la largeur right, pr le btn menu
			
				largeurBoxGMaps = tbInfAbtCtBx['screenWidth'] - margeAerationPackLargeurMenuBtn * 2 - largeurColInfosAbtCity - smallHoriSuppMarge ;
				if(largeurBoxGMaps > ( largeurColInfosAbtCity * 2 ) ) { largeurBoxGMaps = largeurColInfosAbtCity * 2 ;}
				hauteurBoxGMaps = hauteurColInfosAbtCity ;
				
				leftMargeGmapsBox = ( tbInfAbtCtBx['screenWidth'] - largeurBoxGMaps - smallHoriSuppMarge - largeurColInfosAbtCity ) / 2 ; 
				leftMargeCityBoxPartSup = tbInfAbtCtBx['screenWidth'] - leftMargeGmapsBox - largeurColInfosAbtCity ;
				//leftMargeCityBoxPartInf = inutile;
				
				topMargeGmapsBox = (tbInfAbtCtBx['screenHeight'] - hauteurBoxGMaps) / 2;
				topMargeCityBoxPartSup = topMargeGmapsBox;
				//topMargeCityBoxPartInf = inutile;
			}
		}
		else
		{
			
			// On calcule les val à mettre en place sans se soucier du btn Menu
			
			largeurBoxGMaps = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - bigHoriSuppMarge * 2 - smallHoriSuppMarge ;
			if(largeurBoxGMaps > ( largeurColInfosAbtCity * 2 ) ) { largeurBoxGMaps = largeurColInfosAbtCity * 2 ;}
			hauteurBoxGMaps = hauteurColInfosAbtCity ;
			
			leftMargeGmapsBox = ( tbInfAbtCtBx['screenWidth'] - largeurBoxGMaps - smallHoriSuppMarge - largeurColInfosAbtCity ) / 2 ; 
			leftMargeCityBoxPartSup = tbInfAbtCtBx['screenWidth'] - leftMargeGmapsBox - largeurColInfosAbtCity ;
			//leftMargeCityBoxPartInf = inutile;
			
			topMargeGmapsBox = (tbInfAbtCtBx['screenHeight'] - hauteurBoxGMaps) / 2;
			topMargeCityBoxPartSup = topMargeGmapsBox;
			//topMargeCityBoxPartInf = inutile;
		}
		
		topMargeCityBoxPartSup += parseInt($(".wrapperBoxCityMeteoInfo").outerHeight()) - parseInt($(".btnNavAboutCityBox").outerHeight());
		
		$(".GoogleMapsWrapper").css({"top": topMargeGmapsBox+"px", "left": leftMargeGmapsBox+"px", "height": hauteurBoxGMaps+"px", "width": largeurBoxGMaps+"px"});
		$(".cityMagicBoxBtn").css({"top": topMargeCityBoxPartSup+"px", "left": leftMargeCityBoxPartSup+"px"});
		
		$(".todayCityBox").css({"visibility" : "hidden"});
		$(".tomorrowCityBox").css({"visibility" : "hidden"});
		
		
	
}



// 5. Fct Format modal About city box 5 - ie portrait partiel basé sur le Viewport ===========================================================
// ------------------------------------------------------------------------------------------------------------------------

function majPartialPortraitVwptBasdForAbtCtyBox()
{
	
	var margeAerationPackHauteurMenuBtn = tbInfAbtCtBx['widthHeightMenuBtn'] + tbInfAbtCtBx['margnTopBotMenuBtn'] * 2;
	var margeAerationPackLargeurMenuBtn = tbInfAbtCtBx['widthHeightMenuBtn'] + tbInfAbtCtBx['margnLftRgtMenuBtn'] * 2;
	
	var smallHoriSuppMarge = tbInfAbtCtBx['screenWidth'] * 1.03 - tbInfAbtCtBx['screenWidth']; if(smallHoriSuppMarge > 50){smallHoriSuppMarge = 10;}
	var bigHoriSuppMarge = tbInfAbtCtBx['screenWidth'] * 1.05 - tbInfAbtCtBx['screenWidth']; if(bigHoriSuppMarge > 20){bigHoriSuppMarge = 20;}
	
	var margeAeration10px = 10;
	
	var hauteurColInfosAbtCity, largeurColInfosAbtCity, hauteurDispo, hauteurDispoAcBtnMenu, largeurDisponible, largeurDisponibleAcBtnMenu ;
	
	var largeurBoxGMaps, hauteurBoxGMaps, leftMargeGmapsBox, leftMargeCityBoxPartSup, leftMargeCityBoxPartInf, topMargeGmapsBox, topMargeCityBoxPartSup, topMargeCityBoxPartInf ;
	

		
		
		
		
		
		
		hauteurColInfosAbtCity = tbInfAbtCtBx['heightWrapBxCitMetInfPartSup'];
		largeurColInfosAbtCity = tbInfAbtCtBx['widthWrapBxCitMetInfPartSup'];
		hauteurDispo = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity * 2 - margeAeration10px * 2 - smallHoriSuppMarge;
		hauteurDispoAcBtnMenu = tbInfAbtCtBx['screenHeight'] - hauteurColInfosAbtCity * 2 - margeAeration10px * 2 - smallHoriSuppMarge - margeAerationPackHauteurMenuBtn - margeAerationPackHauteurMenuBtn / 2;
		largeurDisponible = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - bigHoriSuppMarge * 2;
		largeurDisponibleAcBtnMenu = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - margeAerationPackLargeurMenuBtn * 2;
		
		
		
		// En soit ce format est uniquement destiné au version mobile (version sous laquelle le btn menu est bloqué en haut de la page)
		// On peut donc s'affranchir de la prise en compte du btn Menu !
		
		// tbInfAbtCtBx['screenWidth']
		
		var specialMarge = tbInfAbtCtBx['screenHeight'] * 1.05 - tbInfAbtCtBx['screenHeight'];
		
		//largeurBoxGMaps = tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity - bigHoriSuppMarge * 2 - smallHoriSuppMarge ;
		largeurBoxGMaps = tbInfAbtCtBx['screenWidth'] ;
		hauteurBoxGMaps = tbInfAbtCtBx['screenHeight'] - specialMarge - margeAerationPackHauteurMenuBtn - hauteurColInfosAbtCity ;
			
		//leftMargeGmapsBox = ( tbInfAbtCtBx['screenWidth'] - largeurBoxGMaps - smallHoriSuppMarge - largeurColInfosAbtCity ) / 2 ; 
		leftMargeGmapsBox = 0 ; 
		leftMargeCityBoxPartSup = (tbInfAbtCtBx['screenWidth'] - largeurColInfosAbtCity) / 2 ;
			
		topMargeGmapsBox = specialMarge + margeAerationPackHauteurMenuBtn + hauteurColInfosAbtCity ;
		topMargeCityBoxPartSup = margeAerationPackHauteurMenuBtn;
		//topMargeCityBoxPartInf = inutile;
		
		
		
		
		
		
		
		
		
		
		topMargeCityBoxPartSup += parseInt($(".wrapperBoxCityMeteoInfo").outerHeight()) - parseInt($(".btnNavAboutCityBox").outerHeight());
		
		$(".GoogleMapsWrapper").css({"top": topMargeGmapsBox+"px", "left": leftMargeGmapsBox+"px", "height": hauteurBoxGMaps+"px", "width": largeurBoxGMaps+"px"});
		$(".cityMagicBoxBtn").css({"top": topMargeCityBoxPartSup+"px", "left": leftMargeCityBoxPartSup+"px"});
		
		$(".todayCityBox").css({"visibility" : "hidden"});
		$(".tomorrowCityBox").css({"visibility" : "hidden"});
		
		
	
}


function majCSSPropForCnttBased()
{
	$(".cityMagicBoxBtn").css("position","relative");
	$(".cityMagicBoxBtn").css("left","auto");
	$(".cityMagicBoxBtn").css("top","auto");
}
function majCSSPropForVwptBased()
{
	$(".cityMagicBoxBtn").css("position","fixed");
}


// Dans le cas où il y aurait eu un format "square" avant
function resetTodayCityBoxProp()
{
	$(".todayCityBox").css({"top": "auto", "bottom": "-200px", "left": "auto", "visibility" : "visible"});
	$(".tomorrowCityBox").css({"top": "auto", "bottom": "-150px", "left": "auto", "visibility" : "visible"});
}