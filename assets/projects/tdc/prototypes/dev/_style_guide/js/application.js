

// GLOBAL VARS
var searchmenu = $('.search-dropdown');
var mobilenav = $('.globalnav-dropdown');
var mq = window.matchMedia('screen and (min-width: 880px)');
var browserwidth = 0;



// SHOW CURRENT DATE
(function () {
   'use strict';
   var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();

    var today = (m_names[curr_month] + " " + curr_date + ", " + curr_year);

    document.getElementById('current-date').innerHTML = today;

}());




// MOBILE SEARCH DROPDOWN
$('.search-min, #search-dropdown-btn').click(function(e){

    e.preventDefault();

    if (searchmenu.is(':visible')) {
        searchmenu.css('display', 'block');
        searchmenu.slideUp('1000');
        

    } else {
        searchmenu.slideDown('1000');
        mobilenav.slideUp('1000');
    }
});


// MOBILE GLOBAL DROPDOWN
$('.hamburgertoggle, globalnav-dropdown > ul > li').click(function(){
    
    if (mobilenav.is(':visible')) {
        mobilenav.slideUp('1000');  

    } else {
        mobilenav.slideDown('1000');
        searchmenu.slideUp('1000'); 
    }
});



// SCROLL TO TOP
$('.returntotop').click(function(e){

	e.preventDefault();
	$('body,html').animate({scrollTop: 0 ,}, 700
	);
});

// TOGGLE SELECTED PANEL 
$('.startoggle').click(function(e) {

    e.preventDefault();
    var star = $(this).closest( '.startoggle' );

    if (star.hasClass('star-active')) {
        star.removeClass('star-active');
        star.addClass('star-inactive');

    } else {
        star.removeClass('star-inactive');
        star.addClass('star-active');    
    }
});


//SELECT DROPDOWN 
$('.dropdown dt a').click(function(e) {
 e.preventDefault();

 var ddclick = $(this).closest('.dropdown').find('ul');
 ddclick.toggle();
});
       

//DROPDOWN SELECTION
$('.dropdown dd ul li a').click(function(e) {
 e.preventDefault();

 var text = $(this).html();
 var selected = $(this).closest(".dropdown").find("dt a");
 console.log(selected);
 selected.html(text);

 $('.dropdown dd ul').hide();

});            
function getSelectedValue(id) {
    return $('#' + id).find('dt a span.value').html();
}


// COLLAPSES DROPDOWN UPON CLICKING ANYWHERE ELSE ON THE PAGE
$(document).mouseup(function (e) {
    e.preventDefault();

    var container = $('.dropdown').find('ul');
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.hide();
    }
});


// ACTIVITY DROPDOWN
/*$('.act-name .icon').click(function(e){

    e.preventDefault();

    var selected = $(this).parent().siblings( '.act-descrip');
    var glyph = $(this).closest( '.icon' );

    if (selected.is(':visible')) {
        selected.slideUp('1000');
        glyph.removeClass('glyphicon-chevron-up');
        glyph.addClass('glyphicon-chevron-down');

    } else {
        selected.slideDown('1000');
        glyph.removeClass('glyphicon-chevron-down');
        glyph.addClass('glyphicon-chevron-up');
    }
});*/


// default first tab opens
function defaultTabOpen() {
    $( '#actrow1' ).show();
}


// JS MEDIA QUERY to ALTER STRUCTURE
/*function mediaqueryresponse(mq){

    if (mq.matches){       

        $('#actrow1 > .act-descrip').detach().insertAfter($('#actrow1 > .act-cta'));
        $('#actrow2 > .act-descrip').detach().insertAfter($('#actrow2 > .act-cta'));
        $('#actrow3 > .act-descrip').detach().insertAfter($('#actrow3 > .act-cta'));
        $('#actrow4 > .act-descrip').detach().insertAfter($('#actrow4 > .act-cta'));

        $('#actrow1 > .act-cta').detach().insertBefore($('#actrow1 > .act-name'));
        $('#actrow2 > .act-cta').detach().insertBefore($('#actrow2 > .act-name'));
        $('#actrow3 > .act-cta').detach().insertBefore($('#actrow3 > .act-name'));
        $('#actrow4 > .act-cta').detach().insertBefore($('#actrow4 > .act-name'));

    }
    else {

        $('#actrow1 > .act-cta').detach().insertAfter($('#actrow1 > .act-status'));
        $('#actrow2 > .act-cta').detach().insertAfter($('#actrow2 > .act-status'));
        $('#actrow3 > .act-cta').detach().insertAfter($('#actrow3 > .act-status'));
        $('#actrow4 > .act-cta').detach().insertAfter($('#actrow4 > .act-status'));

        $('#actrow1 > .act-descrip').detach().insertAfter($('#actrow1 > .act-name'));
        $('#actrow2 > .act-descrip').detach().insertAfter($('#actrow2 > .act-name'));
        $('#actrow3 > .act-descrip').detach().insertAfter($('#actrow3 > .act-name'));
        $('#actrow4 > .act-descrip').detach().insertAfter($('#actrow4 > .act-name'));
    }


}
mediaqueryresponse(mq); 
mq.addListener(mediaqueryresponse);*/



