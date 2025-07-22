/*
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('.navbar > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300
		});

	// Nav.

		// Toggle.
			$(
				'<div id="navToggle">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

		// location drop-down

	const locations = [
		{id : 0,
		 name : "Washington D.C.",
		 address: "732 7th St NW",
		 city: "Washington",
		 state: "D.C.",
		 zip: "20001",
		 phone: "(202) 787-4426"
		},
		{
		id : 1,
		 name : "Arlington",
		 address: "2001 Clarendon Blvd",
		 city: "Arlington",
		 state: "VA",
		 zip: "22201",
		 phone: "(571) 733-2833"
		},
		{
		id : 2,
		 name : "Baltimore",
		 address: "1016 N Charles St",
		 city: "Baltimore",
		 state: "MD",
		 zip: " 21201",
		 phone: "(443) 366-2467"
		},
		{
		id : 3,
		 name : "Philedelphia",
		 address: "243 S 10th St",
		 city: "Philedelphia",
		 state: "PA",
		 zip: "19107",
		 phone: "(215) 357-8744"
		},
		{
		id: 4,
		name : "New York City",
		 address: "302 Grand St",
		 city: "New York",
		 state: "NY",
		 zip: "10002",
		 phone: "(917) 401-3041"
		}
	]
	const asrMap = L.map('map').setView([39.973, -75.133], 8)
	const sushiIcon = L.icon({
			iconURL: "/workspaces/Andromeda-Sushi-Ramen/images/icons8-kawaii-sushi-48.png",
			iconSize: [48, 48],
			iconAnchor: [0, 0]
		})
		;
	const asrGeoJSON = {
 		 "type" : "FeatureCollection",
 		 "features" : [
			{"type":"Feature","id":1,"geometry":
				{"type":"Point","coordinates":[-77.024301387822163,38.899509106063142]}
					,"properties": {
						"OBJECTID":1,
						"name":"Washington Downtown",
						"Brand":"Andromeda Sushi & Ramen",
						"Address":"732 7th St NW",
						"City":"Washington",
						"State":"DC",
						"ZIP":"20001",
						"phone_number":"(202) 787-4426",
						"lat":38.899509109999997,
						"long":-77.024301390000005,
						"year_opened":1999,
						"max_seating":50,
						"store_id":1,
						"manager":"Gary Ramenian",
						"marker-color":"#0a3863",
						"marker-size":"medium",
						"marker-symbol" : ""},
					},
				{"type":"Feature","id":2,"geometry":
					{"type":"Point",
						"coordinates":[-77.082279373114844,38.89184332802968]},
						"properties":{"OBJECTID":2,
						"name":"Arlington",
						"Brand":"Andromeda Sushi & Ramen",
						"Address":"2001 Clarendon Blvd",
						"City":"Arlington",
						"State":"VA",
						"ZIP":"22201",
						"phone_number":
						"(571) 733-2833",
						"lat":38.89184333,
						"long":-77.082279369999995,
						"year_opened":2003,
						"max_seating":40,
						"store_id":2,
						"manager":"Dave Sushian",
						"marker-color":"#0a3863",
						"marker-size":"medium",
						"marker-symbol" : ""}
					}
						,
						{"type":"Feature",
						"id":3,"geometry":
						{"type":"Point",
							"coordinates":[-76.616140311300754,39.301757454332574]},
							"properties":{"OBJECTID":3,
							"name":"Baltimore",
							"Brand":"Andromeda Sushi & Ramen",
							"Address":"1016 N Charles St",
							"City":"Baltimore",
							"State":"MD",
							"ZIP":"21201",
							"phone_number":"(443) 366-2467",
							"lat":39.301757449999997,
							"long":-76.616140310000006,
							"year_opened":2007,
							"max_seating":55,
							"store_id":3,
							"manager":"Hannah Galaxy",
							"marker-color":"#0a3863",
							"marker-size":"medium",
							"marker-symbol" : ""}},
						{"type":"Feature","id":4,"geometry":
							{"type":"Point",
							"coordinates":[-75.157525689162966,39.947111135298464]},
							"properties":
							{"OBJECTID":4,
								"name":"Philedelphia",
								"Brand":"Andromeda Sushi & Ramen",
								"Address":"243 S 10th St",
								"City":"Philedelphia",
								"State":"PA",
								"ZIP":"19107",
								"phone_number":"(215) 357-8744",
								"lat":39.947111139999997,
								"long":-75.15752569,
								"year_opened":2012,
								"max_seating":90,
								"store_id":4,
								"manager":"Kimberly Jackson",
								"marker-color":"#0a3863",
								"marker-size":"medium",
								"marker-symbol" : ""}},
							{"type":"Feature",
								"id":5,"geometry":
								{"type":"Point",
								"coordinates":[-73.991542569989008,40.717663639228867]},
							"properties":{
								"OBJECTID":5,
								"name":"New York City",
								"Brand":"Andromeda Sushi & Ramen",
								"Address":"302 Grand St",
								"City":"New York City",
								"State":"NY",
								"ZIP":"10002",
								"phone_number":"(917) 401-3041",
								"lat":40.717663639999998,
								"long":-73.991542569999993,
								"year_opened":2016,
								"max_seating":80,
								"store_id":5,
								"manager":"Joe Broad",
								"marker-color":"#0a3863",
								"marker-size":"medium",
								"marker-symbol" : ""},}]
	}

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"}).addTo(asrMap);
})

(jQuery);