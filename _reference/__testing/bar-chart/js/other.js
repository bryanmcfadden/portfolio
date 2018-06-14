/*
* hoverFlow - A Solution to Animation Queue Buildup in jQuery
* Version 1.00
*
* Copyright (c) 2009 Ralf Stoltze, http://www.2meter3.de/code/hoverFlow/
*/
(function( $ ){

	$.fn.hoverFlow = function(type, prop, speed, easing, callback) {
		// only allow hover events
		if ($.inArray(type, ['mouseover', 'mouseenter', 'mouseout', 'mouseleave']) == -1) {
			return this;
		}

		// build animation options object from arguments
		// based on internal speed function from jQuery core
		var opt = typeof speed === 'object' ? speed : {
			complete: callback || !callback && easing || $.isFunction(speed) && speed,
			duration: speed,
			easing: callback && easing || easing && !$.isFunction(easing) && easing
		};

		// run immediately
		opt.queue = false;

		// wrap original callback and add dequeue
		var origCallback = opt.complete;
		opt.complete = function() {
			// execute next function in queue
			$(this).dequeue();
			// execute original callback
			if ($.isFunction(origCallback)) {
				origCallback.call(this);
			}
		};

		// keep the chain intact
		return this.each(function() {
			var $this = $(this);

			// set flag when mouse is over element
			if (type == 'mouseover' || type == 'mouseenter') {
				$this.data('jQuery.hoverFlow', true);
			} else {
				$this.removeData('jQuery.hoverFlow');
			}

			// enqueue function
			$this.queue(function() {
				// check mouse position at runtime
				var condition = (type == 'mouseover' || type == 'mouseenter') ?
					// read: true if mouse is over element
					$this.data('jQuery.hoverFlow') !== undefined :
					// read: true if mouse is _not_ over element
					$this.data('jQuery.hoverFlow') === undefined;

				// only execute animation if condition is met, which is:
				// - only run mouseover animation if mouse _is_ currently over the element
				// - only run mouseout animation if the mouse is currently _not_ over the element
				if(condition) {
					$this.animate(prop, opt);
				// else, clear queue, since there's nothing more to do
				} else {
					$this.queue([]);
				}
			});

		});
	};

})( jQuery );