// TOGGLE SELECTED PANEL 
$('.claimed-arrow').click(function() {

    var ruler = $('.claimed-activities .progress-timeline .rule .verticallines .verticalline');
    var indicators = $('.sdc-slider .resourcerow .activerow, .sdc-slider .resourcerow .inactiverow, .sdc-slider .activityrow .activerow, .sdc-slider .activityrow .inactiverow');
	//Changed for SDC slider 
    if($('.sdc-slider').css("width") <= "15px" && !$(this).is(':animated'))
    {
        //$('#maincontent').animate({"width": "96%"});
        $('.sdc-slider .btn-group').children().fadeIn(200);
        $('.sdc-slider').animate({"width" : 265});


        
        //ruler.animate({"margin-right": "2.075%"});
        $('.toggleArrow').removeClass("icon-claim_slide_right");
        $('.toggleArrow').addClass("icon-claim_slide_left");

        $('.sdc-slider').removeClass('background-open');
        $('.sdc-slider').addClass('background-closed');

        if($( window ).width() >= "1200") {
            $('.introPanel').animate({"width": "130%"});
            $('.flexColLg').animate({"width": "55%"});
            $('.flexColSm').animate({"width": "40%"});
            $('.iframe').animate({"width": "98%"});
        }

        if($( window ).width() < "1200") {
            $('.introPanel').animate({"width": "141%"});
            $('.flexColLg').animate({"width": "55%"});
            $('.flexColSm').animate({"width": "40%"});
            $('.iframe').animate({"width": "98%"});
        }
    }
    else {
        
        if(!$(this).is(':animated'))
        {

            $('.sdc-slider .btn-group').children().fadeOut(200);
            $('.sdc-slider').animate({"width" : 15}, function() {
            });


            // $('#maincontent').animate({"width": "88%"});
            // $('.sdc-slider').animate({"margin-left": -16});
            $('.content .halfCol').animate({"width": "39%"});
            
            // ruler.animate({"margin-right": "1.889%"});
            $('.toggleArrow').removeClass("icon-claim_slide_left");
            $('.toggleArrow').addClass("icon-claim_slide_right");

            $('.sdc-slider').addClass('background-open');
            $('.sdc-slider').removeClass('background-closed');

            if($( window ).width() >= "1200") {
                $('.introPanel').animate({"width": "100%"});
                $('.flexColLg').animate({"width": "38%"});
                $('.flexColSm').animate({"width": "35%"});
                $('.iframe').animate({"width": "75%"});
            }

            if($( window ).width() < "1200") {
                $('.introPanel').animate({"width": "100%"});
                $('.flexColLg').animate({"width": "33%"});
                $('.flexColSm').animate({"width": "33%"});
                $('.iframe').animate({"width": "74%"});
            }
        }
    }
});



// FAKE ATTACH/REMOVE FILES
$('.btn-attach').click(function(e){
    e.preventDefault();
    $('#uploadarea:last').append("<div class='fileattach'><div class='attachment'><span class='icon-file ico-default'></span></a></span>File Name</div><span class='icon-close close-icon'></span></div>");
});

$('.icon-close').click(function(e){
    e.preventDefault();

    $(this).closest('.fileattach').remove();
});




// REMOVE MODAL ON MOBILE RESIZE
// CHANGED ORIGINAL WIDTH FROM 880 TO 50
// TO PROVIDE MODAL WINDOW IN SMALLER VIEW 
$(window).resize(function(){

  if(browserwidth != $(window).width()){
    
    browserwidth = $(window).width();
    if ( $(window).width() < 50) {
         $('.notifications, .modal-backdrop').removeClass('in');
    }
  }
});

