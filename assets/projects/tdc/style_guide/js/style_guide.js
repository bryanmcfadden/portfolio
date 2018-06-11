$(document).ready(function() {
		//Start here
		var checkElement = $('a[href="style_guide"]').next();
		$('a[href="style_guide"]').closest('li').addClass('active');
		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
				$('#side_menu ul ul:visible').slideUp('normal');
				checkElement.slideDown('normal');
				
		}
		//End here
		$('#side_menu > ul > li:has(ul)').addClass("has-sub");
		$('#side_menu > ul > li > a').click(function() {
			var checkElement = $(this).next();
			$('#side_menu li').removeClass('active');
			$(this).closest('li').addClass('active');	
			if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
				$(this).closest('li').removeClass('active');
				checkElement.slideUp('normal');
			}
			if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
				$('#side_menu ul ul:visible').slideUp('normal');
				checkElement.slideDown('normal');
			}
			if (checkElement.is('ul')) {
				return false;
			} else {
				return true;	
			}
		});
	});
			
	function scrollTo(hash) {
		location.hash = "#" + hash;
	}
	
	