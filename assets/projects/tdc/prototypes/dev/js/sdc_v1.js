jQuery(document).ready(function($) {    
	//ChardinJs help overlay 
	//$('body').chardinJs('start');  

	// header functions ---------------------------------------------------
	
	   $('#search_source_list li a').click(function(){
			$('#spn_search_source').text(this.text);
	   });
	
	// titlebar functions -------------------------------------------------
	
	   $('#togToolkits').click(function(){
			$('#div_toolkit_dd').slideToggle("slow", function(){
				if($('#togToolkits').hasClass('toggler-toolkits-selected')){
					$('#togToolkits').removeClass('toggler-toolkits-selected');
					$('#togToolkits').attr('title', 'Show Tool Kits');
					//$('#togToolkits').pulsate('destroy');
				}else{
					$('#togToolkits').addClass('toggler-toolkits-selected');
					$('#togToolkits').attr('title', 'Hide Tool Kits');
					//$('#togToolkits').pulsate({
					//	color: '#ff0000',
					//	reach: 100,
					//	pause: 0,
					//	speed: 1000, 
					//	glow: true
					//});
				}
			});
		});
   
   // menu functions -----------------------------------------------------
   // footer functions ---------------------------------------------------
 });
