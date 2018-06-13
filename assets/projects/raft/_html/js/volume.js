function ShowVolumeData (rowid) {
	// for testing - var rowid = 1;
	var volume = '<div class="volume-data-wrapper">';
		volume+= '<div id="vol_data_' + rowid +'" class="volume-data">';
		volume+= '<div class="container">';
		volume+= '<div class="row">';
		volume+= '<div class="col-md-8 units">';
		volume+= '<span>Number of units:</span>';
		volume+= '<input type="text" id="vol_number_of_units_' + rowid + '" />';
		volume+= '<input type="button" value="Monthly Spread" class="btn btn-blue" />';
		volume+= '</div>';
		volume+= '<div class="col-md-4 txtRight">';
		volume+= '<span>Year:</span>';
		// this select is dynamically populated for the current year +6
		volume+= '<select class="select-year"></select>';
		volume+= '</div>';
		volume+= '</div>';
		volume+= '</div>';
		volume+= '<div id="vol_data_table_' + rowid + '">';
		volume+= '<table>';
		volume+= '<tr class="header">';
		volume+= '<th style="width:22%;"></th>';
		volume+= '<th style="width:6%;">Jan</th>';
		volume+= '<th style="width:6%;">Feb</th>';            
		volume+= '<th style="width:6%;">Mar</th>';
		volume+= '<th style="width:6%;">Apr</th>';
		volume+= '<th style="width:6%;">May</th>';
		volume+= '<th style="width:6%;">Jun</th>';
		volume+= '<th style="width:6%;">Jul</th>';
		volume+= '<th style="width:6%;">Aug</th>';
		volume+= '<th style="width:6%;">Sep</th>';
		volume+= '<th style="width:6%;">Oct</th>';
		volume+= '<th style="width:6%;">Nov</th>';
		volume+= '<th style="width:6%;">Dec</th>';
		volume+= '<th style="width:6%;">Total</th>';
		volume+= '</tr>';
		volume+= '<tr><td class="volume-data-name">Volume</td>';
		volume+= '<td><input id="vol_jan_' + rowid + '" type="text" value="0" /></td>';
		volume+= '<td><input id="vol_feb_' + rowid + '" type="text" value="0" /></td>';
		volume+= '<td><input id="vol_mar_' + rowid + '" type="text" value="0" /></td>';
		volume+= '<td><input id="vol_apr_' + rowid + '" type="text" value="0" /></td>';
		volume+= '<td><input id="vol_may_' + rowid + '" type="text" value="0" /></td>';
		volume+= '<td><input id="vol_jun_' + rowid + '" type="text" value="0" /></td>';
		volume+= '<td><input id="vol_jul_' + rowid + '" type="text" value="0" /></td>';
		volume+= '<td><input id="vol_aug_' + rowid + '" type="text" value="0" /></td>';
		volume+= '<td><input id="vol_sep_' + rowid + '" type="text" value="0" /></td>';
		volume+= '<td><input id="vol_oct_' + rowid + '" type="text" value="0" /></td>';
		volume+= '<td><input id="vol_nov_' + rowid + '" type="text" value="0" /></td>';
		volume+= '<td><input id="vol_dec_' + rowid + '" type="text" value="0" /></td>';
		volume+= '<td><span id="vol_total_' + rowid + '">[AUTO]</span></td>';
		volume+= '</tr>';
		volume+= '<tr>';
		volume+= '<td class="volume-data-name">Volume %</td>';
		volume+= '<td><span id="vol_per_jan_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_per_feb_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_per_mar_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_per_apr_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_per_may_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_per_jun_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_per_jul_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_per_aug_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_per_sep_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_per_oct_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_per_nov_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_per_dec_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_per_total_' + rowid + '">[AUTO]</span></td>';
		volume+= '</tr>';
		volume+= '<tr>';
		volume+= '<td class="volume-data-name">Estimated Cost</td>';
		volume+= '<td>';
		volume+= '<input id="est_cost_jan_' + rowid + '" type="text" value="0" /></td>';
		volume+= '</td>';
		volume+= '<td>';
		volume+= '<input id="est_cost_feb_' + rowid + '" type="text" value="0" /></td>';
		volume+= '</td>';
		volume+= '<td>';
		volume+= '<input id="est_cost_mar_' + rowid + '" type="text" value="0" /></td>';
		volume+= '</td>';
		volume+= '<td>';
		volume+= '<input id="est_cost_apr_' + rowid + '" type="text" value="0" /></td>';
		volume+= '</td>';
		volume+= '<td>';
		volume+= '<input id="est_cost_may_' + rowid + '" type="text" value="0" /></td>';
		volume+= '</td>';
		volume+= '<td>';
		volume+= '<input id="est_cost_jun_' + rowid + '" type="text" value="0" /></td>';
		volume+= '</td>';
		volume+= '<td>';
		volume+= '<input id="est_cost_jul_' + rowid + '" type="text" value="0" /></td>';
		volume+= '</td>';
		volume+= '<td>';
		volume+= '<input id="est_cost_aug_' + rowid + '" type="text" value="0" /></td>';
		volume+= '</td>';
		volume+= '<td>';
		volume+= '<input id="est_cost__sep_' + rowid + '" type="text" value="0" /></td>';
		volume+= '</td>';
		volume+= '<td>';
		volume+= '<input id="est_cost_oct_' + rowid + '" type="text" value="0" "/></td>';
		volume+= '</td>';
		volume+= '<td>';
		volume+= '<input id="est_cost_nov_' + rowid + '" type="text" value="0" /></td>';
		volume+= '</td>';
		volume+= '<td>';
		volume+= '<input id="est_cost_dec_' + rowid + '" type="text" value="0" /></td>';
		volume+= '</td>';
		volume+= '<td>';
		volume+= '<span id="est_cost_total_' + rowid + '">[AUTO]</span>';
		volume+= '</td>';
		volume+= '</tr>';
		volume+= '<tr>';
		volume+= '<td class="volume-data-name">Estimated Cost %</td>';
		volume+= '<td><span id="vol_est_cost_jan_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_est_cost_feb_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_est_cost_mar_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_est_cost_apr_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_est_cost_may_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_est_cost_jun_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_est_cost_jul_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_est_cost_aug_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_est_cost_sep_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_est_cost_oct_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_est_cost_nov_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_est_cost_dec_' + rowid + '">[val]</span></td>';
		volume+= '<td><span id="vol_per_total_' + rowid + '">[AUTO]</span></td>';
		volume+= '</tr>';
		volume+= '</table>';
		volume+= '</div>';
		volume+= '</div>';
		volume+= '</div>';
		
	return volume;
	}