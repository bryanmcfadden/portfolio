
	// http://simpleweatherjs.com/
	// https://developer.yahoo.com/weather/documentation.html#codes
	// http://woeid.rosselliot.co.nz/lookup/
	
	
	// Return the class name of the weather icon equal to the weather code passed
	// With code from 0 to 47 (exception with 3200) / more info at https://developer.yahoo.com/weather/documentation.html#codes
	function returnWeatherIcon(code)
	{
		code = parseInt(code);
		
		/*Sun : 31 - 34, 36
		Cloud : 19 - 27
		Sun/cloud : 28 - 30, 44
		Rain : 8 - 12, 17, 35, 40
		Thunder : 0 - 4, 37 - 39, 45, 47
		Snow : 5 - 7, 13 - 16, 18, 41 - 43, 46
		Indisponible : 3200
		ND : !{0 - 47 ; 3200}*/
		
		var tabIconsCode = {
			"sun" : new Array(31, 32, 33, 34, 36),
			"cloud" : new Array(19, 20, 21, 22, 23, 24, 25, 26, 27),
			"sun-cloud" : new Array(28, 29, 30, 44),
			"rain" : new Array(8, 9, 10, 11, 12, 17, 35, 40),
			"thunder" : new Array(0, 1, 2, 3, 4, 37, 38, 39, 45, 47),
			"snow" : new Array(5, 6, 7, 13, 14, 15, 16, 18, 41, 42, 43, 46)
		  };
	  
	  	if( $.inArray(code , tabIconsCode['sun']) != -1 ) { return "icon-sun-3"; }
		else if( $.inArray(code , tabIconsCode['cloud']) != -1 ) { return "icon-clouds"; }
		else if( $.inArray(code , tabIconsCode['sun-cloud']) != -1 ) { return "icon-cloud-sun-1"; }
		else if( $.inArray(code , tabIconsCode['rain']) != -1 ) { return "icon-rain-2"; }
		else if( $.inArray(code , tabIconsCode['thunder']) != -1 ) { return "icon-cloud-flash-alt"; }
		else if( $.inArray(code , tabIconsCode['snow']) != -1 ) { return "icon-snow-alt"; }
		else {return "icon-nd";}
	}
	
  
  
  	// Return string of the date, with day the number of day after current day date (0 by default || 1)
	function returnDate(day)
	{
		day = day || 0;
		
		var dateError = false;
		var theDate = new Date();
		theDate.setDate(theDate.getDate() + day);
		
		var dd = theDate.getDate();
		var mm = theDate.getMonth()+1; //January is 0!
		var yyyy = theDate.getFullYear();
		
		switch (mm) {
			case 1: mm = "Jan."; break;
			case 2: mm = "Feb."; break;
			case 3: mm = "Mar."; break;
			case 4: mm = "Apr."; break;
			case 5: mm = "May"; break;
			case 6: mm = "June"; break;
			case 7: mm = "Jul."; break;
			case 8: mm = "Aug."; break;
			case 9: mm = "Sept."; break;
			case 10: mm = "Oct."; break;
			case 11: mm = "Nov"; break;
			case 12: mm = "Dec."; break;
			
			default: dateError = true;
		}
		
		if(dateError)
		{
			theDate = false;
		}
		else
		{
			theDate = dd+" "+mm+" "+yyyy;
		}
		
		return theDate;
	}
	
	
	// with day = "today" || "tomorrow"
	function majWeatherBox(day)
	{
		if(day == "today")
		{
			$("#weatherIcon").removeClass().addClass(tabWorldCities[indexTabWorldCities][8]);
			$(".meteoTempInfo").html(tabWorldCities[indexTabWorldCities][7]);
			$(".meteoDateInfo").html(todayDate);
		}
		else if(day == "tomorrow")
		{
			$("#weatherIcon").removeClass().addClass(tabWorldCities[indexTabWorldCities][10]);
			$(".meteoTempInfo").html(tabWorldCities[indexTabWorldCities][9]);
			$(".meteoDateInfo").html(tomorrowDate);
		}
		else
		{
			console.log("ERR-WEATHERINFO001");
		}
	}
	
	
	function setTabWorldCitiesWithWeather()
	{
		var tabLength = tabWorldCities.length;
		
		/* // Solution A - classique mais impossible à cause du plugin... :	
		
		// impossible d'utiliser variable i à l'intérieur du callback success :( d'où les if à répétition de la solution B --'
		
		for(var i = 0 ; i < tabLength ; i++)
		{
			$.simpleWeather({ woeid: tabWorldCities[i][6], unit: 'c', success: function(weather) {
					tabWorldCities[2][7] = weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp ; // weather temp. of today
					tabWorldCities[2][8] = returnWeatherIcon(weather.code) ; // weather icon of today
					tabWorldCities[2][9] = weather.forecast[1].low+"&deg; ~ "+weather.forecast[1].high+'&deg; '+weather.units.temp ; // weather temp. of tomorrow
					tabWorldCities[2][10] = returnWeatherIcon(weather.forecast[1].code) ; ; // weather icon of tomorrow
				}
			});
		}*/
		
		// Solution B :
		
		
			$.simpleWeather({ woeid: tabWorldCities[0][6], unit: 'c', success: function(weather) {
					tabWorldCities[0][7] = weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp ; // weather temp. of today
					tabWorldCities[0][8] = returnWeatherIcon(weather.code) ; // weather icon of today
					tabWorldCities[0][9] = weather.forecast[1].low+"&deg; ~ "+weather.forecast[1].high+'&deg; '+weather.units.temp ; // weather temp. of tomorrow
					tabWorldCities[0][10] = returnWeatherIcon(weather.forecast[1].code) ; // weather icon of tomorrow
				}
			});
			$.simpleWeather({ woeid: tabWorldCities[1][6], unit: 'c', success: function(weather) {
					tabWorldCities[1][7] = weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp ; // weather temp. of today
					tabWorldCities[1][8] = returnWeatherIcon(weather.code) ; // weather icon of today
					tabWorldCities[1][9] = weather.forecast[1].low+"&deg; ~ "+weather.forecast[1].high+'&deg; '+weather.units.temp ; // weather temp. of tomorrow
					tabWorldCities[1][10] = returnWeatherIcon(weather.forecast[1].code) ; // weather icon of tomorrow
				}
			});
			$.simpleWeather({ woeid: tabWorldCities[2][6], unit: 'c', success: function(weather) {
					tabWorldCities[2][7] = weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp ; // weather temp. of today
					tabWorldCities[2][8] = returnWeatherIcon(weather.code) ; // weather icon of today
					tabWorldCities[2][9] = weather.forecast[1].low+"&deg; ~ "+weather.forecast[1].high+'&deg; '+weather.units.temp ; // weather temp. of tomorrow
					tabWorldCities[2][10] = returnWeatherIcon(weather.forecast[1].code) ; // weather icon of tomorrow
				}
			});
			$.simpleWeather({ woeid: tabWorldCities[3][6], unit: 'c', success: function(weather) {
					tabWorldCities[3][7] = weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp ; // weather temp. of today
					tabWorldCities[3][8] = returnWeatherIcon(weather.code) ; // weather icon of today
					tabWorldCities[3][9] = weather.forecast[1].low+"&deg; ~ "+weather.forecast[1].high+'&deg; '+weather.units.temp ; // weather temp. of tomorrow
					tabWorldCities[3][10] = returnWeatherIcon(weather.forecast[1].code) ; // weather icon of tomorrow
				}
			});
			$.simpleWeather({ woeid: tabWorldCities[4][6], unit: 'c', success: function(weather) {
					tabWorldCities[4][7] = weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp ; // weather temp. of today
					tabWorldCities[4][8] = returnWeatherIcon(weather.code) ; // weather icon of today
					tabWorldCities[4][9] = weather.forecast[1].low+"&deg; ~ "+weather.forecast[1].high+'&deg; '+weather.units.temp ; // weather temp. of tomorrow
					tabWorldCities[4][10] = returnWeatherIcon(weather.forecast[1].code) ; // weather icon of tomorrow
				}
			});
			$.simpleWeather({ woeid: tabWorldCities[5][6], unit: 'c', success: function(weather) {
					tabWorldCities[5][7] = weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp ; // weather temp. of today
					tabWorldCities[5][8] = returnWeatherIcon(weather.code) ; // weather icon of today
					tabWorldCities[5][9] = weather.forecast[1].low+"&deg; ~ "+weather.forecast[1].high+'&deg; '+weather.units.temp ; // weather temp. of tomorrow
					tabWorldCities[5][10] = returnWeatherIcon(weather.forecast[1].code) ; // weather icon of tomorrow
				}
			});
			$.simpleWeather({ woeid: tabWorldCities[6][6], unit: 'c', success: function(weather) {
					tabWorldCities[6][7] = weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp ; // weather temp. of today
					tabWorldCities[6][8] = returnWeatherIcon(weather.code) ; // weather icon of today
					tabWorldCities[6][9] = weather.forecast[1].low+"&deg; ~ "+weather.forecast[1].high+'&deg; '+weather.units.temp ; // weather temp. of tomorrow
					tabWorldCities[6][10] = returnWeatherIcon(weather.forecast[1].code) ; // weather icon of tomorrow
				}
			});
			$.simpleWeather({ woeid: tabWorldCities[7][6], unit: 'c', success: function(weather) {
					tabWorldCities[7][7] = weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp ; // weather temp. of today
					tabWorldCities[7][8] = returnWeatherIcon(weather.code) ; // weather icon of today
					tabWorldCities[7][9] = weather.forecast[1].low+"&deg; ~ "+weather.forecast[1].high+'&deg; '+weather.units.temp ; // weather temp. of tomorrow
					tabWorldCities[7][10] = returnWeatherIcon(weather.forecast[1].code) ; // weather icon of tomorrow
				}
			});
			$.simpleWeather({ woeid: tabWorldCities[8][6], unit: 'c', success: function(weather) {
					tabWorldCities[8][7] = weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp ; // weather temp. of today
					tabWorldCities[8][8] = returnWeatherIcon(weather.code) ; // weather icon of today
					tabWorldCities[8][9] = weather.forecast[1].low+"&deg; ~ "+weather.forecast[1].high+'&deg; '+weather.units.temp ; // weather temp. of tomorrow
					tabWorldCities[8][10] = returnWeatherIcon(weather.forecast[1].code) ; // weather icon of tomorrow
				}
			});
			$.simpleWeather({ woeid: tabWorldCities[9][6], unit: 'c', success: function(weather) {
					tabWorldCities[9][7] = weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp ; // weather temp. of today
					tabWorldCities[9][8] = returnWeatherIcon(weather.code) ; // weather icon of today
					tabWorldCities[9][9] = weather.forecast[1].low+"&deg; ~ "+weather.forecast[1].high+'&deg; '+weather.units.temp ; // weather temp. of tomorrow
					tabWorldCities[9][10] = returnWeatherIcon(weather.forecast[1].code) ; // weather icon of tomorrow
				}
			});
			$.simpleWeather({ woeid: tabWorldCities[10][6], unit: 'c', success: function(weather) {
					tabWorldCities[10][7] = weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp ; // weather temp. of today
					tabWorldCities[10][8] = returnWeatherIcon(weather.code) ; // weather icon of today
					tabWorldCities[10][9] = weather.forecast[1].low+"&deg; ~ "+weather.forecast[1].high+'&deg; '+weather.units.temp ; // weather temp. of tomorrow
					tabWorldCities[10][10] = returnWeatherIcon(weather.forecast[1].code) ; // weather icon of tomorrow
				}
			});
			$.simpleWeather({ woeid: tabWorldCities[11][6], unit: 'c', success: function(weather) {
					tabWorldCities[11][7] = weather.low+"&deg; ~ "+weather.high+'&deg; '+weather.units.temp ; // weather temp. of today
					tabWorldCities[11][8] = returnWeatherIcon(weather.code) ; // weather icon of today
					tabWorldCities[11][9] = weather.forecast[1].low+"&deg; ~ "+weather.forecast[1].high+'&deg; '+weather.units.temp ; // weather temp. of tomorrow
					tabWorldCities[11][10] = returnWeatherIcon(weather.forecast[1].code) ; // weather icon of tomorrow
				}
			});
	}