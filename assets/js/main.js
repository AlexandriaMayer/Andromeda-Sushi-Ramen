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

})(jQuery);

function accordion(){
	const acc = document.getElementsByClassName("location-item-title");
	for (let i = 0; i < acc.length; i++){
		acc[i].addEventListener("click", function(){
			this.classList.toggle("active")
		})
	let panel = this.nextElementSibling;
	if (panel.style.display === "block"){
		panel.style.display = "none";
	} else {
		panel.style.display = "block";
	}
	
	;
	
	}
}
// accordion();