//Resource Center Top Panel Mobile Affix to Top on Scroll
if($(window).width() <= 400) {
    $('.resourcecenter-toppanel').affix({
          offset: {
            top: $('body').children('.container').first().height()
          }
    }); 
}

//Resource Center Top Panel Mobile Affix to Top on Scroll

// if($(window).width() <= 879) {
// var toppanelHeight = $('.resourcecenter-toppanel').height();
// var isAffixed = false;

//     $('.resourcecenter-toppanel').on('hide.bs.collapse', function() {
//         toppanelHeight = $('.resourcecenter-toppanel').height();
//         console.log(isAffixed);
//         if(isAffixed) {
//             console.log('WHY NOT!?!?!!');
//             console.log(toppanelHeight);
//             $( ".rc-side-panel-content-wrapper" ).animate({'padding-top': (toppanelHeight+15 + 'px')}, 1000 );
//         }
//     });

//     $('.resourcecenter-toppanel').on('show.bs.collapse', function() {
//         toppanelHeight = $('.resourcecenter-toppanel').height();
//         console.log(isAffixed);
//         if(isAffixed) {
//             $( ".rc-side-panel-content-wrapper" ).animate({'padding-top': (toppanelHeight+15 + 'px')}, 1000 );
//         }
//     });

//     $('.resourcecenter-toppanel').affix({
//           offset: {
//             top: $('.resourcecenter-toppanel').offset().top //+ (toppanelHeight)
//           }
//     }); 

//     // $('.resourcecenter-toppanel').on('affixed.bs.affix', function(e) {
//     //     $('.rc-side-panel-content-wrapper').css('padding-top', toppanelHeight+15 );
//     //     isAffixed = true;
//     //     console.log('AFFIXED');
//     // });
//     // $('.resourcecenter-toppanel').on('affixed-top.bs.affix', function(e) {
//     //     $('.rc-side-panel-content-wrapper').css('padding-top', 0);
//     //     isAffixed = false;
//     //     console.log('AFFIXED-TOP');
//     // });

// }

//iFrame pop out icon show on hover
$('.iframeWrapper').hover(
    function(e) { //handlerIn
        $(this).find('.controls').fadeIn();
    },
    function(e) { //handlerOut
        $(this).find('.controls').fadeOut();
    }
);

//Search Filter Buttons Status Toggle
$('.filter-btn').click(function(e) {
    target = $(e.target);
    if(target.is('span')) {
        target = $(target).parent();
    }

    if(target.hasClass('selected')) {
        target.removeClass('selected');
        target.removeClass('btn-orange');
        target.addClass('btn-default');
    } else {
        target.addClass('selected');
        target.addClass('btn-orange');
        target.removeClass('btn-default');
    }
});

//Search Yes/No Did You Find This Useful Toggle
$('.useful-choice a').click(function(e) {
    var otherChoice = $(this).parent().siblings('.useful-choice').find('a');

    if($(otherChoice).hasClass('selected')) {
        $(otherChoice).toggleClass('selected');
    }

    $(this).toggleClass('selected');
    console.log('CLICKED');

});

$('.filter-list, .rolepanel').on('show.bs.collapse', function(e) {
        $(this).closest('.collapse-icon .ico').removeClass('icon-plus');
        $(this).closest('.collapse-icon .ico').addClass('icon-minus');
    $('.resourcecenter-toppanel, .dashboard-toppanel').removeClass('closed');
});

$('.filter-list, .rolepanel').on('hide.bs.collapse', function(e) {
        $(this).closest('.collapse-icon .ico').removeClass('icon-minus');
        $(this).closest('.collapse-icon .ico').addClass('icon-plus');
});

/* Old Script till 11/20/14 - Start
$('.filter-list, .rolepanel').on('show.bs.collapse', function(e) {
    $('.collapse-icon .ico').removeClass('icon-plus');
    $('.collapse-icon .ico').addClass('icon-minus');
    $('.resourcecenter-toppanel').removeClass('closed');
});

$('.filter-list, .rolepanel').on('hide.bs.collapse', function(e) {
    $('.collapse-icon .ico').removeClass('icon-minus');
    $('.collapse-icon .ico').addClass('icon-plus');
});
End Old script */

