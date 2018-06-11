/**
 * Tracking js for Activity-Detail Page
 */

(function() {
	if($('#Activity-Detail.active').length) {
		var wpthemeControlBody = $('.wpthemeControlBody');
		
		//Tracking for Team Chat
		wpthemeControlBody.on('click','#qubeProjectRoomUrlID',function(){
			_paq.push([ 'trackEvent','Feature', 'Launch' ,$(this).text().trim(), 0]);
		});
	
		//Tracking for Collaborate button
		wpthemeControlBody.on('click','.claimed-activities .btn-gap .btn',function(){
			_paq.push([ 'trackEvent','Feature', 'Launch' ,$(this).text().trim(), 0]);
		});
		
		//Tracking for Claim and Unclaimed events
		wpthemeControlBody.on('click','.claimed-activities .row .pull-left a',function(){
			_paq.push([ 'trackEvent',document.title, 'Button',$(this).text().trim() +" : "+$(this).closest('.claimed-activities').find('.progress-timeline .pt-heading span').text().trim(),0 ]);
			
		});
		
		//Tracking Links 
		$('#unclaimedDiv').on('click','.activityrow .actname a',function(){
			_paq.push([ 'trackEvent','Unclaimed -Activity', 'Link' ,$(this).text().trim(), 0]);
		});
		$('#claimedDiv').on('click','.activityrow .actname a',function(){
			_paq.push([ 'trackEvent','Claimed -Activity', 'Link' ,$(this).text().trim(), 0]);
		});
		
		//Tracking Tabs
		$('.row').on('click','.wpthemeControlBody nav ul li a',function(){
			_paq.push([ 'trackEvent',document.title, 'Tab' ,$(this).find('span').text().trim(), 0]);
		});
		
	}
})();

