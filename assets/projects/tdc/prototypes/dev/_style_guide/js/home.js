/**
 * Tracking js for Home Page
 */
(function() {
	// if Home section visited.
	if($('#Home.active').length) {
		
		// Track links / buttons on panels.
		var panel = $('.panel');
		var modal = $('.modal-dialog');
		
		//Adding Content-tracking
		_paq.push(['trackContentImpression', $('#summary').find('#roleCat select option:selected').text(), $('#summary').find('#actionCat select option:selected').text(), '']);
	   	
		panel.on('click', '.panel-body a', function(){
	   		_paq.push([ 'trackEvent', $(this).closest('.panel').find('.panel-heading .heading-text').text().trim(), 'Link', $(this).text().trim(), 0]);
		
	   		//Tracking The User Role
			var UR= $('#summary').find('#roleCat select option:selected').text();
			
			//Tracking What do you want to do as custom variable
			var toDo= $('#summary').find('#actionCat select option:selected').text();
			
			_paq.push([ "setCustomVariable", 2, UR, toDo, "page"]);
			_paq.push([ "setCustomVariable", 3, $(this).closest('.panel').find('.panel-heading .heading-text').text().trim(), $(this).text().trim(), "page"]);
			
			//Adding Content Impression
			_paq.push(['trackContentInteraction', $(this).closest('.panel').find('.panel-heading .heading-text').text().trim(), UR, toDo, $(this).text().trim()]);
			
	   	});
		
	   	panel.on('click', '.panel-footer button', function(){
	   		_paq.push([ 'trackEvent', $(this).closest('.panel').find('.panel-heading .heading-text').text(), 'Button', $(this).text(), 0]);
		});
		
		modal.on('click', '.notifications-list a',function(){
			if($(this).parents('#bookmarks-modal').length != 1) {
				_paq.push(['trackEvent', $(this).closest('.modal-dialog').find('.modal-header .modal-title').text().trim(),'Link',$(this).text().trim(),0]);
			
				//Tracking The User Role
				var UR= $('#summary').find('#roleCat select option:selected').text();
				//Tracking What do you want to do as custom variable
				var toDo= $('#summary').find('#actionCat select option:selected').text();
				
				_paq.push([ "setCustomVariable", 2,UR, toDo, "page" ]);
				_paq.push([ "setCustomVariable", 3, $(this).closest('.modal-dialog').find('.modal-header .modal-title').text().trim(), $(this).text().trim(), "page" ]);
				
				//Adding Content Impression
				_paq.push(['trackContentInteraction', $(this).closest('.notifications').find('.modal-header .modal-title').text().trim(),$('#summary').find('#roleCat select option:selected').text() ,$('#summary').find('#actionCat select option:selected').text(), $(this).text().trim()]);
			}
		});
		
		// Track filter
		var wpthemeControlBody = $('.wpthemeControlBody');
		wpthemeControlBody.on('click', '#submitBtn', function() {
			if(wpthemeControlBody.find('#roleCat select option:selected').length) {
				_paq.push([ 'trackEvent', document.getElementById('summary').parentNode.childNodes[1].innerHTML.trim(), 'Role', wpthemeControlBody.find('#roleCat select option:selected').text(), 0]);
			}
			
			if(wpthemeControlBody.find('#actionCat select option:selected').length) {
				_paq.push([ 'trackEvent', document.getElementById('summary').parentNode.childNodes[1].innerHTML.trim(), document.getElementById('actionCat').childNodes[0].nodeValue.trim(), wpthemeControlBody.find('#actionCat select option:selected').text(), 0]);			
			}
		});
		
		//Tracking ViewALL in MyActivities
		wpthemeControlBody.on('click','.col-lg-12 .total .btn-view a',function(){
			_paq.push(['trackEvent', $(this).closest('.col-lg-12').find('.header').text().trim(),'Button',$(this).text().trim(),0]);
		});
		
		// Tracking the Tabs
		wpthemeControlBody.on('click','.tab-sdc li',function(){
			_paq.push([ 'trackEvent', document.title, 'Tab', $(this).find('a').text().trim(), 0]);   
		});
		
		//Tracking Navigation Bar
		$('#sdcHomeheronav').on('click','.nav-stacked li',function(){
			_paq.push(['trackEvent','Home Navigation' ,'Tab',$(this).text(),0]);
		});
		
		//Events -Read More
		
		$('.inLineContainer .block .itemLink a').on("click",function(){
			_paq.push([ 'trackEvent', $(this).closest('.main-page-panel').find('h4').text().trim(), 'Link' ,'Read More : '+$(this).closest('.block ').find('h3').text().trim(), 0]);
			});
		
		// Test for What's New
		wpthemeControlBody.on('click','#st1 .newsitem .row .col-lg-3 .btn-blue',function(){
			_paq.push(['trackEvent',$(this).closest('span').find('.tab-h4').text().trim(),'Button','Read More : '+$(this).closest('.newsitem').find('.headline h4').text().trim(),0]);
		});
	}
})();