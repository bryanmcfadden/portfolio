//DATATABLE STUFF
function phunnels(options, table) {
    otable = table.DataTable();

    //apply icon to headers
    table.find('thead th').each(function(index) {
        columnOptions = options[index];
        if(columnOptions) {

            applyFilterMenu(this, columnOptions);
            applySort(this, index, columnOptions, otable);
            applySearch(this, index, columnOptions, otable);
        }
    });







    //Helpers
    function applyFilterMenu(th, columnOptions) {
        headerLabel = $(th).html();
        $(th).html('<span>' + headerLabel + '</span>');

        var filterDropdown = $('<div class="filterDropdown"></div>').appendTo(th);
        var filterIcon = '<a data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-filter"></span></a>';
        var dropdownMenu = '<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel"></ul>';

        $(th).append(filterDropdown);
        $(filterDropdown).append(filterIcon);
        $(filterDropdown).append(dropdownMenu);

        if(columnOptions['menu-position'] == 'right') {
            $(th).find('.dropdown-menu').addClass('dropdown-menu-right');
        }

    } //END applyFilterMenu

    function applySort(th, colNum, columnOptions, otable) {
        var sortASC, sortDESC;

        if(columnOptions.sort) {
            for (i=0; i< columnOptions.sort.length; i++) {
                opt = columnOptions.sort[i];

                if(opt.asc) {
                    sortASC = '<a class="sortASC" href="javascript:void(0);">' + opt.asc + '</a>';
                }
                if(opt.desc) {
                    sortDESC = '<a class="sortDESC" href="javascript:void(0);">' + opt.desc + '</a>';
                }
            }
            if(sortASC) {
                $(th).find('.dropdown-menu').append('<li>' + sortASC + '</li>');
            }
            if(sortDESC) {
                $(th).find('.dropdown-menu').append('<li>' + sortDESC + '</li>');
            }

            sortASCButton = $(th).find('.sortASC');
            if(sortASCButton.length > 0) {

                sortASCButton.on('click', function(e) {
                    otable.order([colNum, 'asc']).draw();
                });
            }
            
            sortDESCButton = $(th).find('.sortDESC');
            if(sortDESCButton.length > 0) {
                
                sortDESCButton.on('click', function(e) {
                    otable.order([colNum, 'desc']).draw();
                });
            }

        }

    } //END applySort

    function applySearch(th, colNum, columnOptions, otable) {
        if(columnOptions.search) {
            var searchInput = '<div class="input-group"><input type="text" class="searchFilter form-control" placeholder="Search"></input><span class="input-group-btn"><button class="btn btn-default apply-filter" type="button"><span class="icon-plus"></span></button></span></div>';
            $(th).find('.dropdown-menu').append('<li class="searchItem separated">' + searchInput + '</li>');

            var dropdownmenu = $(th).find('.dropdown-menu');
            var searchItem = $(th).find('.searchItem');
            var searchField = $(th).find('.searchFilter');
            var inputButton = $(th).find('.apply-filter');

            //User clicks "+" button
            inputButton.click(function(e) {
                e.stopPropagation();
                var enterEvent = $.Event('keyup');
                enterEvent.which = 13; // ENTER
                searchField.trigger(enterEvent);
            });

            //User types something
            searchField.on('keyup click', function(e) {
                e.stopPropagation();
                var filterList = $(searchItem).find('.filterList');
                var theField = $(this);
                var fieldValue = $(this).val();

                //User pressed enter or clicked so ADD FILTER
                if(e.which == 13 && fieldValue.replace(/\s/g, '').length) {
                    theField.val('');

                    var resetFilters = '<a href="javascript:void(0);" class="resetFilters">Reset</a>';
                    
                    if(filterList.length <= 0) {
                        searchItem.append('<ul class="filterList"></ul>');
                        filterList = $(searchItem).find('.filterList');
                        filterList.append('<li class="resetFilters">' + resetFilters + '</li>');

                    }
                    filterList = searchItem.find('.filterList');
                    var clearFilter = '<a href="javascript:void(0);" class="clearFilter"><span class="icon-close"></span></a>';
                    $('<li><span class="filterLabel">' + fieldValue + '</span>' + clearFilter + '</li>').insertBefore(filterList.find('li.resetFilters'));
                }

                filterList = searchItem.find('.filterList');

                //User removes a filter
                filterList.find('.clearFilter').click(function(e) {
                    fieldValue = theField.val();

                    e.stopPropagation();
                    $(this).parent().remove();


                    filterString = buildFilterString(filterList, fieldValue);
                    filterCol(filterString, colNum, otable);

                    if(filterList.children().length <= 1) {
                        searchItem.find('.resetFilters').parent().remove();
                        filterList.remove();
                    }


                });

                //User resets filters
                searchItem.find('.resetFilters').click(function(e) {
                    e.stopPropagation();
                    $(filterList).remove();
                    $(this).parent().remove();
                    filterCol('', colNum, otable);

                });

                //After all of that....filter the list
                filterList = searchItem.find('.filterList');

                filterString = buildFilterString(filterList, fieldValue);
                filterCol(filterString, colNum, otable);

            });
        }
    } //END applySearch

    //Events
    otable.on('search.dt', function(e) {
        cacheOpenChildRows(this);
    });

    otable.on('draw.dt', function(e) {
        $(this).find('tr').each(function() {
            row = $(this);

            if(row.data('child-row-open')) {
                childRow = $(this).data('child-row');
                childRow.insertAfter(row);
                childRow.show();
            }
        });

    });

    $('.filterDropdown').on('hide.bs.dropdown', function(e) {
        var fieldValue = ''; 

        if($(this).find('.searchFilter').length > 0) {
            fieldValue = $(this).find('.searchFilter').val();
        }

        if($(this).find('.filterList').children().length > 0 || fieldValue.replace(/\s/g, '').length) {
            if($(this).hasClass('filter-active') !== true) {
                $(this).addClass('filter-active');
            }
        } else {
            $(this).removeClass('filter-active');
        }
    });
}

function filterCol(filterString, colNum, otable) {
    otable.column(colNum).search(filterString, true, true).draw();   
}

function buildFilterString(filterList, val) {
    list = $(filterList).children();

    filters = [];
    list.each(function() {
        filters.push($(this).find('.filterLabel').text());
    });

    if(val !== '') {
        if(filters.indexOf(val) == -1) {
            filters.push( val );
        }
    } 
    filterString = '(?=.*';
    separator = ')(?=.*';

    filterString += filters.join(separator);
    filterString += ')';
    return filterString;
}


// Caches all child rows and deletes them from the table. This is necessary because DataTables will not work with colspan.
function cacheChildRows(tableSelector, childRowSelector) {

    if(!childRowSelector) {
        childRowSelector = '.child-row';
    }

    $(tableSelector + '> tbody tr').each(function(){
        var row = $(this);
        var childRow = row.next(childRowSelector);

        if(childRow.length>0){
            row.data('child-row', childRow);
        }
    });

    $(childRowSelector).remove();
}

// Checks to see if any child rows are open. Saves the state of opened or closed with a boolean that will be 
// checked when the draw.dt event is fired.
function cacheOpenChildRows(tableObject, childRowSelector) {
    if(!childRowSelector) {
        childRowSelector = '.child-row';
    }

    $(tableObject).find('tr').each(function() {
        row = $(this);
        childRow = $(this).next(childRowSelector);

        if(childRow.length > 0) {
            row.data('child-row-open', true);
        } else {
            row.data('child-row-open', false);
        }

    });
}