/*
* jPreLoader - jQuery plugin
* Create a Loading Screen to preload images and content for you website
*
* Name:			jPreLoader.js
* Author:		Kenny Ooi - http://www.inwebson.com
* Date:			January 01, 2012
* Version:		1.0
* Modified:     Only preloads images with class of "preload"
*
*/
(function( $ ){

	var items = new Array(),
		errors = new Array(),
		onComplete = function() {},
		current = 0;

	var jpreOptions = {
		splashVPos: '35%',
		loaderVPos: '75%',
		splashID: '#jpreContent',
		showSplash: true,
		showPercentage: true,
		debugMode: false,
		splashFunction: function() {}
	}

	var getImages = function(element) {
		$(element).find('*:not(script)').each(function() {
			var url = "";

			if ($(this).css('background-image').indexOf('none') == -1) {
				url = $(this).css('background-image');
				if(url.indexOf('url') != -1) {
					var temp = url.match(/url\((.*?)\)/);
					url = temp[1].replace(/\"/g, '');
				}
			} else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined' && $(this).hasClass('preload')) {
				url = $(this).attr('src');
			}
			//console.log(url);

			if (url.length > 0) {
				items.push(url);
			}
		});
	}

	var preloading = function() {
		for (var i = 0; i < items.length; i++) {
			loadImg(items[i]);
		}
	}

	var loadImg = function(url) {
		var imgLoad = new Image();
		$(imgLoad)
		.load(function() {
			completeLoading();
		})
		.error(function() {
			errors.push($(this).attr('src'));
			completeLoading();
		})
		.attr('src', url);
	}

	var completeLoading = function() {
		current++;

		var per = Math.round((current / items.length) * 100);
		$(jBar).stop().animate({
			height: per + '%'
		}, 0, 'linear'); // changed duration from 500 to zero

		if(jpreOptions.showPercentage) {
			$(jPer).text(per+"%");
		}

		if(current >= items.length) {

			current = items.length;

			if (jpreOptions.debugMode) {
				var error = debug();

			}
			loadComplete();
		}
	}

	var loadComplete = function() {
		$(jBar).stop().animate({
			height: '100%'
		}, 0, 'linear', function() { // changed duration from 500 to zero
			$(jOverlay).animate({opacity: '0'},0, function() { // changed duration from 500 to zero
				$(jOverlay).remove();
				onComplete();
			});
		});
	}

	var debug = function() {
		if(errors.length > 0) {
			var str = 'ERROR - IMAGE FILES MISSING!!!\n\r'
			str	+= errors.length + ' image files cound not be found. \n\r';
			str += 'Please check your image paths and filenames:\n\r';
			for (var i = 0; i < errors.length; i++) {
				str += '- ' + errors[i] + '\n\r';
			}
			return true;
		} else {
			return false;
		}
	}

	// create the splash screen overlay
	var createContainer = function(tar) {

		jOverlay = $('<div></div>')
		.attr('id', 'jpreOverlay')
		.appendTo('body');

		if(jpreOptions.showSplash) {
			jContent = $('<div></div>')
			.attr('id', 'jpreSlide')
			.appendTo(jOverlay);

			var conWidth = $(window).width() - $(jContent).width();
			$(jContent).html($(jpreOptions.splashID).wrap('<div/>').parent().html());
			$(jpreOptions.splashID).remove();
			jpreOptions.splashFunction()
		}

		jLoader = $('<div></div>')
		.attr('id', 'jpreLoader')
		.appendTo(jOverlay);

		jBar = $('<div></div>')
		.attr('id', 'jpreBar')
		.appendTo(jLoader);

		if(jpreOptions.showPercentage) {
			jPer = $('<div></div>')
			.attr('id', 'jprePercentage')
			.appendTo(jLoader)
			.html('Loading...');
		}
	}

	$.fn.jpreLoader = function(options, callback) {
        if(options) {
            $.extend(jpreOptions, options );
        }
		if(typeof callback == 'function') {
			onComplete = callback;
		}

		createContainer(this);
		getImages(this);
		preloading();
        return this;
    };

})( jQuery );




/


/*
* ImageLens
* A jQuery plug-in for Lens Effect Image Zooming
* http://www.dailycoding.com/Posts/imagelens__a_jquery_plugin_for_lens_effect_image_zooming.aspx
*/
(function ($) {
    $.fn.imageLens = function (options) {

        var defaults = {
            lensSize: 180,
            borderSize: 0,
            borderColor: "#FFF"
        };
        var options = $.extend(defaults, options);
        var lensStyle = "background-position: 0px 0px;width: " + String(options.lensSize) + "px;height: " + String(options.lensSize)
            + "px;float: left;display: none;border-radius: " + String(options.lensSize / 2 + options.borderSize)
            + "px;border: " + String(options.borderSize) + "px solid " + options.borderColor
            + ";background-repeat: no-repeat;position: absolute;";

        return this.each(function () {
            var obj = $(this);

            var offset = $(this).offset();
            //console.log('offset left: ' + offset.left + ', offset top: ' + offset.top);

            // Creating lens
            var target = $("<div style='" + lensStyle + "' class='" + options.lensCss + "'>&nbsp;</div>").appendTo($(this).parent());
            var targetSize = target.size();

            // Calculating actual size of image
            var imageSrc = options.imageSrc ? options.imageSrc : $(this).attr("src");
            var imageTag = "<img style='display:none;' src='" + imageSrc + "' />";

            var widthRatio = 0;
            var heightRatio = 0;

            $(imageTag).load(function () {
                widthRatio = $(this).width() / obj.width();
                heightRatio = $(this).height() / obj.height();
            }).appendTo($(this).parent());

            target.css({ backgroundImage: "url('" + imageSrc + "')" });

            target.mousemove(setPosition);
            $(this).mousemove(setPosition);

            // Hide when user moves quickly off image
            target.mouseout(hideLens)
			$(this).mouseout(hideLens)
			$(window).scroll(hideLens);

			function hideLens() {
				target.hide();
			}

            function setPosition(e) {

                var offset = obj.offset();
				var leftPos = parseInt(e.pageX - offset.left);
                var topPos = parseInt(e.pageY - offset.top);
                //console.log('leftPos: ' + leftPos + ', topPos: ' + topPos);


                if (leftPos < 0 || topPos < 0 || leftPos > obj.width() || topPos > obj.height()) {
                    target.hide();
                }
                else {
                    target.show();


                    // position background image inside target
                    leftPos = String(((e.pageX - offset.left) * widthRatio - (target.width() + options.borderSize * 2) / 2) * (-1));
                    topPos = String(((e.pageY - offset.top) * heightRatio - (target.height() + options.borderSize * 2) / 2) * (-1));
                    target.css({ backgroundPosition: leftPos + 'px ' + topPos + 'px' });

                    // position the target
                    leftPos = String((e.pageX - offset.left) - target.width() / 2);
					topPos = String((e.pageY - offset.top) - target.height() / 2);
					target.css({ left: leftPos + 'px', top: topPos + 'px' });
                }
            }
        });
    };
})(jQuery);


