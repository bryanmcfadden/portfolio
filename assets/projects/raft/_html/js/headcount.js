$(document).ready( function () {
	// ############ NOTIFICATION DISPLAYS #######################################
	// message types = confirmation, error, information, warning
	function DisplayMessage(type, message){
		$('.notify-container').addClass(type);
		$('.notify-container .message').text(message);
		// display message
		$('#notification-display').slideDown("fast");
	}
	
	// clear notification and hide
	$('.close-notify').on('click', function(){
		$('#notification-display').slideUp("fast");
		// clear message type
		$('.notify-container').removeClass('confirmation').removeClass('error').removeClass('information').removeClass('warning');
		// clear message
		$('.notify-container .message').text('');
	});
	
	// ############ RELOAD CONFRIMATION DIALOGS #################################
		$(document).on('click', '.btn-reload', function() {
			var item, id, name, verType, version;
			item = $(this).closest("div.tab-container").parent().prop("id");
			id = item.substr(10, item.length);
			
			// get project name, version type and version variables
			name = $('#txt_proj_name_'+id).val();
			verType = $('#sel_ver_type_'+id).val();
			version = $('#txt_version_'+id).val();
			
			$('.modal-dialog').css("top","10%").css("left", "35%").css("width","30%");
			$('#reload_modal').on('shown.bs.modal', function(){
				// create contents
				var m = 'This action will replace all data to their original values for the project:<br>';
					m+= '<span style="font-weight:bold;">' + name + ' - ' + verType + ' v'+version + '</span><br>';
					m+= 'Any changes made before saving will be lost.'+'<br><br>';
					m+= 'Are you sure you want to continue?';
				$('#reload_modal .modal-body').html(m);
			}).modal('show');
			
			$(document).on("click",'#reload_modal .modal-footer button[value="ok"]', function (){
				// AJAX SAVE GOES HERE
				// user confirmed reload and we need to fetch DB values and replace
				$('#reload_modal').modal('hide');
				// simulate data fetch via AJAX
				$('.action-loader').show();
				$('.action-loader').delay(3000).toggle("fast", function(){
					$('.action-loader').hide();
					var mess = "The project: " + name + ": " + verType + " v" + version + " has been successfully reloaded";
					DisplayMessage('confirmation', mess);
				});	
			});
		});
		
	// ############ SAVE DIALOGS ################################################
	// TODO: Save as , save
	$(document).on('click', '.save-project', function() {
		var save_type, par, id, name, verType, version;
		save_type = $(this).text();
		// get project id
		par = $(this).closest('div .container-fluid').parent().prop('id');
		id = par.substr(17,par.length);	//proj_details_act_
		
		// get project name, version type and version variables
		name = $('#txt_proj_name_1').val();
		verType = $('#sel_ver_type_1').val();
		version = $('#txt_version_1').val();
		
		// check to see what the save type is
		if(save_type == 'Save As'){
			// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ SAVE AS PROJECT ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
			//$('#hc_modal div .modal-content').load("modals/save_project_as.html");
			// set width and size of modal based on action (save/save as)
			$('.modal-dialog').css("top","10%").css("left", "20%").css("width","55%"); 
			$('#save_as_modal .modal-body').load('modals/save_project_as.html');
			$('#save_as_modal').on('shown.bs.modal', function(){
				// set name and version
				$('#save_as_modal #sa_view_project_name').val(name);
				// loop through version types and select current
				// TODO: adjust version numbers if changing the version type
				$('#sa_ver_list input[name="grp-version-type"]').each(function(index, value){
					if($(this).val() == $('#sel_ver_type_'+id).val()){
						$(this).prop('checked', true);
						$(this).parent().parent().addClass('selected');
						$(this).parent().next("div").html(version+1);
					}else{
						$(this).prop('checked', false);
						$(this).parent().parent().removeClass('selected');
					}
				});
							//$('#sel_ver_type_'+id)
			}).modal('show');
		}else{
			// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ SAVE PROJECT ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
			//$('#save_modal div .modal-content').load("modals/save_project.html");
			$('.modal-dialog').css("top","10%").css("left", "35%").css("width","30%");
			// pass values to modal for user confirmation
			$('#save_modal').on('shown.bs.modal', function(){
				// create contents
				var m = 'Saving will overwrite the existing project data for:<br>';
					m+= '<span style="font-weight:bold;">' + name + ' - ' + verType + ' v'+version + '</span><br><br>';
					m+= 'Would you like to continue?';
				$('#save_modal .modal-body').html(m);
			}).modal('show');
			
			$(document).on("click",'.modal-footer button[value="save"]', function (){
				// AJAX SAVE GOES HERE
				// user confirmed save and we need to save data
				$('#save_modal').modal('hide');
				var mess = "Your changes to the " + name + ": " + verType + " v" + version + " have been successfully saved";
				DisplayMessage('confirmation', mess);
			});
		}
	});

	// ############ COST DEFINITION FUNCTIONS ###################################
	$(document).on('click', '.hidden-help', function() {
		var id = $(this).prop("id");
		$('#'+id+'_details').slideDown("fast");
		
	});
	
	$(document).on('click', '.hidden-help-details i', function() {
		$(this).parent().parent().slideUp("fast");
	});
	
	// SECTION HEADER HELP FUNCTION -----------------------------
	$(document).on('click', '.hidden-help-expanded', function() {
		//var id = $(this).prop("id");
		// get id of expandable title area
		var id = $(this).closest("div .row").prop("id");
		// check to see if area is already expanded
		if($('#'+id+'_details').css("display")=="none"){
			// force click event to open section
			$('#'+id+' .expand-details').trigger("click");
		}
		// display definition
		$('#'+$(this).prop("id")+'_details').slideDown("fast");
	});
	
	// ############ PROJECT TAB FUNCTIONS #######################################
	// TODO: fix name so that it appears correctly on confirmation
	/*
	$(document).on('click', '.close-tab', function() {
		// get id of tab
		var ver = $(this).prev().text();
		var name = ver.trim();
		// confirm close
		var mess = "Are you sure you want to close the \n" + name + "\n tab?\n";
			mess+= "Any unsaved changes will be lost."
		var x = window.confirm(mess);
		if(x){
			// remove tab
		}
	});
*/
	
	// ############ EXPAND VERSION DESCRIPTIONS #################################
	$(document).on('click', '.expand-description', function() {
		var sel_row = $(this).parent().prev("td");
		var div = sel_row.children("div");
		if($(this).hasClass("fa-caret-down")){
			// close description
			$(this).removeClass("fa-caret-down").addClass("fa-caret-up");
			$(this).css("color", "orange");
			div.css("height", "");
		}else{
			$(this).removeClass("fa-caret-up").addClass("fa-caret-down");
			$(this).css("color", "#067ab4");
			div.css("height", "40px");
		}
	});
		
	// ############ EXPAND-ME ###################################################
	$(document).on('click', '.expand-me', function(){
		var id = $(this).closest("table").prop("id");
			if ($(this).hasClass('open')){
				$(this).removeClass('open');
				$(this).closest("tr").css("background-color", "#fff"); //#067ab4
				//$(this).closest("tr").css("color", "#333"); 
				$('#'+id+'_details').slideUp("fast");
			}else{
				$(this).addClass('open');
				$(this).closest("tr").css("background-color", "#e7f5f9");
				//$(this).closest("tr").css("color", "#333");
				$('#'+id+'_details').slideDown("fast");
			}
	});
	
	// ############ EXPAND-ALL SECTIONS #########################################
	$(document).on('click', '.expand-all', function(){
		// locate which project id we are in
		var id = $(this).prop("id").substr(11, $(this).prop("id").length);
		var div = 'vert_tab_cost_'+id;
		// check to see if we are expanding or collapsing
		if($(this).val()=="Expand All"){
			$('#'+ div+' .expand-details').each( function(index, value){
				if(!$(this).hasClass('open')){
					$(this).trigger("click");
				}
			});
			$(this).val("Collapse All");
		}else{
			$('#'+ div+' .expand-details').each( function(index, value){
				if($(this).hasClass('open')){
					$(this).trigger("click");
				}
			});
			$(this).val("Expand All");
		}
	});
	
	// ############ EXPANDO-GRID ################################################
	$('.expand-details').on('click', function(){
	/* var id = $(this).closest("table").prop("id"); */
		var id = $(this).parent().parent().prop("id");
		if ($(this).hasClass('open')){
			// in project edit mode
			$(this).removeClass('open');
			//$(this).closest("tr").css("background-color", "transparent");
			$('#'+id).css("background-color", "#fff");
			
			if(id!="project_search"){
				$('#'+id+'_main').css("background-color", "transparent");
			}
			$('#'+id+'_details').slideUp("fast");
		}else{
			$(this).addClass('open');
			// $(this).closest("tr").css("background-color", "#e7f5f9");
			$('#'+id).css("background-color", "#e7f5f9");
			
			if(id!="project_search"){
				$('#'+id+'_main').css("background-color", "#e7f5f9");
			}
			$('#'+id+'_details').slideDown("fast");
		}
	}); 
	
	// ############ HIDDEN CHILD ROW OPEN/CLOSE ##################################
	$('.child-table').on('click', 'td.details-control', function () {
		var t = $(this).closest('table').prop("id");
		var tr = $(this).closest('tr');
		var tbl = $('#'+t).DataTable();
		var row = tbl.row( tr );

		if ( row.child.isShown() ) {
			// This row is already open - close it
			row.child.hide();
			tr.removeClass('shown');
		}else{
			// Open row
			if($('#'+t).hasClass("we")){
				// expanding a work effort row
				row.child( ShowWorkEffortDetails( (row.index()) )).show();
				CreateWETable( (row.index()) );
				CreateRolesTable( (row.index()) );
				$('.add-role').closest("td").css("padding", "0");
			}else{
				// expanding location row to display volume data
				var idx = t.substr(13, t.length);
				row.child( ShowVolumeData( (idx) )).show();
				PopulateYears('vol_data_'+idx);
			}
			$('.volume-data-wrapper').closest("td").css("padding", "0"); 				
			tr.addClass('shown');
		}
	});	
	
	// ############ CANCEL ADD WORK EFFORT/ROLE/LOCATION TO DATAGRID  ################
	$(document).on('click', '.add-new-row .cancel', function(){
		var row,id,prefix;
		// get id from closest row
		row = $(this).closest('tr').prop("id");
		
		// work effort
		if($(this).closest("table").parent().parent().hasClass('work-effort')){
			id=row.substr(20, row.length);
			prefix = 'add_we_'+id;
		}
		// role
		if($(this).closest("table").parent().parent().hasClass('role')){
			id=row.substr(13, row.length);
			prefix = 'add_role_'+id;
		}
		// location
		if($(this).closest("table").parent().parent().hasClass('location')){
			id=row.substr(12, row.length);
			prefix = 'add_dma_'+id;
		}
		
		// clear all text values
		$('#'+row+' td input[type="text"]').each(function(index, value){
				$(this).val('');
		});
		
		// clear all select values
		$('#'+row+' td select').each(function(index, value){
				$(this).val('');
		});
		
		$('#'+prefix+' input[type="button"]').prop('disabled', false);
		$('#'+row).css("display", "none");
	});
	
	// ############ ADD NEW WORK EFFORT /LOCATION / ROLE ###########################
	$(document).on('click', '.action-buttons .btn', function(){
		var id;
		var val = $(this).prop('value');
		var item = $(this).parent().parent().prop('id');
		$(this).prop('disabled', true);
		switch(val){
			case "Add Role":
				id = item.substr(9, item.length);
				$('#add_new_role_'+id).slideDown("slow");
				break;
			case "Add DMA":
				id = item.substr(8, item.length);
				$('#add_new_dma_'+id).slideDown("slow");
				break;
			default:
				// Add Work Effort
				id = item.substr(7, item.length);
				$('#add_new_work_effort_'+id).slideDown("slow");
				break;
		}
	});
	
	// ############ IMPORT VALUES ############################################
	$(document).on('click', '.import-val', function(){
		alert('Import values to the Volume and Cost tabs');
		
	});
	
	// ############ VOLUME EDITING FUNCTIONS #################################
	$(document).on('click', '.volume-data input[type="text"]', function(){
		$(this).parent().css('background-color', '#e7f5f9');
		//alert('hello');
		
	});
	
	$(document).on('focusout', '.volume-data input[type="text"]', function(){
		$(this).parent().css('background-color', 'transparent');
		// set default value to 0 if no value entered
		var cellVal = $(this).val();
			if(cellVal == ''){
				$(this).val('0');
		}
	});
	
	/*
	$(document).on('click', '.save-project', function(){
		// retrieve project id
		var par_id = $(this).closest("div .tab-container").parent().prop("id");
		var id = par_id.substr(10, par_id.length);
		// display modal
		$('#mod_new_version').modal('show');
	});
	*/
	
	
	
	
	
	
	
	
	/*
	$('.project-search input[value="Create New Project"]').click( function(){
		
		alert('Create New Project');
	});
	$('.action-buttons input[value="Create New Version"]').click( function(){
		$('#mod_new_version').modal('show');
		//alert('Create New Version');
	});
	$(document).on('click','.modal-footer .close', function(){
		$('#modal_dialog').modal('hide');
	});
	*?
	// ############ ADD NEW PROJECT TAB ##########################################
	/*
	$('.action-buttons input[value="Create New Version"]').click( function(){
		//alert('new project');
		var ptabs = $("#proj_tabs").tabs();
		var tabTemplate = "<li><a href='#proj-tabs-new'>New Project<br>Bare Metal - v2.1</a><span class='close-tab' title='Close project tab'></span></li>";
		ptabs.find("ui-tabs-nav").append(tabTemplate);
		ptabs.append("<div id='proj-tabs-new'></div>");
		ptabs.tabs("refresh");
	});
	*/
});


		
		
		
		
		
		
		
// ############ WORK EFFORT FUNCTIONS ########################################
function EnableAddWorkEffort(val){
	if(val){
		// disable add button
		$('#btn_add_work_effort').prop('disabled', true);
		// show all text inputs
		$('.txt_input').each(function(index, value){
			$(this).removeClass('hide');
		});
		$('#lnk_cancel_work_effort').css('visibility', 'visible');
		$('#lnk_save_work_effort').css('visibility', 'visible');
		$('#txt_work_effort').focus();
	}else{
		// hide all text inputs
		$('.txt_input').each(function(index, value){
			$(this).val('');
			$(this).addClass('hide');
		});
		$('#lnk_cancel_work_effort').css('visibility', 'hidden');
		$('#lnk_save_work_effort').css('visibility', 'hidden');
		// enable add button
		$('#btn_add_work_effort').prop('disabled', false);
	}
}



















