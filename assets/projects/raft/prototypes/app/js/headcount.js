$(document).ready( function () {
	
	// ############ PROJECT TAB FUNCTIONS #######################################
	// TODO: fix name so that it appears correctly on confirmation
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
	
	// ############ EXPAND-ME FUNCTIONS #########################################
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
		
	// ############ EXPANDO-GRID FUNCTIONS ######################################
	$('.expand-details').on('click', function(){
	var id = $(this).closest("table").prop("id");
		if ($(this).hasClass('open')){
			// in project edit mode
			$(this).removeClass('open');
			$(this).closest("tr").css("background-color", "transparent");
			if(id!="project_search"){
				$('#'+id+'_main').css("background-color", "transparent");
			}
			$('#'+id+'_details').slideUp("fast");
		}else{
			$(this).addClass('open');
			$(this).closest("tr").css("background-color", "#e7f5f9");
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
				var idx = t.substr(12, t.length);
				row.child( ShowVolumeData( (idx) )).show();
			}
			$('.volume-data-wrapper').closest("td").css("padding", "0"); 				
			tr.addClass('shown');
		}
	});	
	
	// ############ CANCEL ADD ROLE/LOCATION TO DATAGRID  ###########################
	$(document).on('click', '.add-new .cancel', function(){
		var val, id, item, btn;
		// get id then strip off number at end
		val = $(this).closest('div').prop("id");
		if($(this).hasClass('role')){
			id = val.substr(13, val.length);
			item = '#add_new_role_'+id;
			$('#add_role_'+id +' input[type=button][value="Add Role"]').prop('disabled', false);
		}
		if($(this).hasClass('location')){
			id = val.substr(17, val.length);
			item = '#add_new_location_'+id;
			$('#add_location_'+id +' input[type=button][value="Add Location"]').prop('disabled', false);
		}
		if($(this).hasClass('work effort')){
			id = val.substr(11, val.length);
			item = '#add_new_we_'+id;
			$('#add_we_'+id +' input[type=button][value="Add Work Effort"]').prop('disabled', false);
		}	
		//alert(id);
		$(item + ' input[type="text"]').each(function(index,value){
				$(this).val('');
		})
		$(item).slideUp("fast");
	});
	
	// ############ ADD ROLE/LOCATION TO DATAGRID  #################################
	$(document).on('click', '.add-new .add', function(){
		var val, id, item, btn, tbl;
		// get id then strip off number at end
		val = $(this).closest('div').prop("id");
		// adding a new role
		if($(this).hasClass('role')){
			id = val.substr(13, val.length);
			item = '#add_new_role_'+id;
			btn = '#add_role_'+id;
			$('#tbl_roles_'+id).DataTable().row.add({
				"role": $('#txt_add_role_' + id).val(),
				"per unit hours" : $('#txt_per_unit_hours_' + id).val(),
				"due date minus": $('#txt_role_due_date_minus_' + id).val(),
				"capital ratio": $('#txt_capital_ratio_' + id).val()
			}).draw();
			$('#add_role_'+id +' input[type=button][value="Add Role"]').prop('disabled', false);
		}
		// adding a new work effort
		if($(this).hasClass('work effort')){
			id = val.substr(11, val.length);
			item = '#add_new_we_'+id;
			btn = '#add_we_'+id;
			$('#tbl_we_'+id).DataTable().row.add({
				"work effort": $('#txt_add_we_' + id).val(),
				"due date minus" : $('#txt_due_date_minus_' + id).val(),
				"total volume": $('#txt_total_volume_' + id).val(),
				"total estimated cost": $('#txt_total_est_cost_' + id).val(),
				"per unit total": $('#txt_per_unit_total_' + id).val()
			}).draw();
			$('#add_we_'+id +' input[type=button][value="Add Work Effort"]').prop('disabled', false);
		}
		// adding a new location
		if($(this).hasClass('location')){
			id = val.substr(17, val.length);
			item = '#add_new_location_'+id;
			btn = '#add_location_'+id;
			$('#we_location_'+id).DataTable().row.add({
				"location": $('#txt_loc_name_' + id).val(),
				"priority" : $('#sel_loc_priority_' + id).val(),
				"city volume": $('#txt_loc_city_volume_' + id).val(),
				"city estimated cost": $('#txt_loc_city_est_cost_' + id).val()
			}).draw();
			$('#add_location_'+id +' input[type=button][value="Add Location"]').prop('disabled', false);
		}
		
		//clear all values before hiding inputs
		$(item + ' input[type="text"]').each(function(index,value){
				$(this).val('');
		})
		$(item).slideUp("fast");
	})
	
	// ############ REMOVE ROWS FROM DATAGRID FUNCTIONS  ########################
	$(document).on('click', '.dataTable .remove', function(){
		var tbl, d, sel_row, idx, mess, name;
		// get table name id
		tbl = $(this).closest('table');
		// get row name
		sel_row = $(this).closest('tr');
		// confirm deletion
		idx = $(tbl).DataTable().row(sel_row).index();
		name = $(tbl).DataTable().cells(idx, 1).data();
		mess = 'Are you sure you want to remove ' + name[0] + ' from your list?'
		// validate the removal of the list item
		// TODO: later include Work Effort, Role or Location to confirmation
		var x = window.confirm(mess);
		if(x){
			// remove row from table and refresh
			$(tbl).DataTable().row(sel_row).remove().draw();	
		}
		});
	
	// ############ ADD NEW LOCATION / ROLE #####################################
	$(document).on('click', '.action-buttons .btn', function(){
		var id;
		var val = $(this).prop('value');
		var item = $(this).parent().parent().prop('id');
		$(this).prop('disabled', true);
		switch(val){
			case "Add Role":
				id = item.substr(9, item.length);
				// drop down add new role box
				$('#add_new_role_'+id).slideDown("fast");
				$('#txt_add_role_'+id).focus();
				break;
			case "Add Location":
				id = item.substr(13, item.length);
				// drop down add new role box
				$('#add_new_location_'+id).slideDown("fast");
				$('#txt_add_location_'+id).focus();
				break;
			case "Edit":
				id = item.substr(17, item.length);
				// enable all controls
				$('#div_proj_details_'+id+ ' .ctrl').each(function(index, value){
					$(this).prop('disabled', false);
				});
				//hide edit button and enable save button
				$(this).hide();
				$('#'+item + ' input[value="Cancel"]').show();
				$('#'+item + ' input[value="Save"]').prop('disabled', false).addClass("btn-blue");
				break;
			case "Cancel":
				id = item.substr(17, item.length);
				// disable all controls
				$('#div_proj_details_'+id+ ' .ctrl').each(function(index, value){
					$(this).prop('disabled', true);
				});
				//hide cancel button and disable save button
				$(this).hide();
				$('#'+item + ' input[value="Edit"]').show().prop('disabled', false);
				$('#'+item + ' input[value="Save"]').prop('disabled', true).removeClass("btn-blue");
				break;
			default:
				// adding a new work effort
				id = item.substr(7, item.length);
				$('#add_new_we_'+id).slideDown("fast");
				$('#txt_add_we_'+id).focus();
				break;
		}
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

function SaveWorkEffort(){
	var table = $('#example').DataTable();
	table.row.add({
		 "work effort": $('#txt_work_effort').val(),
         "due date minus": $('#txt_due_date_minus').val(),
         "total volume": $('#txt_total_volume').val(),
         "total estimated cost": $('#txt_total_est_cost').val(),
         "per unit total": $('#txt_per_unit_cost').val()
	}).draw();
	EnableAddWorkEffort(false);	
}




