/*
* Function to fade in image sprites on hover
*/
$.fn.fadeSprite = function() {

	this.mouseenter(function(e){

		$(this).find('a').hoverFlow(e.type, {opacity:1}, 300);

	}).mouseleave(function(e){

		$(this).find('a').hoverFlow(e.type, {opacity:0}, 300);

	});
};


/*
* Function to animate image thumbnail arrows on hover
*/
$.fn.hoverThumb = function() {

	// only animate for large desktop browsers
  	if($(window).width() >= 1140){

	  	this.mouseenter(function(e){

			$(this).find('.arrow-r').hoverFlow(e.type, {opacity:1, right:15}, 500);
			//$(this).hoverFlow(e.type, {opacity:1}, 300).siblings().hoverFlow(e.type, {opacity:0.3}, 300);
			$(this).stop().animate({'opacity':'1'}, 300).siblings().stop().animate({'opacity':'0.4'}, 500);

		}).mouseleave(function(e){

			$(this).find('.arrow-r').hoverFlow(e.type, {opacity:0, right:0}, 500);

		});

		// once the mouse leaves the whole thumbs div
		$('#thumbs').mouseleave(function(e){

			// we reset the thumbs
			$('#thumbs li').stop().animate({'opacity':'1'}, 500);

		});

	}
};

/*
* Function to bring in portfolio gallery items one by one
*/
$.fn.animateGallery = function() {

	$(this).each(function(i){
		$(this).delay(i * 150).animate({'opacity':'1'}, 300, 'easeOutExpo');
	});
};

/*
* Function to animate leaving a page
*/
$.fn.leavePage = function() {

	this.click(function(event){

		event.preventDefault();
		linkLocation = this.href;

		$('#header').animate({'opacity':'0', 'top':'-92px'}, 500, 'easeOutExpo');
		$('body').fadeOut(500, function(){
			window.location = linkLocation;
		});
	});
};

/*
* Function to animate content details
*/
function animateContent() {

	// show the rest of the content
	$('#content-detail').css({'opacity':'0', 'top':'50px'}).stop().animate({'opacity':'1', 'top':'0px'}, 500, 'easeOutExpo');
	$('#footer').css({'opacity':'0', 'top':'50px'}).stop().animate({'opacity':'1', 'top':'0px'}, 500, 'easeOutExpo');
};

