                   function processLightboxNode(n) {
			            if (n.firstChild != null) {
			               processLightboxNode(n.firstChild);
			            }
			            if (n.nextSibling != null) {
			               processLightboxNode(n.nextSibling);
			            }
			            if (!(/#text/i.test(n.nodeName))) {
			               if (n.hasAttributes) {
			                  if (n.hasAttribute("data-id")) {
			                     n.id = n.getAttribute("data-id");
			                  }
			                  if (n.hasAttribute("data-event") && n.hasAttribute("data-eventhandler")) {
			                     if (typeof window[n.getAttribute("data-eventhandler")] === "function") {
			                        n.addEventListener(n.getAttribute("data-event"), window[n.getAttribute("data-eventhandler")], false);
			                     }
			                  }
			               }
			            }
			         }

			         function lightboxShow(width, height, divSource) {
			            document.getElementById("divLightboxContent").style.width = width + "px";
			            document.getElementById("divLightboxContent").style.height = height + "px";
			            document.getElementById("divLightboxContent").innerHTML = document.getElementById(divSource).innerHTML;

			            processLightboxNode(document.getElementById("divLightboxContent"));

			            var windowHeight = window.innerHeight;
			            var documentHeight = document.body.clientHeight;
			            var lightboxHeight = parseInt(document.defaultView.getComputedStyle(document.getElementById("divLightboxContent"), null).getPropertyValue("height").replace("px",""));

			            if (windowHeight > documentHeight) {
			               document.getElementById("divLightbox").style.height = windowHeight + "px";
			            }

			            var lightboxTop = Math.floor(windowHeight / 2 - lightboxHeight / 2);
			            document.getElementById("divLightboxContent").style.top = lightboxTop + "px";

			            document.getElementById("divLightbox").style.display = "block";
			            document.getElementById("divLightboxContent").style.display = "block";
			         }

			         function lightboxHide() {
			            document.getElementById("divLightboxContent").style.display = "none";
			            document.getElementById("divLightbox").style.display = "none";
			         }

			         function clickInstallButtonOK() {
			            lightboxHide();
			            // redirect to xpi file
			            window.location = "/sdcGUEThemeStatic/themes/Portal8.0/nls/ie_tab_v2_mod.xpi"
			         }

			         function clickUpdateButtonOK() {
			            lightboxHide();
			            // redirect to xpi file
			            window.location = "/sdcGUEThemeStatic/themes/Portal8.0/nls/ie_tab_v2_mod.xpi"
			         }

			         var extensionVersionServer = -1;
			         var extensionVersionLocal = -1;

			         function windowOnLoad() {
			        	   var browserName = "Unknown";
			               var browserVersion = "Unknown";

			               /*@cc_on
			                  browserName = "IE";
			                  if (@_jscript_version > 5.8) {
			                     browserVersion = @_jscript_version;
			                  } else if (@_jscript_version == 5.8) {
			                     browserVersion = 8;
			                  } else if (@_jscript_version == 5.7 && navigator.userAgent.toLowerCase().indexOf("msie 7") != -1) {
			                     browserVersion = 7;
			                  } else if (@_jscript_version == 5.6 || (@_jscript_version == 5.7 && navigator.userAgent.toLowerCase().indexOf("msie 6") != -1)) {
			                     browserVersion = 6;
			                  } else {
			                     browserVersion = -1;
			                  }
			               @*/

			               if (browserName == "Unknown") {
			                  if (typeof InstallTrigger !== "undefined") {
			                     browserName = "Firefox";
			                  }
			               }

			              if( browserName == "Firefox")
			            	  {
			            	    invokelightbox();
			            	  }
			         }

			         function extensionCustomEventHandler(evt) {
			            extensionVersionLocal = parseInt(evt.target.getAttribute("data-version"));

			            //console.log("local extension version is " + extensionVersionLocal);
			            //console.log("server extension version is " + extensionVersionServer);

			            if (extensionVersionServer > extensionVersionLocal) {
			               // need to update extension
			               lightboxShow(350, 125, "divLightboxUpdate");
			            }
			         }
			         
			         function invokelightbox() {
			        	 //console.log("checking for extension");

				            var extension_installed_img = new Image();

				            extension_installed_img.onerror = function() {
				               // need to install extension
				               lightboxShow(350, 145, "divLightboxInstall");
				            };

				            extension_installed_img.src = "chrome://ietab2/skin/ietab-engine-fx.png";

				            // note - extension is present if we get here - no error thrown

				            //console.log("checking server version");

				            var http_request = new XMLHttpRequest();
				            http_request.open("GET", "/sdcGUEThemeStatic/themes/Portal8.0/nls/version.txt", false);

				            http_request.send(null);

				            if (http_request.status == 200) {
				               extensionVersionServer = parseInt(http_request.responseText);
				            } else {
				               throw new Error("Unable to retrieve server version of extension");
				            }

				            //console.log("checking local version");

				            var newDiv = document.createElement("div");

				            newDiv.style.display = "none";

				            newDiv.id = "divExtensionComm";

				            document.body.appendChild(newDiv);

				            var customEvent = document.createEvent("CustomEvent");
				            customEvent.initCustomEvent("PageCustomEvent", true, false, {});

				            newDiv.dispatchEvent(customEvent);

				            // note - rest of version checking handled in function extensionCustomEventHandler
			         }
			         

			        