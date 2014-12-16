 (function($){
	 	$(document).ready(function(){
			function initialize() {
				var loc, map, marker, infobox;
			
				loc = new google.maps.LatLng(-16.700440,  /* latitude  */
											 -49.276539); /* longitude */
			
				map = new google.maps.Map($("#map")[0], {
					zoom: 16,
					center: loc, 
					mapTypeId: google.maps.MapTypeId.ROADMAP
				});
				
				marker = new google.maps.Marker({
					map: map,
					position: loc,
					visible: true
				});

				infobox = new InfoBox({
					content: $("#infobox")[0],
					pixelOffset: new google.maps.Size(-140, 20),
		 	         boxStyle: {
		 	            background: "#2980b9",
		 	            opacity: 1,
		 	            height: "80px",
		 	            width: "300px"
		 	        },
				});
				
				google.maps.event.addListener(marker, 'click', function() {
					infobox.open(map, this);
					map.panTo(loc);
				});
			}

		initialize();
	});
})(jQuery);