/*
* Function to switch face on browser resize
*/
$.fn.resizeFace = function() {

	$(window).resize(function() {

	  	// Show large face
	  	if($(window).width() >= 1140) {

	  		$('#designer-img').css({'opacity':'1'});
	  		$('#coder-img').css({'opacity':'1'});
	  		$('#designer-bg').css({'opacity':'1'});
	  		$('#coder-bg').css({'opacity':'1'});
	  		$('#designer').css({'opacity':'1'});
	  		$('#coder').css({'opacity':'1'});

	  	} else { // Show smaller face image

	  		$('#face-img').css({'opacity':'1'});
	  		$('#designer').css({'opacity':'1'});
	  		$('#coder').css({'opacity':'1'});
	  	}

	});
};

/*
* Function to animate home page
*/
$.fn.animateHome = function() {

	// only animate for large desktop browsers
	if($(window).width() >= 1140){

	      $('#content').animate({'opacity':'1'}, 500, 'easeOutExpo');
	      $('#designer-img').css({'left':'-500px'}).stop().animate({'opacity':'1', 'left':'100px'}, 1000, 'easeOutExpo');
	      $('#coder-img').css({'right':'-500px'}).stop().animate({'opacity':'1', 'right':'100px'}, 1000, 'easeOutExpo');
	      $('#designer-bg').css({'left':'-500px'}).stop().animate({'opacity':'1', 'left':'100px'}, 1500, 'easeOutBack');
	      $('#coder-bg').css({'right':'-500px'}).stop().animate({'opacity':'1', 'right':'100px'}, 1500, 'easeOutBack');
	      $('#designer').delay(1500).animate({'opacity':'1'}, 500, 'easeOutExpo');
	      $('#coder').delay(1500).animate({'opacity':'1'}, 500, 'easeOutExpo', function(){ animateFace(); });

	}else{

	    $('#content').animate({'opacity':'1'}, 500, 'easeOutExpo');
	    $('#face-img').animate({'opacity':'1'}, 2000, 'easeOutExpo');
	    $('#designer').delay(1000).animate({'opacity':'1'}, 500, 'easeOutExpo');
	    $('#coder').delay(1000).animate({'opacity':'1'}, 500, 'easeOutExpo', function(){ animateContent(); });

	}
};


/*
* Function to animate main section
*/
function animateMain() {

	$('#text-main').css({'visibility':'visible', 'right':'50%'}).stop().animate({'opacity':'1', 'right':'0%'}, 1000, 'easeOutExpo');
	$('#img-main').css({'visibility':'visible', 'left':'50%'}).stop().delay(100).animate({'opacity':'1', 'left':'0%'}, 1000, 'easeOutExpo');

	$('#snaps').css({'visibility':'visible', 'opacity':'1'});
	$('#snaps-1').css({'visibility':'visible', 'top':'50px'}).stop().delay(300).animate({'opacity':'1', 'top':'0px'}, 200, 'easeOutBack');
	$('#snaps-2').css({'visibility':'visible', 'top':'50px'}).stop().delay(500).animate({'opacity':'1', 'top':'0px'}, 200, 'easeOutBack');
	$('#snaps-3').css({'visibility':'visible', 'top':'50px'}).stop().delay(700).animate({'opacity':'1', 'top':'0px'}, 200, 'easeOutBack');
	$('#snaps-4').css({'visibility':'visible', 'top':'50px'}).stop().delay(900).animate({'opacity':'1', 'top':'0px'}, 200, 'easeOutBack');
	$('#snaps-5').css({'visibility':'visible', 'top':'50px'}).stop().delay(1100).animate({'opacity':'1', 'top':'0px'}, 200, 'easeOutBack');
	$('#snaps-6').css({'visibility':'visible', 'top':'50px'}).stop().delay(1300).animate({'opacity':'1', 'top':'0px'}, 200, 'easeOutBack',  function(){ animateContent(); });

};


/*
* Function to animate pages (e.g. single-portfolio.php)
*/
function animatePage() {

	$('#text-main').css({'visibility':'visible', 'right':'50%'}).stop().animate({'opacity':'1', 'right':'0%'}, 1000, 'easeOutExpo');
	$('#img-main').css({'visibility':'visible', 'left':'50%'}).stop().delay(100).animate({'opacity':'1', 'left':'0%'}, 1000, 'easeOutExpo', function(){ animateContent(); });

};