//Added from Maxmedia Script 
$('.collapse').on('show.bs.collapse', function(e) {
    var collapser = $(this);

    $('a[data-target]').each(function() {
        target = $(this).data('target');
        if($(target).is(collapser)) {
            $(this).find('.ico').removeClass('icon-plus');
            $(this).find('.ico').addClass('icon-minus');
            $(this).parents('.collapsable').find('.heading').removeClass('closed');
        }
    });

});

$('.collapse').on('hide.bs.collapse', function(e) {
    var collapser = $(this);

    $('a[data-target]').each(function() {
        target = $(this).data('target');
        if($(target).is(collapser)) {
            $(this).find('.ico').removeClass('icon-minus');
            $(this).find('.ico').addClass('icon-plus');    
            $(this).parents('.collapsable').find('.heading').addClass('closed');
        }
    });
});
$('.filter-list, .rolepanel').on('hidden.bs.collapse', function(e) { 
    $('.resourcecenter-toppanel').addClass('closed');
});

$('.resourcecenter-useful .close').click(function(e) {
    $('.resourcecenter-useful').fadeOut(500, function() {
        $('.resourcecenter-useful').remove();
    });
    
});

if($('form.form-search').length > 2) {
    $('header form.form-search').hide();
}

$(function(){
    if($('.sdc_table').length > 0) {
        cacheChildRows('.sdc_table');

        $.fn.dataTable.ext.order['due-date'] = function  ( settings, col ) {
            return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
                return $(td).find('.due-date').text();
            } );
        };

        var table = $('.sdc_table').dataTable({
            "paging": false,
            "ordering": true,
            "autoWidth": false,
            "responsive": true,
            "aoColumns": [ { "bSortable": false },
                            { "bSortable": false },
                            { "bSortable": false },
                            { "bSortable": false },
                            { "bSortable": false, "orderDataType": "due-date", "type": "date" },
                            { "bSortable": false } 
            ],
            "order":[[4, "asc"]],
            "sDom": "t"

        });

        var phunnelsOptions = [
                                {"sort": [ {"asc" : "Sort A to Z"},
                                            {"desc" : "Sort Z to A"}
                                        ],
                                "checkboxes" : [ {"Claimed/Started" : ["unclaim", "claimed"] },
                                                {"Claimed by me" : ["unclaim"] },
                                                {"Unclaimed/Not Started" : ["claim"] }
                                            ],
                                "search" : true
                                },

                                {"sort" : [ {"asc" : "Sort A to Z"},
                                            {"desc" : "Sort Z to A"}
                                        ],
                                "checkboxes" : [ {"Not Started" : ["not started"] },
                                                {"In Progress" : ["in progress"] }
                                            ],
                                "search" : true
                                },

                                {"sort" : [ {"asc" : "Sort A to Z"},
                                            {"desc" : "Sort Z to A"}
                                        ],
                                "checkboxes" : false,
                                "search" : true
                                },

                                {"sort" : [ {"asc" : "Sort A to Z"},
                                            {"desc" : "Sort Z to A"}
                                        ],
                                "checkboxes" : false,
                                "search" : true
                                },

                                {"sort" : [ {"asc" : "Sort Soonest to Latest"},
                                            {"desc" : "Sort Latest to Soonest"}
                                        ],
                                "checkboxes" : [{"Overdue" : [ {"lessthan" : 0} ] },
                                                {"Today" : [ {"value" : 0} ] },
                                                {"Due in 1 -3 Days" : [ {"range" : [1, 3] } ] },
                                                {"Due in 4+ Days" : [ {"greaterThan" : 4} ] }
                                            ],
                                "search" : false,
                                "menu-position" : "right"
                                },

                                {"sort" : [ {"asc" : "Sort Critical to Good"},
                                            {"desc" : "Sort Good to Critical"}
                                        ],
                                "checkboxes" : [ {"Good" : "good"},
                                                {"Fair" : "fair"},
                                                {"Critical" : "critical"}
                                            ],
                                "search" : false,
                                "menu-position" : "right"
                                }
                            ];

        phunnels(phunnelsOptions, table);

        $('.act-name').on('click', function(event){

            var line = $(this).parent();
            if(line.data('child-row')){
                var childRow = line.data('child-row');

                //Check if it's been added. If so hide/remove it. Else add/show it.
                if(line.next().is(childRow)) {
                    line.next().hide();
                    line.find('.act-name .glyphicon').removeClass('glyphicon-chevron-up');
                    line.find('.act-name .glyphicon').addClass('glyphicon-chevron-down');
                    line.next().remove();
                } else {
                    childRow = childRow.insertAfter(line);
                    line.find('.act-name .glyphicon').removeClass('glyphicon-chevron-down');
                    line.find('.act-name .glyphicon').addClass('glyphicon-chevron-up');
                    childRow.show();
                }
            }
        });

    }
});


