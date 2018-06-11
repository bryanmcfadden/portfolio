function ShowWorkEffortDetails(id){
	// must pass in id to populate the roles container
	// to keep each work effort separated
	return	'<!-- ADD ROLE CONTAINER ------------------------------->'+
			'<div class="add-role">'+
			'<div id="add_role_'+ id +'" class="role-wrapper">'+
			'<div class="action-buttons">'+
			'<input id="btn_add_role_' + id + '" type="button" value="Add Role" class="btn btn-blue" />'+
			'</div>'+
			'<div class="add-role-container">'+
			'<!-- ADD NEW ROLE SLIDE OUT ----------------------------------------->'+
			'<div id="add_new_role_' + id + '" class="add-new">'+
			'<table>'+
			'<tr>'+
			'<td class="title">Add a new role:</td>'+
			'</tr>'+
			'<tr class="data">'+
			'<td class="role-name">'+
			'<input id="txt_add_role_' + id + '" type="text" style="width:98%;" />'+
			'</td>'+
			'<td class="per-unit-hours">'+
			'<input id="txt_per_unit_hours_'+ id + '" type="text" style="width:50%;" />'+
			'</td>'+
			'<td class="due-date-minus">'+
			'<input id="txt_role_due_date_minus_' + id + '" type="text" style="width:50%;" />'+
			'</td>'+
			'<td class="capital-ratio">'+
			'<input id="txt_capital_ratio_' + id + '" type="text" style="width:30%;" />'+
			'</td>'+
			'<td class="action-btn">'+
			'<a class="add role" href="javascript:void(0);">Add</a>'+
			'</td>'+
			'<td class="action-btn">'+
			'<a class="cancel role" href="javascript:void(0);">Cancel</a>'+
			'</td>'+
			'</tr>'+
			'</table>'+
			'</div>'+
			'<!-- ROLES TABLE ---------------------------------------------------------------------------->'+
			'<table id="tbl_roles_' + id + '" class="display" cellspacing="0">'+
			'<thead>'+
			'<tr>'+
			'<th class="hdr_divider" style="width:30%;">Role</th>'+
			'<th class="hdr_divider">Per Unit Hours</th>'+
			'<th class="hdr_divider">Due Date Minus</th>'+
			'<th class="hdr_divider">Capital vs. Expense Ratio</th>'+
			'<th style="width:5%;"></th>'+
			'<th style="width:5%;"></th>'+
			'</tr>'+
			'</thead>'+
			'</table>'+
			'</div>'+
			'</div>'+
			'<div id="add_location_' + id + '" style="padding:5px 20px 10px 150px;">'+
			'<!-- YEAR AND ADD LOCATION BUTTON -------------------------------------------->'+
			'<div class="action-buttons">'+
			'<input id="btn_add_location_' + id + '" type="button" value="Add Location" class="btn btn-blue" />'+
			'</div>'+
			'<!-- ADD NEW LOCATION HIDDEN ROW ---------------------------------------------->'+
			'<div class="add-role-container">'+
			'<div id="add_new_location_' + id + '" class="add-new">'+
			'<table>'+
			'<tr colspan="7">'+
			'<td class="title">Add a new location:</td>'+
			'</tr>'+
			'<tr class="data">'+
			'<td style="width:53%;">'+
			'<input type="text" id="txt_loc_name_' + id + '" style="width:85%; margin-right:15px;" />'+
			'<input type="button" class="btn btn-blue" value="Search"  />'+
			'</td>'+
			'<td style="width:9%;">'+
			'<select id="sel_loc_priority_' + id + '"">'+
			'<option value="high">High</option>'+
			'<option value="medium">Medium</option>'+
			'<option value="low">Low</option>'+
			'</select>'+
			'</td>'+
			'<td style="width:10%;">'+
			'<input type="text" id="txt_loc_city_volume_' + id + '" />'+
			'</td>'+
			'<td style="width:17%;">'+
			'<input type="text" id="txt_loc_city_est_cost_' + id + '" />'+
			'</td>'+
			'<td class="action-btn">'+
			'<a class="add location" href="javascript:void(0);">Add</a>'+
			'</td>'+
			'<td class="action-btn">'+
			'<a class="cancel location" href="javascript:void(0);">Cancel</a>'+
			'</td>'+
			'</tr>'+
			'</table>'+
			'</div>'+
			'<!-- LOCATION DATATABLE STARTS HERE ------------------------------------------->'+
			'<div class="container" style="padding:0; width:100%;">'+
			'<table id="we_location_' + id + '" class="display child-table we_location" cellspacing="0">'+
			'<thead>'+
			'<tr>'+
			'<th style="width:5% !important;"></th>'+
			'<th style="width:48% !important;" class="hdr_divider">Location</th>'+
			'<th style="width:10%;" class="hdr_divider">Priority</th>'+
			'<th style="width:10%;" class="hdr_divider">City Volume</th>'+
			'<th style="width:17%;" class="hdr_divider">City Estimated Cost</th>'+
			'<th style="width:5% !important;"></th>'+
			'<th style="width:5% !important;"></th>'+
			'</tr>'+
			'</thead>'+
		    '</table>'+
		    '</div>'+
			'</div>'+
			'</div>'+
			'</div>';
}

function CreateWETable(id){
	// instantiate datatable()
	//$(document).ready(function() {
		var table = $('#we_location_' + id).DataTable( {
			"bFilter":  false,								
			"bSort": true,
			"ajax": "data/locations.txt",
			"sDom": "<'top'><'clear'>",
			"aoColumnDefs": [
				{ "bSortable": false, "aTargets": [0]},
				{ "bSortable": false, "aTargets": [5]},
				{ "bSortable": false, "aTargets": [6]}
			],
			"columns": [
				{
					"className":      'details-control',
					"info": 		  true,
					"orderable":      false,
					"data":           null,
					"defaultContent": ''
				},
				{ "data": "location" },
				{ "data": "priority" },
				{ "data": "city volume" },
				{ "data": "city estimated cost" },
				{
					"className":      'cAlign',
					"bSortable": 	  false,
					"info": 		  true,
					"orderable":      false,
					"data":           null,
					"defaultContent": '' 				//<a href="javascript:void(0);">Edit</a>
				},
				{
					"className":      'cAlign',
					"bSortable": 	  false,
					"info": 		  true,
					"orderable":      false,
					"data":           null,
					"defaultContent": '<a href="javascript:void(0);" class="remove">Remove</a>'
				}
			],
			"order": [[1, "asc"]]
		});
	//});
}

function CreateRolesTable(id){
	var table = $('#tbl_roles_' +id).DataTable( {
		"bFilter":  false,								//hides filtering and disables filter listeners 
		"bSort": true,
		"ajax": "data/roles.txt",
		"sDom": "<'top'><'clear'>",						//hides the show entries selector alt = "sDom": "<'top'>rt<'bottom'flp><'clear'>"
		"columns": [
			{ "data": "role" },
			{ "data": "per unit hours" },
			{ "data": "due date minus" },
			{ "data": "capital ratio" },
			{
				"className":      'cAlign',
				"bSortable": 	  false,
				"info": 		  true,
				"orderable":      false,
				"data":           null,
				"defaultContent": '' 					//<a href="javascript:void(0);">Edit</a>
			},
			{
				"className":      'cAlign',
				"bSortable": 	  false,
				"info": 		  true,
				"orderable":      false,
				"data":           null,
				"defaultContent": '<a href="javascript:void(0);" class="remove">Remove</a>'
			}
		],
		"order": [[0, 'asc']]
	} );
}