jQuery(document).ready(function($) {    
	var headers = ["H1","H2","H3","H4","H5","H6"];

	$(".accordion").click(function(e) {
	  var target = e.target,
		  name = target.nodeName.toUpperCase();
		  //name = H1, H2, H3, H4
	  if($.inArray(name,headers) > -1) {
		var subItem = $(target).next();
		
		//slideUp all elements (except target) at current depth or greater
		var depth = $(subItem).parents().length;
		var allAtDepth = $(".accordion p, .accordion div").filter(function() {
		  if($(this).parents().length >= depth && this !== subItem.get(0)) {
			return true; 
		  }
		});
		$(allAtDepth).slideUp("fast");
		
		//slideToggle target content and adjust bottom border if necessary
		subItem.slideToggle("fast",function() {
			//$(".accordion :visible:last").css("border-radius","0 0 10px 10px");
			$(".accordion :visible:last");
		});
		/* This code is for demonstrational purposes only - not to be added into production code
		   Function: resets the arrows to down state upon selection of a different menu option
		--------------------------------------------------------------------------------- */
		if(name == "H1"){
			$(".accordion h2").each( function(index){
					$(this).removeClass('arrow-up').addClass('arrow-down');
				});
		}
		/* ------------------------------------------------------------------------------
		--------------------------------------------------------------------------------- */
		//Show reverse Arrow image when applicable
		if(name == "H2"){
			if($(target).hasClass('arrow-down')){
				$(target).removeClass('arrow-down').addClass('arrow-up');
			}else{
				$(target).removeClass('arrow-up').addClass('arrow-down');
			}
			//alert($(target).css("background-image"));
			//$(target).css({"border-bottom-right-radius":"0", "border-bottom-left-radius":"0"})
		}
		//$(target).css({"border-bottom-right-radius":"0", "border-bottom-left-radius":"0"});
	  }
	});
	
	/* This code is for demonstrational purposes only - not to be added into production code
		   Function: resets the arrows to down state upon selection of a different menu option
		--------------------------------------------------------------------------------- */
	$(".accordion a").click(function(e) {
		var target = e.target;
		
		alert(target);
	});
	/* ------------------------------------------------------------------------------
	   --------------------------------------------------------------------------------- */
});