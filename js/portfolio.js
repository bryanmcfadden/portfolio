$(document).ready(function(){

  $('#btnViewResume').on('click', function(){
    $('#btnViewResume, #aboutArea h4').fadeOut(500, function(){
      DisplayResumeButtons(true);
    });
  });

  $('.resume').bind({
    mouseenter: function(e) {
      clearTimeout(timerResumeButtons);
    },
    mouseleave: function(e) {
    timerResumeButtons = setTimeout(function(){DisplayResumeButtons(false);},5000);
    //  alert(timerResumeButtons);
    }
  });
  /*
  $('.resume').on("mouseover", function(){
    clearTimeout(viewResumeButtons);
    alert(viewresumeButtons);
  });

  $('a.resume').on("mouseout", function(){
    alert(viewResumebuttons);
    viewResumeButtons = setTimeout(function(){
      DisplayResumeButtons(false);
    },
    15000
    );
  });
*/
  var timerResumeButtons;

  function DisplayResumeButtons(val){
    if(val){
      // start timer, hide button, change test and show doc/pdf buttons
      timerResumeButtons = setTimeout(function(){DisplayResumeButtons(false);},5000);
      $('.resume').css({"width":"60px", "visibility":"visible"});
      $('.resume-doc').css("margin-right", "15px");
      $('.resume-pdf').css("margin-left", "80px");
      $('.resume').animate({"opacity":"1", "margin-left":"0"}, 700);

      $('#aboutArea h4').html(".docx or .pdf?");
      $('#aboutArea h4').fadeIn(500);
    }else{
      // hide doc/pdf buttons, change test and show view resume button
      clearTimeout(timerResumeButtons);
      $('.resume').animate({"opacity":"0", "margin-left":"0"}, 1000, function(){});
      $('.resume').css({"width":"1px", "visibility":"hidden"});
      $('.resume-doc').css("margin-right", "0px");

      $('#aboutArea h4').fadeOut(300, function(){
        $('#aboutArea h4').html("Want to know more?");
        $('#btnViewResume, #aboutArea h4').fadeIn(500);
      });
    }
  }
});