////////////////////////////////////////
//      Activity Detail Filtering     //
////////////////////////////////////////

if($('.sliderhead.searcher').length > 0) {
    console.log('activity detail search');
    $('.sliderhead.searcher input').on('keyup', function(e) {
        needle = $(this).val();

        $('.activityrow .activityinfo').each(function(index) {
            haystack = $(this).text();
            if(haystack.toLowerCase().indexOf(needle.toLowerCase()) < 0) {
                $(this).parent().hide();
            } else {
                $(this).parent().show();
            }
        });
    });
}


/////////////////////////////////////////
//      COE On This Page Functions     //
/////////////////////////////////////////
$(document).ready(function() {
    if( $('.onThisPage').length > 0 ) {


        $('.onThisPage a').click(function(e) {
            e.preventDefault();
            var href = $(this).attr('href');
            console.log('href');
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 500);    
        });


        $('.onThisPage .nav').affix({
            offset: {
              top: function() {
                return $('.onThisPage').offset().top;
              },
              bottom: function() {
                value = $(document).outerHeight() - ($('article').outerHeight() + $('article').offset().top);
                return value;
              }
            }
        });

        $('.onThisPage').css('height', $('article').height());



    }
});

//Thumnail Modals
$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {

    if ( $(window).width() > 879) {
        event.preventDefault();
        var options = {'always_show_close' : true };
        $(this).ekkoLightbox(options);
    }
});

$(window).on('resize load', function(e){

    if ( $(window).width() > 879) {
        $('.sdc-hero-nav .nav-pills').show();
    } else {
        $('.sdc-hero-nav .nav-pills').hide();
    }
});

$('.mobile-menu .menu-button a').on('click', function(e) {
    e.preventDefault();

    $('.mobile-menu').siblings('.nav-pills').slideToggle('500');
});

$(document).ready(function() {
    $('.mobile-menu .active-window .active-title').text($('.sdc-hero-nav .nav-pills .active').text());
});


$('.mobile-menu .active-window a').on('click', function(e) {
    e.preventDefault();

    if($(this).hasClass('prev')) {

        if( $('.nav-pills .active').is($('.nav-pills li').first()) ) {       
            $('.nav-pills a:last').tab('show'); // Select last tab
        } else {
            $('.nav-pills .active').prev().find('a').tab('show');
        }
        

    } else if($(this).hasClass('next')) {

        if( $('.nav-pills .active').is($('.nav-pills li').last()) ) {       
            $('.nav-pills a:first').tab('show'); // Select last tab
        } else {
            $('.nav-pills .active').next().find('a').tab('show');
        }
    }

});

$('.sdc-hero-nav').on('shown.bs.tab', function(e) {
    $('.mobile-menu .active-window .active-title').text($('.sdc-hero-nav .nav-pills .active').text());
});






// $('a.thumbnail').on('click', function(e) {
//     e.preventDefault();
//     imgsrc = $(this).attr('href');
//     $('this').ekkoLightbox();

//     console.log(imgsrc);

//     // $('#thumbnail-modal .modal-body').html('<img style="margin:0 auto" src="' + imgsrc + '" />');



// });









/*
Lightbox for Bootstrap 3 by @ashleydw
https://github.com/ashleydw/lightbox

License: https://github.com/ashleydw/lightbox/blob/master/LICENSE
*/


