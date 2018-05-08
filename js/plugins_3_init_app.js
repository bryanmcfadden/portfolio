	
	function returnFormatDevice(deviceWidth, deviceHeight)
	{
		if(deviceWidth>=deviceHeight)
		{
			return "landscape";
		}
		else
		{
			return "portrait";
		}
	}

	// Si device = smartphone's true returned
	function isDeviceSmartphne()
	{
		formatDevice = returnFormatDevice($(window).width(), $(window).height());
		var docWidth = $(window).width();
		if ( (formatDevice == "portrait" && docWidth <= 600 ) || ( formatDevice == "landscape" && docWidth <= 800 ) )
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	// Si device = smartphone's resol => btn menu absolute (not fixed)
	function majPosiMenuBtnAbsoluteOrFixed()
	{
		formatDevice = returnFormatDevice($(window).width(), $(window).height());
		if ( isDeviceSmartphne() )
		{
			$(".menuBtn").css("position","absolute");
		}
		else
		{
			$(".menuBtn").css("position","fixed");
		}
	}
	
	
	
	// Cette fonction est enclenchée si le site mets trop de temps à se charger lors de l'étape de loading visuel.
	// L'utilisateur voit un bandeau s'afficher en bas de page, l'invitant à recharger la page ou à se rendre sur steady.aldricrivat.fr - la version simplifiée du site
	function showMshOptimSite()
	{
		if(!msgOptimSitePrinted)
		{
			msgOptimSitePrinted=true;
			
			/* V1 :
			var msgToPrint = '<p id="preloadingErrMsgBox" style="position:fixed; z-index:9998; background-color:rgba(0,0,0,0.8); color:#fff; width:90%; bottom:50px; left:5%; border-radius:10px; text-align:center; padding:20px; font-size:.8em;">';
			msgToPrint += 'Hm... Some difficulties to load this website?&nbsp; :(<br>Go to the simplified version at <a style="color:#fff; text-decoration:underline;" href="steady.aldricrivat.fr">steady.aldricrivat.fr</a> &nbsp;:)';
			msgToPrint += '<button type="button" style="position:absolute; top:-10px; right:-10px; height:40px; line-height:40px; text-align:center; border:none; border-radius:20px; display:inline-block; width:40px; background-color:#000;" onclick="$(\'#preloadingErrMsgBox\').remove();">x</button>';
			msgToPrint += '<br><br><small style="font-size:.8em; opacity:.7; padding-top:20px;">You see this message because the website is longer to be loaded than expected. Such behavior may be due to slow internet connection or old internet browser\'s use.</small>';
			msgToPrint += '</p>';*/
			
			
			var msgToPrint = '<div id="preloadingErrMsgBox">';
			msgToPrint += 'Hm... The website is taking longer to load than expected.';
			msgToPrint += '<button type="button" style="position:absolute; top:-10px; right:-10px; height:40px; line-height:40px; text-align:center; border:none; border-radius:20px; display:inline-block; width:40px; background-color:#000;" onclick="$(\'#preloadingErrMsgBox\').remove();">x</button>';
			msgToPrint += '<br><small style="font-size:1em; opacity:.7; padding-top:20px;">Such behavior may be due to slow internet connection or an old internet browser.</small>';
			msgToPrint += '<br><br>';
			msgToPrint += 'To improve your experience, you can try to';
			/*msgToPrint += '<ul style="list-style:circle;">';
			msgToPrint += '<li> <a href=\'http://aldricrivat.com\'>reload this page</a></li>';
			msgToPrint += '<li> load this website with a better internet connection</li>';
			msgToPrint += '<li> <a href=\'https://browser-update.org/en/update.html\'>update your browser</a> (or <a href=\'https://browsehappy.com/?locale=en\'>download a more recent browser</a>)</li>';
			msgToPrint += '</ul>';*/
			msgToPrint += ' <span class="insecable"><a href=\'http://aldricrivat.com\'>reload this page</a>,</span>';
			msgToPrint += ' <span class="insecable">load this website with a better internet connection,</span>';
			msgToPrint += ' <span class="insecable"><a href=\'https://browser-update.org/en/update.html\'>update your browser</a></span> <span class="insecable">or <a href=\'https://browsehappy.com/?locale=en\'>download a more recent browser</a>.</span></li>';
			msgToPrint += '</ul>';
			msgToPrint += '</div>';
			
							
			$('body').append(msgToPrint);
		}
	}

	// ---------------------------------------------------------- Fonctions chargement des fichiers du site et fonctionnalité de loading
	
	// Avec indexProjectToTreat l'index du projet dont il faut charger la 1re img / index incrémenter à l'intérieur de la fonction
	function preloadFirstIllustOfProject(indexProjectToTreat)
	{
		var nbIllustToPreload = tabDataWorks.length;
			
			var imgToPreload = $("<img class='preloadBoxBckgd' src='"+tabDataWorks[indexProjectToTreat][7][0][0]+"' />");
			imgToPreload.css({"position":"absolute", "visibility":"hidden", "height":0, "display":"initial"});
				
			$('body').append(imgToPreload);
				
			imgToPreload.on('load', function()
			{
				//console.log(tabDataWorks[indexProjectToTreat][7][0][0]+" chargée !");
					
				// Suppression du bloc de DOM preloading
				$(".preloadBoxBckgd").remove();
				
				if(indexProjectToTreat >= (nbIllustToPreload-1))
				{
					//console.log("Toutes les 1re illustrations ont été chargées.");
				}
				else
				{
					indexProjectToTreat++;
					preloadFirstIllustOfProject(indexProjectToTreat);
				}
			});
	}
	
	function preloadTabImgs()
		{
			var nbImgToPreload = tabImgToPreload.length;
			
			var imgToPreload = $("<img class='preloadBoxBckgd' src='"+tabImgToPreload[indexImgToPreLoad][0]+"' />");
			imgToPreload.css({"position":"absolute", "visibility":"hidden", "height":0, "display":"initial"});
				
			$('body').append(imgToPreload);
				
			imgToPreload.on('load', function()
			{
				//console.log(tabImgToPreload[indexImgToPreLoad]+" chargée !");
					
				// Suppression du bloc de DOM preloading
				$(".preloadBoxBckgd").remove();
				
				tabImgToPreload[indexImgToPreLoad][1]=true;
				
				if(indexImgToPreLoad >= (nbImgToPreload-1))
				{
					//console.log("Toutes les images ont été chargées. On passe à la suite : initPart2() !");
					initAppOpeningNext();
				}
				else
				{
					iterationImgToPreloadError=0;
					indexImgToPreLoad++;
					preloadTabImgs();
				}	
			});
			
			imgToPreload.on('error', function()
			{
				//console.log(tabImgToPreload[indexImgToPreLoad]+" a recontré une erreur lors de son chargement... Nouvelle tentative (si permise) !");
					
				// Suppression du bloc de DOM preloading
				$(".preloadBoxBckgd").remove();
				
				// Si l'image a eu 3 tentatives (ou plus) de chargement en vain, alors on passe aux autres...
				if(iterationImgToPreloadError>=3)
				{
					//console.log("Erreur de chargement de l'image "+tabImgToPreload[indexImgToPreLoad][0]+". Si votre visualisation du site en est altérée, accédez à la version simplifiée à l'adresse min.adlricrivat.com");
					
					// Si on arrive au bout des img à preloader...
					if(indexImgToPreLoad >= (nbImgToPreload-1))
					{
						//console.log("Fin du preload des imgs. une ou plusieurs images n'ont pu être téléchargées... On passe à la suite : initPart2() !");
						initAppOpeningNext();
					}
					else
					{
						iterationImgToPreloadError=0;
						indexImgToPreLoad++;
						preloadTabImgs();
					}
				}
				else
				{
					iterationImgToPreloadError++;
				
					preloadTabImgs();
				}
			});
			
		}
		
		function initAppOpeningNext()
		{
			$(".sctMainCntt.sctIntroduction .bckgdBox, .sctMainCntt.sctFooter .bckgdBox").css("background-image", "url('"+tabImgToPreload[0][0]+"')");
			
			if(!isDeviceSmartphone)
			{
				$(".mainMenuBox .bckgdBox").css("background-image", "url('"+tabImgToPreload[9][0]+"')");
				$(".sctInspiration .bckgdBox.bckgdInspi1").css("background-image", "url('"+tabImgToPreload[1][0]+"')");
			}
			else
			{
				$(".mainMenuBox .bckgdBox").addClass("darkGradient");
				$(".sctInspiration .bckgdBox.bckgdInspi1").css("background-image", "url('"+tabImgToPreload[1][0]+"')");
			}
			
			
			$(".mainContentBox").css("display", "block");
			$(".rootBox > .mainContentBox").css("opacity","1");
			
			$(".loadedBarPostDocReady").addClass("completeAt100");
			
			$(".loadedBarPostDocReady").one(transitionEvent,
				function(event)
				{
					// Annulation de l'affichage retardé du message en cas de chargement trop long du site et de redirection vers steady version
					clearTimeout(timerMsgOptimSite);
					if($('#preloadingErrMsgBox'))
					{
						$('#preloadingErrMsgBox').remove();
					}
					
					$("body").css("background-color","#111");
					
					$(".loaderBox").css("opacity","0");
					$(".loaderBox").css("transform","scale(.75)");
					$(".loaderBox").one(transitionEvent,
						function(event)
						{  
							setTimeout(function()
							{
								$(".loaderBox").remove();
								// 2. [...] de l'initialisation de la scrollbar
											initScrollBar(); // JS FILE :: plugins.js
								$(".sctMainCntt.sctIntroduction").removeClass("hidden");
								$(".sctMainCntt.sctIntroduction").one(transitionEvent,
									function(event) {
											
											
											// BLOC MAIN CONTENT PRÊT !
											// Lancement [...]
											
											// Enclenche un script tiers qui ajoute une classe .can-touch à <html> si le device est tactile
											// Il va encore plus loin : si user sur device hybride utilise souris ET tactile, le script gère en temps réel cette classe .can-touch
											manageTouchDevices();
											
											// Si device = smartphone's resol => btn menu absolute (not fixed), else menu fixed
											majPosiMenuBtnAbsoluteOrFixed();
											
											// Définition initiale du format de la page (paysage || portrait) / maj à chaque resize de la page
											formatDevice = returnFormatDevice($(window).width(), $(window).height());
											
											// 1. [...] des animations d'affichage du contenu du bloc d'introduction
											// ...
											runIntroAnim();
											
											// 2. [...] de l'initialisation de la scrollbar
											//initScrollBar(); // JS FILE :: plugins.js
											
											$("#mainTop").focus(); // bidouille to work nav au keybd. sans ça, faut cliquer ds le doc avant de pouvoir nav ac keyboard (raison : no idea)
											
											// 3. [...] du remplissage de la mosaique de miniatures des projets du portfolio
											fillWorksThumbnails();
											
											// 3. [...] de l'initialisation des Google maps (Bordeaux popup)
											// ...
											loadGoogleMaps();
											//console.log("loadGoogleMaps()");
											//majPosiModalComponentsAbtCity();
											
											// 4. [...] de l'init de la modal workDetails
											// majWorkDetailsModalFilling(); // remplit (sans afficher) la modal des détails d'un projet (projet 1 à l'init)
											//majSlider(0); // maj le slider de la modal avec la 1re illust dispo
											
											// 5. [...] de preload de chaque 1re illust de chaque projet
											preloadFirstIllustOfProject(0);
											
											// STORY TELLING
											if(storyTellingActivated)
											{
												console.log("Hey! No, no, no, no! What are you doing here?!");
												console.log("It's private stuff! >:O");
												console.log("...");
												console.log("Well... That said, you're looking in a console... A (wo)man of culture as well I see >:)");
												console.log("Please, be my guest on this humble personal website.");
												console.log("And stay as long as you want in this console, that I've tryed to make as comfortable as I can for you :)");
												console.log("");
												console.log("I hope you will enjoy your visit. I'm not far away. But if you need anything, just ask me: heybuddy@aldricrivat.com.");
												console.log("");
												//setTimeout(function(){console.log("xxxx");},1000);
											}											
										});
							}, 1000);
					  	});
				});
		}
	
	function initAppOpening()
	{
		// Si la progress bar n'a pas atteint son emplacement (== animation d'affichage de la prog bar en cours), on attend avant de relancer le test
		if(parseInt($(".progressBarSubBox").css("top"))!=0)
		{
			setTimeout(function(){initAppOpening()},500);
		}
		// Sinon, la prog bar est en place et on peut la maj à 80% et lancer le chargement de l'image de fond
		else
		{
			$(".loadedBarPostDocReady").addClass("completeAt80");
			
			$(".rootBox > .bckdImgBox").css("display", "block");
		
			var tabImgToPreloadMobile = new Array(
				new Array('./img/work_station_bckgd_small.jpg', false),
				
				/*new Array(tabQuotes[0][3], false), // bckgd-img initial (allégé) du bloc inspiration*/
				new Array('./img/work_station_bckgd_small.jpg', false), // bidouille
				
				new Array(tabDataWorks[0][10], false),
				new Array(tabDataWorks[1][10], false),
				new Array(tabDataWorks[2][10], false),
				new Array(tabDataWorks[3][10], false),
				new Array(tabDataWorks[4][10], false),
				new Array(tabDataWorks[5][10], false)
				
				//new Array('./img/bckd_menu_blur.jpg', false)
				);
			
			var tabImgToPreloadDesktop = new Array(
				new Array('./img/work_station_bckgd_big.jpg', false),
				
				/*new Array(tabQuotes[0][2], false), // bckgd-img initial du bloc inspiration
				new Array(tabQuotes[1][2], false), // bckgd-img de la 2e citation - logique de preload d'une img en avance à chque refrsh de citation*/
				new Array('./img/work_station_bckgd_big.jpg', false), // bidouille
				new Array('./img/work_station_bckgd_big.jpg', false), // bidouille
				
				new Array(tabDataWorks[0][10], false),
				new Array(tabDataWorks[1][10], false),
				new Array(tabDataWorks[2][10], false),
				new Array(tabDataWorks[3][10], false),
				new Array(tabDataWorks[4][10], false),
				new Array(tabDataWorks[5][10], false),
				
				new Array('./img/bckd_menu_blur.jpg', false)
				);
			
			if(parseInt($(document).width()) < mobileMaxWidth)
			{
				isDeviceMobile=true;
			}
			else
			{
				isDeviceMobile=false;
			}
			
			// Différente img de bckgd à utiliser selon device = phone ou desktop/tablette ! (cf probleme affichage big img ckgd cover sous iPhone + optim temps de chgt sous mobile...
			if(isDeviceSmartphne())
			{
				isDeviceSmartphone = true;
				tabImgToPreload = tabImgToPreloadMobile;
			}
			else
			{
				isDeviceSmartphone = false;
				tabImgToPreload = tabImgToPreloadDesktop;
			}
			
			
			// Preload toutes les img à précharger (utilise var tabImgToPreload, remplie plus haut) puis poursuit l'initialisation de l'app.
			preloadTabImgs();
		}
	}
	
	
	function fillWorksThumbnails()
	{
		var newHTMLThumbnailCode = "";
		
		var nbWorksToDisplay = tabDataWorks.length;
		
		for(var i = 0 ; i < nbWorksToDisplay; i++)
		{
			var specialClass = "";
			
			if(i == 0){ specialClass = " leftTopCorner"; }
			else if(i == 2){ specialClass = " rightTopCorner"; }
			else if(i == 3 || i == 6){ specialClass = " leftBotCorner"; }
			else if(i == 5 || i == 8){ specialClass = " rightBotCorner"; }
			
			if((i+1) % 3 == 0){ specialClass += " lineEnd"; }
			
			if(i > 5){ specialClass += " hiddenWork hidden";}
			
			newHTMLThumbnailCode +=  '<li class="btnShowWorkDeatils openWorkDetails'+specialClass+'">';
			newHTMLThumbnailCode += '<span class="bckgdWorkBox" style="background-image:url(\''+tabDataWorks[i][10]+'\');"></span>';
			newHTMLThumbnailCode += '<span class="wrapperInfoSumUpWork">';
			newHTMLThumbnailCode += '<span class="infoSumUpWork">';
			newHTMLThumbnailCode += '<span class="workTitle">'+tabDataWorks[i][0]+'</span><br>';
			newHTMLThumbnailCode += '<span class="infoCompWork"><span class="brandInfo">'+tabDataWorks[i][1]+'</span> / <span class="appTypeInfo">'+tabDataWorks[i][2]+'</span></span><br>';
			newHTMLThumbnailCode += '<em class="skillFields">'+tabDataWorks[i][3]+'</em>';
			newHTMLThumbnailCode += '</span>';
			newHTMLThumbnailCode += '</span>';
			newHTMLThumbnailCode += '</li>';
		}
		
		$(".workThumbsGallery").html(newHTMLThumbnailCode);
		
		if(nbWorksToDisplay > 6)
		{
			$(".goldBtn.moreWorksCntt").css("display","inline-block");
		}
	}