/*
* Function to animate contact page
*/
function animateContact() {

	var navi = $('#navi');

	navi.stop().delay(2000).animate({'opacity':'1'}, 1000, 'easeOutQuad', function(){

		if($(window).width() >= 1140){

			navi.imageLens({ imageSrc: "http://v2.adhamdannaway.com/wp-content/themes/dannaway/images/adham-dannaway-sky-people.jpg" });
		}
	});

};



/*
* Function to animate about page
*/
function animateAbout() {

	// Animate section 0 (if window height is small enough)
	if($(window).height() <= 880){

	    $('#img-0').waypoint(function(event, direction) {

		   $('#img-0').css({'visibility':'visible', 'top': '500px'}).stop().animate({'opacity':'1', 'top':'0px'}, 1000, 'easeOutExpo');

		}, {
		   offset: '80%',
		   triggerOnce: true
		});

	}else{

		$('#img-0').css({'visibility':'visible', 'opacity':'1'});
	}

    // Animate Section 1
    $('#img-1').waypoint(function(event, direction) {

		$('#img-1').css({'visibility':'visible', 'right': '50%'}).stop().animate({'opacity':'1', 'right':'0%'}, 1000, 'easeOutExpo');

	}, {
	   offset: '80%',
	   triggerOnce: true
	});


};


/*
* Function to animate featured page
*/
function animateFeatured() {

	// Animate section 0 (if window height is small enough)
	if($(window).height() <= 880){

	    $('#img-0').waypoint(function(event, direction) {

		   $('#img-0').css({'visibility':'visible', 'right': '50%'}).stop().animate({'opacity':'1', 'right':'0%'}, 1000, 'easeOutExpo');

		}, {
		   offset: '80%',
		   triggerOnce: true
		});

	}else{

		$('#img-0').css({'visibility':'visible', 'opacity':'1'});
	}

	// Animate section 1
    $('#img-1').waypoint(function(event, direction) {

	   $('#img-1').css({'visibility':'visible', 'left': '50%'}).stop().animate({'opacity':'1', 'left':'0%'}, 1000, 'easeOutExpo');

	}, {
	   offset: '80%',
	   triggerOnce: true
	});

	// Animate section 2
    $('#img-2').waypoint(function(event, direction) {

	   $('#img-2').css({'visibility':'visible', 'right': '50%'}).stop().animate({'opacity':'1', 'right':'0%'}, 1000, 'easeOutExpo');

	}, {
	   offset: '80%',
	   triggerOnce: true
	});

    // Animate section 3
    $('#icons').waypoint(function(event, direction) {

	   $('#icons').css({'visibility':'visible', 'top': '250px'}).stop().animate({'opacity':'1', 'top':'0px'}, 1000, 'easeOutExpo');

	}, {
	   offset: '80%',
	   triggerOnce: true
	});

};

