var app = angular.module("headCountVol",['ui.bootstrap']);


app.controller("wkEffortController",function($scope) {
	$scope.workEffort = [	      				
							{workEffortId:1, workEffortName:'Cabinet Install',  dueDateMinus:"-20", totalVol:"500", totalVolEst:"$8,600,000.00" ,perUnitTotal:"$100,000.00" },
							{workEffortId:2, workEffortName:'Cable Splicing',  dueDateMinus:"-5", totalVol:"254", totalVolEst:"$1,200,000.00" ,perUnitTotal:"100" },
							{workEffortId:3, workEffortName:'Install Aerial',  dueDateMinus:"0", totalVol:"100", totalVolEst:"$86,000.00" ,perUnitTotal:"86" },
							{workEffortId:4, workEffortName:'New Cabinet',  dueDateMinus:"-33", totalVol:"40", totalVolEst:"$2,000,000.00" ,perUnitTotal:"10" }  
	                    ];
	$scope.roleData = [
		        {workEffortId:1, workEffortName:"CabinetInstall", role: "Placer", activity: "Tech", perUnitHours: "10", dueDateMinus: "-20", capitalRatio: "200" },
		        {workEffortId:1, workEffortName:"Cable Splicing", role: "Some Other Role", activity: "Testing", perUnitHours: "50", dueDateMinus: "-5", capitalRatio: "1400" }
			];
	$scope.workEffortLocation = [	      				
		      				{'prjId':1,'wefLocationId':1, 'workEffortId':1,'location':'NY',  'dmaEst':"05/22/2014", 'dmaVol':500, 'priority':'HIGH'},
		      				{'prjId':1,'wefLocationId':1, 'workEffortId':2,'location':'Boston',  'dmaEst':"05/22/2014", 'dmaVol':500, 'priority':'HIGH'},
		      				{'prjId':1,'wefLocationId':3, 'workEffortId':3,'location':'Detroit',  'dmaEst':"05/22/2014", 'dmaVol':500, 'priority':'HIGH'},
		      				{'prjId':1,'wefLocationId':1, 'workEffortId':1,'location':'Atlanta',  'dmaEst':"05/22/2014", 'dmaVol':500, 'priority':'HIGH'}		      				
		    ];
	$scope.globalRoles = [
		        {'roleId':1, roleName:'Splicer'},
		        {'roleId':2, roleName:'Placer'},
		        {'roleId':3, roleName:'Some Other Role'}
		    ];    
	$scope.globalActivities = [
		        {'activityId':1, activityName:'Tech'},
		        {'activityId':2, activityName:'Test'},
		        {'activityId':3, activityName:'Dev'},
		        {'activityId':3, activityName:'Manager'}
		    ]; 
	$scope.globalPriority = [
		        {'piorityId':1, type:'High'},
		        {'piorityId':2, type:'Medium'},
		        {'piorityId':3, type:'Low'}
		    ];   
	$scope.newRoles=[];
	$scope.newActivity=[];
	$scope.newPerUnitHours=[];
	$scope.newDueDateMinus=[];
	$scope.newCostRatio=[];	
	$scope.newDMALocation=[];
	$scope.newDMA=[];
	$scope.newPriority=[];
	$scope.newDMAVol=[];
	$scope.newDMAEstCost=[];
	
	// ------------------------------ WORK EFFORT FUNCTIONS ---------------------------------------
    $scope.addWorkEffort = function(){
		var data = {
	        		workEffortName: $scope.newWorkEffortName,
	        		dueDateMinus:$scope.newDueDateMinus,
	        		totalVol:$scope.newTotalVol,
	        		totalVolEst:$scope.newTotalVolEst,
	        		perUnitTotal:$scope.newPerUnitTotal
		     		};
        console.log('Reaching here');c
         
       $scope.workEffort.push(data);
        console.log($scope.workEffort);
    }
    
    // Removing an obj from WorkEffort
    $scope.removeWorkEffort = function(obj){
        console.log('Remove workEffort');
        
        if(obj != -1) {
        	$scope.workEffort.splice(obj, 1);
        }
    }
    
	// ------------------------------ ROLE FUNCTIONS ---------------------------------------------
    // Adding a Role to the database on click of the save button
    $scope.updateRoleDataInDB = function(roleDataRow){
    	console.log('Updating' + $scope.roleData);
    }
	 
    // Removing an object from roleData
    $scope.removeWorkEffortRole = function(obj){
        
        if(obj != -1) {
        	$scope.roleData.splice(obj, 1);
        }
    }

    $scope.addRoleData= function(){    
    	console.log ("Length: "+ $scope.newRoles.length);
    	for (var i=0; i< $scope.newRoles.length; i++){    		
    		var data = {
						workEffortName: $scope.workEffort.workEffortName,
						role: $scope.newRoles[i],
						activity:$scope.newActivity[i],
						perUnitHours:$scope.newPerUnitHours[i],
						dueDateMinus:$scope.newDueDateMinus[i],
						capitalRatio:$scope.newCostRatio[i]
            }
    		$scope.roleData.push(data);
            //console.log($scope.roleData);
    	}	
    }
	
    $scope.removeRole = function(obj){
        // console.log('data from remove'+obj);
         //console.log('before'+$scope.workEffort);
        // $scope.employeeList.splice(obj, obj);
         console.log('end'+$scope.roleData);
         
         if(obj != -1) {
         	$scope.roleData.splice(obj, 1);
         }
     }

	// ------------------------------ LOCATION FUNCTIONS ---------------------------------------
    $scope.addWorkEffortLocation = function(){
		var data = {
					prjId: $scope.workEffort.workEffortId,
					/* wefLocationId: $scope.workEffort.workEffortId, */
	        		workEffortId: $scope.workEffort.workEffortId,
	        		location:$scope.newDMALocation,
	        		dmaEst:$scope.newDMAEstCost,
	        		dmaVol:$scope.newDMAVol,
	        		priority:$scope.newDMAPriority
		     		};
       console.log('Reaching here');c
       $scope.workEffortLocation.push(data);
       console.log($scope.workEffortLocation);
    }
    
	/*
    $scope.removeWorkEffortLocation = function(obj){
        console.log('Remove workEffort');
        
        if(obj != -1) {
        	$scope.workEffort.splice(obj, 1);
        }
    }
	*/
});

