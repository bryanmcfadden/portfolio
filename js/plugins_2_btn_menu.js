
// ===============================================================
// ---------------------------------------------------------------      BURGER BTN MAIN CONTENT
// ===============================================================

var timeOutBtnBurger;
function majStyleBtnBurger(scrollTopValue)
{
	// Annulation de l'anim fondu du background-color, initialement définie dans les CSS, pour un effet plus franc du chgt de style du btn
	$(".menuBtn").removeClass("transitionOk");
 alert('exceuted');
	// Test de la valeur scrollée pour analyse du dépassement de la ligne de flotaison du bloc d'intro
	// Maj des styles du btn burger pour modifier le contraste et garantir la lisibilité du btn

	//var vTempVPHeight = $(window).height() - 70; // - 80
	var vTempVPHeight = $(".sctMainCntt.sctIntroduction").height() - 70; // - 80

	if(scrollTopValue<vTempVPHeight)
	{
		/* before

		if($(".menuBtn").hasClass("lightMenuBtn"))
		{
			$(".menuBtn").removeClass("lightMenuBtn");
			$(".menuBtn").addClass("darkMenuBtn");
		}

		*/

		/*after :*/
			$(".menuBtn").removeClass("lightMenuBtn");
			$(".menuBtn").addClass("darkMenuBtn");

	}
	else
	{

		/* before

		if($(".menuBtn").hasClass("darkMenuBtn"))
		{
			$(".menuBtn").removeClass("darkMenuBtn");
			$(".menuBtn").addClass("lightMenuBtn");
		}
		*/


		/*after :*/
		$(".menuBtn").removeClass("darkMenuBtn");
		$(".menuBtn").addClass("lightMenuBtn");
	}

	//$(".debug").html("<br>"+$(".menuBtn").attr("class")+$(".debug").html()+"<br><br>");

	clearTimeout(timeOutBtnBurger);
	// Remise de l'anim fondu du background-color, pour anim UX au survol du btn
	timeOutBtnBurger = setTimeout(function(){$(".menuBtn").addClass("transitionOk");},100);
}

// -------------------      end of BURGER BTN MAIN CONTENT


// ===============================================================
// ---------------------------------------------------------------      BURGER BTN WORK DETAILS MODAL
// ===============================================================

//var timeOutBtnBurger;
// déjà déclaré plus haut
var previousMenuBtnStyle;
function majStyleBtnBurgerWorkDetailsModal(scrollTopValue)
{
	// Annulation de l'anim fondu du background-color, initialement définie dans les CSS, pour un effet plus franc du chgt de style du btn
	$(".menuBtn").removeClass("transitionOk");

	// Test de la valeur scrollée pour analyse du dépassement de la ligne de flotaison du bloc d'intro
	// Maj des styles du btn burger pour modifier le contraste et garantir la lisibilité du btn

	//As the scrollbar is moved, the position is sent to this function to change the color of the menu button
	//var vTempVPHeight = $(window).height() - 70; // - 80
	var vTempVPHeight = $(".sctWorkCntt.sctWorkMainInfo").height() + parseInt($(".sctWorkCntt.sctWorkMainInfo").css("padding-top")) + parseInt($(".sctWorkCntt.sctWorkMainInfo").css("padding-bottom")) - 74; // - 80
	if(scrollTopValue<vTempVPHeight)
	{
		if($(".menuBtn").hasClass("lightMenuBtn"))
		{
			$(".menuBtn").removeClass("lightMenuBtn");
			$(".menuBtn").addClass("darkMenuBtn");
		}
	}
	else
	{
		if($(".menuBtn").hasClass("darkMenuBtn"))
		{
			$(".menuBtn").removeClass("darkMenuBtn");
			$(".menuBtn").addClass("lightMenuBtn");
			$(".menuBtn").removeClass("modalMenuBtn");
		}
	}

	//$(".debug").html("<br>"+$(".menuBtn").attr("class")+$(".debug").html()+"<br><br>");

	clearTimeout(timeOutBtnBurger);
	// Remise de l'anim fondu du background-color, pour anim UX au survol du btn
	timeOutBtnBurger = setTimeout(function(){$(".menuBtn").addClass("transitionOk");},100);
}

// -------------------      end of BURGER BTN WORK DETAILS MODAL
