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
			'<!-- ROLES TABLE ---------------------------------------------------------------------------->'+
			'<table id="tbl_roles_' + id + '" class="display" cellspacing="0">'+
			'<thead>'+
			'<tr>'+
			'<th class="hdr_divider" style="width:23%;">Role</th>'+
			'<th class="hdr_divider" style="width:23%;">Activity</th>'+
			'<th class="hdr_divider">Per Unit Hours</th>'+
			'<th class="hdr_divider">Due Date Minus</th>'+
			'<th class="hdr_divider">Capital vs. Expense Ratio</th>'+
			'<th style="width:2%;"></th>'+
			'<th style="width:2%;"></th>'+
			'</tr>'+
			'</thead>'+
			'</table>'+
			'</div>'+
			'</div>'+
			'<div id="add_location_' + id + '" style="padding:5px 20px 10px 75px;">'+
			'<!-- YEAR AND ADD LOCATION BUTTON -------------------------------------------->'+
			'<div class="action-buttons">'+
			'<input id="btn_add_location_' + id + '" type="button" value="Add Location" class="btn btn-blue" />'+
			'</div>'+
			'<div class="add-role-container">'+
			'<!-- LOCATION DATATABLE STARTS HERE ------------------------------------------->'+
			'<div class="container" style="padding:0; width:100%;">'+
			'<table id="tbl_location_' + id + '" class="display child-table location" cellspacing="0">'+
			'<thead>'+
			'<tr>'+
			'<th style="width:2% !important;"></th>'+
			'<th style="width:50% !important;" class="hdr_divider">Location</th>'+
			'<th style="width:13%;" class="hdr_divider">Priority</th>'+
			'<th style="width:12%;" class="hdr_divider">City Volume</th>'+
			'<th style="width:19%;" class="hdr_divider">City Estimated Cost</th>'+
			'<th></th>'+
			'<th></th>'+
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
		var table = $('#tbl_location_' + id).DataTable( {
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
					"defaultContent": '' 				//<i class="fa fa-lg fa-edit remove"></i>
				},
				{
					"className":      'cAlign',
					"bSortable": 	  false,
					"info": 		  true,
					"orderable":      false,
					"data":           null,
					"defaultContent": '<i class="fa fa-lg fa-trash-o remove"></i>'
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
			{ "data": "activity" },
			{ "data": "per unit hours" },
			{ "data": "due date minus" },
			{ "data": "capital ratio" },
			{
				"className":      'cAlign',
				"bSortable": 	  false,
				"info": 		  true,
				"orderable":      false,
				"data":           null,
				"defaultContent": '' 					//<i class="fa fa-lg fa-edit remove"></i>
			},
			{
				"className":      'cAlign',
				"bSortable": 	  false,
				"info": 		  true,
				"orderable":      false,
				"data":           null,
				"defaultContent": '<i class="fa fa-lg fa-trash-o remove"></i>'
			}
		],
		"order": [[0, 'asc']]
	} );
}


