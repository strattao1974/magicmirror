/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: 'clock',
			position: 'top_left'
		},
	        {
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			header: 'Woy Woy Weather',
			config: {
				location: 'Woy Woy',
				locationID: '2175408',  //ID from http://www.openweathermap.org
				appid: '1dfb3f8cbb4b45a1c8641277dc2bbcc2'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			config: {
				location: 'Woy Woy',
				locationID: '2175408',  //ID from http://www.openweathermap.org
				appid: '1dfb3f8cbb4b45a1c8641277dc2bbcc2'
			}
		},
		{
        		module: 'MMM-SimpleLogo',
       			position: 'bottom_bar',   // This can be any of the regions.
        		config: {
				}
    		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "ABC News Headlines",
						url: "http://www.abc.net.au/news/feed/52498/rss.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
                	module: 'calendar_monthly',
                	position: 'top_left',
                	config: {
                        // The config property is optional
                        // Without a config, a default month view is shown
                        // Please see the 'Configuration Options' section for more information
                	}
            	},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