/*
* Function to animate face
*/
function animateFace() {

	var designerImg 	= $('#designer-img');
	var coderImg 		= $('#coder-img');
	var designerHover	= $('#designer');
	var coderHover		= $('#coder');
	var designerDesc	= $('#designer-desc');
	var coderDesc		= $('#coder-desc');
	var designerArrow	= $('#designer-arrow');
	var coderArrow		= $('#coder-arrow');
	var designerBg		= $('#designer-bg');
	var coderBg			= $('#coder-bg');
	var face 			= $('#face');
	var section 		= $('#section');
	var duration 		= 500;

	var mouseX = 0;
	var relMouseX = 520;
	var xp = 520;
	frameRate =  30;
	timeInterval = Math.round( 1000 / frameRate );

	// Firstly animate the bottom content onto the page
	animateContent();

	section.mouseenter(function(e){

		// Get mouse position
		section.mousemove(function(e){

		   	// raw mouse position
		   	mouseX = e.pageX;

		   	// mouse position relative to face div
		   	relMouseX = mouseX - face.offset().left;

		});

		// Animate the face based on mouse movement
		loop = setInterval(function(){

			// zeno's paradox dampens the movement
			xp += (relMouseX - xp) / 12;

			designerImg.css({width:420 + (520 - xp) * 0.5, left: 100 + (520 - xp) * 0.1});
		    coderImg.css({width:420 + (xp - 520) * 0.5, right: 100 - (520 - xp) * 0.1});

		    designerBg.css({left: 100 + (520 - xp) * 0.05, opacity: ((1040 - xp)/520)});
		    coderBg.css({right:  100 + (xp - 520) * 0.05, opacity: (xp/520)});

		    designerDesc.css({opacity: ((1040 - xp)/520)});
		    coderDesc.css({opacity: (xp/520)});

		}, timeInterval );

	}).mouseleave(function(e){

		// reset the face to initial state
		clearInterval(loop);
		xp 			= 520;
		mouseX 		= 0;
		relMouseX 	= 520;

		designerImg.hoverFlow(e.type, {width: 420, left: 100}, duration, 'easeOutQuad');
		coderImg.hoverFlow(e.type, {width: 420, right: 100}, duration, 'easeOutQuad');
		coderDesc.hoverFlow(e.type, {opacity: 1}, duration, 'easeOutQuad');
		designerDesc.hoverFlow(e.type, {opacity: 1}, duration, 'easeOutQuad');
		coderBg.hoverFlow(e.type, {right:100, opacity: 1}, duration, 'easeOutQuad');
		designerBg.hoverFlow(e.type, {left:100, opacity: 1}, duration, 'easeOutQuad');

	});

};


/*
* Function to detect IE
*/
// ----------------------------------------------------------
// A short snippet for detecting versions of IE in JavaScript
// without resorting to user-agent sniffing
// ----------------------------------------------------------
// If you're not in IE (or IE version is less than 5) then:
//     ie === undefined
// If you're in IE (>=5) then you can determine which version:
//     ie === 7; // IE7
// Thus, to detect IE:
//     if (ie) {}
// And to detect the version:
//     ie === 6 // IE6
//     ie > 7 // IE8, IE9 ...
//     ie < 9 // Anything less than IE9
// ----------------------------------------------------------

// UPDATE: Now using Live NodeList idea from @jdalton

var ie = (function(){

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );

    return v > 4 ? v : undef;

}());



/*
* Function to print IE page
*/
function ieMessage() {

	// define the HTML of the page
	var page  = "<div id='ie' class='clearfix'>";
	page 	 += "<section class='main nopad-b'>";
	page 	 += "<div class='row'>";
	page 	 += "<div class='col-5'>";
	page 	 += "<h1>Ummm ...</h1>";
	page 	 += "<p class='intro'>Well this is awkward. It looks like you're using an old browser.</p>";
	page 	 += "<p>Old browsers including Internet Explorer 6, 7 and 8 can't handle some of the new stuff I've packed into this website. If you'd like to see the full website you'll need to download one of the nice new browsers below. It will also make your life much easier when browsing the net later on.</p>";
	page 	 += "<p>";
	page 	 += "<a href='http://www.google.com/chrome' target='_blank' class='icon-browser chrome'></a>";
	page 	 += "<a href='http://www.mozilla.org/en-US/firefox/new/' target='_blank' class='icon-browser firefox'></a>";
	page 	 += "<a href='http://www.apple.com/au/safari/'' target='_blank' class='icon-browser safari'></a>";
	page 	 += "</p>";
	page 	 += "</div>";
	page 	 += "<div class='col-7 last'>";
	page 	 += "<img class='major' src='http://v2.adhamdannaway.com/wp-content/themes/dannaway/images/about-adham-dannaway.jpg' alt='adham dannaway ui designer'>";
	page 	 += "</div>";
	page 	 += "</div>";
	page 	 += "</section>";
	page 	 += "</div>";

	// Print the page
	$('.content').replaceWith(page);

}
