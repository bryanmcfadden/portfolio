/**
 * Tracking js for Activity-List Page
 */
(function () {
    if($('#Activity-List.active').length) {
            
        var activitylist= $('.activity-list');
        var project= $('#project');
        var wpthemeControlBody = $('.wpthemeControlBody');
        
        //Source Filter
        wpthemeControlBody.on('click', '.filter .dropdown_sourceFilter dd > ul > li a', function() {
            _paq.push([ 'trackEvent', $('.filter .title').text().trim(), 'Filter', $(this).text().trim(), 0]);
        });
        
        //Tracking the Claim/Unclaim button
        activitylist.on('click','#activityListScroll .activityrow .act-cta span .btn', function(){
            _paq.push(['trackEvent',$(this).closest('.activity-list').find('.activity-tabs-header .at-header h3').text().split(' ')[0], 'Button', $(this).text().trim()+': '+$(this).closest('.activityrow').find('.act-name .title a').text().trim(),0]);
        });
        
        //Tracking the Source Name
        activitylist.on('click','#activityListScroll .activityrow .proj-name a', function(){
            _paq.push(['trackEvent',$(this).closest('.activity-list').find('.activity-tabs-header .at-header h3').text().split(' ')[0], 'Link', $(this).find('.projectname').text().trim(),0]);
        });
        
        //Tracking the Project Portlet Filter
        project.on('click', '.menudropdown_alignment select option:selected', function() {
            _paq.push([ 'trackEvent', $(this).closest('#project').find('.portlet-title .caption').text().trim(), 'Filter', $(this).text().trim(), 0]);
        });
     
        //Tracking Project Search button
        project.on('click', '.row a .table-search-option i',function(){
            _paq.push(['trackEvent',$(this).closest('#project').find('.portlet-title .caption').text().trim(), 'Search', $('#search').find('.modal-dialog .modal-header .modal-title').text().trim(),0]);
        });
         
        //Tracking Project Filter Button
        project.on('click', '.row a .table-filter-option i',function(){
            _paq.push(['trackEvent',$(this).closest('#project').find('.portlet-title .caption').text().trim(), 'Filter',$('#projectFilter').find('.modal-dialog .modal-header .modal-title').text().trim(),0]);
        }); 
         
        // Track inline expansion in Activities Section.
        $("#activityListScroll").on('click', '.act-name .glyphicon-chevron-down', function() {
            _paq.push(['trackEvent', $(this).closest('.activity-list').find('.activity-tabs-header .at-header h3').text().split(' ')[0], 'Inline Expansion', $(this).closest('.act-name').find('.title a').text().trim(),0]);
        });
         
        // Activities tab switching
        $('.wpthemeControlBody').on('click','.activity-list .activity-tabs-header li:not(.active) > a',function () {
            _paq.push(['trackEvent', $(this).closest('.activity-tabs-header').find('.at-header h3').text().split(' ')[0], 'Tab', $(this).text().trim(),0]);
        });
     
         
        // Track events for links in projects section.
        $('#project').on('click', 'a', function() {
        	if( !($(this).hasClass('cube-img-link') || $(this).hasClass('rocket-img-link')) ) {
        		_paq.push(['trackEvent', $('#project .portlet-title .caption').text().trim(), 'Link', $(this).text().trim(),0]);
        	}
        });
         
        //Tracking Include Activity
        $('#uniform-inlineCheckbox21 span input[type = checkbox]').on('click',function(){
        	if($(this).is(':checked')) {
        		_paq.push([ 'trackEvent',$('#project .portlet-title .caption').text().trim(), 'Add checkbox' ,$(this).closest('span').text().trim(), 0]);
        	} else {
        		_paq.push([ 'trackEvent',$('#project .portlet-title .caption').text().trim(), 'Remove checkbox' ,$(this).closest('span').text().trim(), 0]);
        	}
        });
         
        //Tracking for Number of Records seen.
        /*$('#project').on('click','.portlet div .base_row .dropdown-record-menu select option', function(){
            _paq.push(['trackEvent', $('#project .portlet-title .caption').text().trim(), 'Filter', "Records : "+$(this).text().trim(),0] );
        });*/
        
        // Track event on View Project Activities rocket icon.
        $('.rocket-img-link').click(function() {
        	_paq.push(['trackEvent', $('#project .portlet-title .caption').text().trim(), 'View Project Activities', $(this).closest('tr').find('.portlet-project-name a').text(),0]);
        });
         
        // Track event on View Project Qube icon.
        $('.cube-img-link').click(function() {
        	_paq.push(['trackEvent', $('#project .portlet-title .caption').text().trim(), 'View Project Qube', $(this).closest('tr').find('.portlet-project-name a').text(),0]);
        });
     
    }
})();