app.controller('wkEffortExCollapseController', function ($scope) {

    $scope.tableRowExpanded = false;
    $scope.tableRowIndexCurrExpanded = "";
    $scope.tableRowIndexPrevExpanded = "";
    $scope.workEffortExpanded = "";
    $scope.wkEffortDataCollapse=[true];
    $scope.wkEffShow = 0;
    
    $scope.wkEffortDataCollapseFn = function () {
        for (var i = 0; $scope.workEffort.length - 1; i += 1) {
            $scope.wkEffortDataCollapse.append('true');
        }
    };

    $scope.selectTableRow = function (index, workEffortName) {
        if ($scope.wkEffortDataCollapse === 'undefined') {
            $scope.wkEffortDataCollapse = $scope.wkEffortDataCollapse();
        } else {

            if ($scope.tableRowExpanded === false && $scope.tableRowIndexCurrExpanded === "" && $scope.workEffortExpanded === "") {
                $scope.tableRowIndexPrevExpanded = "";
                $scope.tableRowExpanded = true;
                $scope.tableRowIndexCurrExpanded = index;
                $scope.workEffortExpanded = workEffortName;
                $scope.wkEffortDataCollapse[index] = false;
            } else if ($scope.tableRowExpanded === true) {
                if ($scope.tableRowIndexCurrExpanded === index && $scope.workEffortExpanded === workEffortName) {
                    $scope.tableRowExpanded = false;
                    $scope.tableRowIndexCurrExpanded = "";
                    $scope.workEffortExpanded = "";
                    $scope.wkEffortDataCollapse[index] = true;
                } else {
                    $scope.tableRowIndexPrevExpanded = $scope.tableRowIndexCurrExpanded;
                    $scope.workEffortExpanded = index;
                    $scope.workEffortExpanded = workEffortName;
                    $scope.wkEffortDataCollapse[$scope.tableRowIndexPrevExpanded] = true;
                    $scope.wkEffortDataCollapse[$scope.tableRowIndexCurrExpanded] = false;
                }
            }
        }
    }
    });