(function() {
  "use strict";
  var $, EkkoLightbox;

  $ = jQuery;

  EkkoLightbox = function(element, options) {
    var content, footer, header,
      _this = this;
    this.options = $.extend({
      title: null,
      footer: null,
      remote: null
    }, $.fn.ekkoLightbox.defaults, options || {});
    this.$element = $(element);
    content = '';
    this.modal_id = this.options.modal_id ? this.options.modal_id : 'ekkoLightbox-' + Math.floor((Math.random() * 1000) + 1);
    header = '<div class="modal-header"' + (this.options.title || this.options.always_show_close ? '' : ' style="display:none"') + '><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">' + (this.options.title || "&nbsp;") + '</h4></div>';
    footer = '<div class="modal-footer"' + (this.options.footer ? '' : ' style="display:none"') + '>' + this.options.footer + '</div>';
    $(document.body).append('<div id="' + this.modal_id + '" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">' + header + '<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>' + footer + '</div></div></div>');
    this.modal = $('#' + this.modal_id);
    this.modal_dialog = this.modal.find('.modal-dialog').first();
    this.modal_content = this.modal.find('.modal-content').first();
    this.modal_body = this.modal.find('.modal-body').first();
    this.lightbox_container = this.modal_body.find('.ekko-lightbox-container').first();
    this.lightbox_body = this.lightbox_container.find('> div:first-child').first();
    this.showLoading();
    this.modal_arrows = null;
    this.border = {
      top: parseFloat(this.modal_dialog.css('border-top-width')) + parseFloat(this.modal_content.css('border-top-width')) + parseFloat(this.modal_body.css('border-top-width')),
      right: parseFloat(this.modal_dialog.css('border-right-width')) + parseFloat(this.modal_content.css('border-right-width')) + parseFloat(this.modal_body.css('border-right-width')),
      bottom: parseFloat(this.modal_dialog.css('border-bottom-width')) + parseFloat(this.modal_content.css('border-bottom-width')) + parseFloat(this.modal_body.css('border-bottom-width')),
      left: parseFloat(this.modal_dialog.css('border-left-width')) + parseFloat(this.modal_content.css('border-left-width')) + parseFloat(this.modal_body.css('border-left-width'))
    };
    this.padding = {
      top: parseFloat(this.modal_dialog.css('padding-top')) + parseFloat(this.modal_content.css('padding-top')) + parseFloat(this.modal_body.css('padding-top')),
      right: parseFloat(this.modal_dialog.css('padding-right')) + parseFloat(this.modal_content.css('padding-right')) + parseFloat(this.modal_body.css('padding-right')),
      bottom: parseFloat(this.modal_dialog.css('padding-bottom')) + parseFloat(this.modal_content.css('padding-bottom')) + parseFloat(this.modal_body.css('padding-bottom')),
      left: parseFloat(this.modal_dialog.css('padding-left')) + parseFloat(this.modal_content.css('padding-left')) + parseFloat(this.modal_body.css('padding-left'))
    };
    this.modal.on('show.bs.modal', this.options.onShow.bind(this)).on('shown.bs.modal', function() {
      _this.modal_shown();
      return _this.options.onShown.call(_this);
    }).on('hide.bs.modal', this.options.onHide.bind(this)).on('hidden.bs.modal', function() {
      if (_this.gallery) {
        $(document).off('keydown.ekkoLightbox');
      }
      _this.modal.remove();
      return _this.options.onHidden.call(_this);
    }).modal('show', options);
    return this.modal;
  };

  EkkoLightbox.prototype = {
    modal_shown: function() {
      var video_id,
        _this = this;
      if (!this.options.remote) {
        return this.error('No remote target given');
      } else {
        this.gallery = this.$element.data('gallery');
        if (this.gallery) {
          if (this.options.gallery_parent_selector === 'document.body' || this.options.gallery_parent_selector === '') {
            this.gallery_items = $(document.body).find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]');
          } else {
            this.gallery_items = this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]');
          }
          this.gallery_index = this.gallery_items.index(this.$element);
          $(document).on('keydown.ekkoLightbox', this.navigate.bind(this));
          if (this.options.directional_arrows && this.gallery_items.length > 1) {
            this.lightbox_container.prepend('<div class="ekko-lightbox-nav-overlay"><a href="#" class="' + this.strip_stops(this.options.left_arrow_class) + '"></a><a href="#" class="' + this.strip_stops(this.options.right_arrow_class) + '"></a></div>');
            this.modal_arrows = this.lightbox_container.find('div.ekko-lightbox-nav-overlay').first();
            this.lightbox_container.find('a' + this.strip_spaces(this.options.left_arrow_class)).on('click', function(event) {
              event.preventDefault();
              return _this.navigate_left();
            });
            this.lightbox_container.find('a' + this.strip_spaces(this.options.right_arrow_class)).on('click', function(event) {
              event.preventDefault();
              return _this.navigate_right();
            });
          }
        }
        if (this.options.type) {
          if (this.options.type === 'image') {
            return this.preloadImage(this.options.remote, true);
          } else if (this.options.type === 'youtube' && (video_id = this.getYoutubeId(this.options.remote))) {
            return this.showYoutubeVideo(video_id);
          } else if (this.options.type === 'vimeo') {
            return this.showVimeoVideo(this.options.remote);
          } else if (this.options.type === 'instagram') {
            return this.showInstagramVideo(this.options.remote);
          } else {
            return this.error("Could not detect remote target type. Force the type using data-type=\"image|youtube|vimeo\"");
          }
        } else {
          return this.detectRemoteType(this.options.remote);
        }
      }
    },
    strip_stops: function(str) {
      return str.replace(/\./g, '');
    },
    strip_spaces: function(str) {
      return str.replace(/\s/g, '');
    },
    isImage: function(str) {
      return str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
    },
    isSwf: function(str) {
      return str.match(/\.(swf)((\?|#).*)?$/i);
    },
    getYoutubeId: function(str) {
      var match;
      match = str.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
      if (match && match[2].length === 11) {
        return match[2];
      } else {
        return false;
      }
    },
    getVimeoId: function(str) {
      if (str.indexOf('vimeo') > 0) {
        return str;
      } else {
        return false;
      }
    },
    getInstagramId: function(str) {
      if (str.indexOf('instagram') > 0) {
        return str;
      } else {
        return false;
      }
    },
    navigate: function(event) {
      event = event || window.event;
      if (event.keyCode === 39 || event.keyCode === 37) {
        if (event.keyCode === 39) {
          return this.navigate_right();
        } else if (event.keyCode === 37) {
          return this.navigate_left();
        }
      }
    },
    navigate_left: function() {
      var src;
      this.showLoading();
      if (this.gallery_items.length === 1) {
        return;
      }
      if (this.gallery_index === 0) {
        this.gallery_index = this.gallery_items.length - 1;
      } else {
        this.gallery_index--;
      }
      this.$element = $(this.gallery_items.get(this.gallery_index));
      this.updateTitleAndFooter();
      src = this.$element.attr('data-remote') || this.$element.attr('href');
      return this.detectRemoteType(src, this.$element.attr('data-type'));
    },
    navigate_right: function() {
      var next, src;
      this.showLoading();
      if (this.gallery_items.length === 1) {
        return;
      }
      if (this.gallery_index === this.gallery_items.length - 1) {
        this.gallery_index = 0;
      } else {
        this.gallery_index++;
      }
      this.$element = $(this.gallery_items.get(this.gallery_index));
      src = this.$element.attr('data-remote') || this.$element.attr('href');
      this.updateTitleAndFooter();
      this.detectRemoteType(src, this.$element.attr('data-type'));
      if (this.gallery_index + 1 < this.gallery_items.length) {
        next = $(this.gallery_items.get(this.gallery_index + 1), false);
        src = next.attr('data-remote') || next.attr('href');
        if (next.attr('data-type') === 'image' || this.isImage(src)) {
          return this.preloadImage(src, false);
        }
      }
    },
    detectRemoteType: function(src, type) {
      var video_id;
      if (type === 'image' || this.isImage(src)) {
        this.options.type = 'image';
        return this.preloadImage(src, true);
      } else if (type === 'youtube' || (video_id = this.getYoutubeId(src))) {
        this.options.type = 'youtube';
        return this.showYoutubeVideo(video_id);
      } else if (type === 'vimeo' || (video_id = this.getVimeoId(src))) {
        this.options.type = 'vimeo';
        return this.showVimeoVideo(video_id);
      } else if (type === 'instagram' || (video_id = this.getInstagramId(src))) {
        this.options.type = 'instagram';
        return this.showInstagramVideo(video_id);
      } else {
        return this.error("Could not detect remote target type. Force the type using data-type=\"image|youtube|vimeo\"");
      }
    },
    updateTitleAndFooter: function() {
      var caption, footer, header, title;
      header = this.modal_content.find('.modal-header');
      footer = this.modal_content.find('.modal-footer');
      title = this.$element.data('title') || "";
      caption = this.$element.data('footer') || "";
      if (title || this.options.always_show_close) {
        header.css('display', '').find('.modal-title').html(title || "&nbsp;");
      } else {
        header.css('display', 'none');
      }
      if (caption) {
        footer.css('display', '').html(caption);
      } else {
        footer.css('display', 'none');
      }
      return this;
    },
    showLoading: function() {
      this.lightbox_body.html('<div class="modal-loading">Loading..</div>');
      return this;
    },
    showYoutubeVideo: function(id) {
      var aspectRatio, height, width;
      aspectRatio = 560 / 315;
      width = this.$element.data('width') || 560;
      width = this.checkDimensions(width);
      height = width / aspectRatio;
      this.resize(width);
      this.lightbox_body.html('<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + id + '?badge=0&autoplay=1&html5=1" frameborder="0" allowfullscreen></iframe>');
      if (this.modal_arrows) {
        return this.modal_arrows.css('display', 'none');
      }
    },
    showVimeoVideo: function(id) {
      var aspectRatio, height, width;
      aspectRatio = 500 / 281;
      width = this.$element.data('width') || 560;
      width = this.checkDimensions(width);
      height = width / aspectRatio;
      this.resize(width);
      this.lightbox_body.html('<iframe width="' + width + '" height="' + height + '" src="' + id + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
      if (this.modal_arrows) {
        return this.modal_arrows.css('display', 'none');
      }
    },
    showInstagramVideo: function(id) {
      var height, width;
      width = this.$element.data('width') || 612;
      width = this.checkDimensions(width);
      height = width;
      this.resize(width);
      this.lightbox_body.html('<iframe width="' + width + '" height="' + height + '" src="' + this.addTrailingSlash(id) + 'embed/" frameborder="0" allowfullscreen></iframe>');
      if (this.modal_arrows) {
        return this.modal_arrows.css('display', 'none');
      }
    },
    error: function(message) {
      this.lightbox_body.html(message);
      return this;
    },
    preloadImage: function(src, onLoadShowImage) {
      var img,
        _this = this;
      img = new Image();
      if ((onLoadShowImage == null) || onLoadShowImage === true) {
        img.onload = function() {
          var image;
          image = $('<img />');
          image.attr('src', img.src);
          image.addClass('img-responsive');
          _this.lightbox_body.html(image);
          if (_this.modal_arrows) {
            _this.modal_arrows.css('display', 'block');
          }
          return _this.resize(img.width);
        };
        img.onerror = function() {
          return _this.error('Failed to load image: ' + src);
        };
      }
      img.src = src;
      return img;
    },
    resize: function(width) {
      var width_total;
      width_total = width + this.border.left + this.padding.left + this.padding.right + this.border.right;
      this.modal_dialog.css('width', 'auto').css('max-width', width_total);
      this.lightbox_container.find('a').css('padding-top', function() {
        return $(this).parent().height() / 2;
      });
      return this;
    },
    checkDimensions: function(width) {
      var body_width, width_total;
      width_total = width + this.border.left + this.padding.left + this.padding.right + this.border.right;
      body_width = document.body.clientWidth;
      if (width_total > body_width) {
        width = this.modal_body.width();
      }
      return width;
    },
    close: function() {
      return this.modal.modal('hide');
    },
    addTrailingSlash: function(url) {
      if (url.substr(-1) !== '/') {
        url += '/';
      }
      return url;
    }
  };

  $.fn.ekkoLightbox = function(options) {
    return this.each(function() {
      var $this;
      $this = $(this);
      options = $.extend({
        remote: $this.attr('data-remote') || $this.attr('href'),
        gallery_parent_selector: $this.attr('data-parent'),
        type: $this.attr('data-type')
      }, options, $this.data());
      new EkkoLightbox(this, options);
      return this;
    });
  };

  $.fn.ekkoLightbox.defaults = {
    gallery_parent_selector: '*:not(.row)',
    left_arrow_class: '.glyphicon .glyphicon-chevron-left',
    right_arrow_class: '.glyphicon .glyphicon-chevron-right',
    directional_arrows: true,
    type: null,
    always_show_close: true,
    onShow: function() {},
    onShown: function() {},
    onHide: function() {},
    onHidden: function() {}
  };

}).call(this);