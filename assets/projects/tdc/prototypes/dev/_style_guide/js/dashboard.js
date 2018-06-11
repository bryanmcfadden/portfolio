/**
 * Tracking js for Dashboard Page
 */
(function () {
	if($('#Dashboard.active').length){
		
		//In-line Expansion
		$('.ge-summary').on('click', '.row .dash-summary-container .heading .icon-plus',function(){
				_paq.push(['trackEvent', 'Dashboard', 'Inline Expansion',  $(this).closest('.heading').find('h3').text().trim(),0]);
		});
		 
		$('.dashboard-toppanel').on('click','.title .icon-plus',function(){
				_paq.push(['trackEvent', 'Dashboard', 'Inline Expansion',  $(this).closest('.title').find('h3').text().trim(),0]);
		});
		 
		 //Filter
		 $('select').on("select2-selecting", function(e) {
			 _paq.push(['trackEvent',$(this).closest('.dashboard-toppanel').find('.title h3').text().trim(), 'Filter',  e.object.text,0]);
		 });
	}	
})();