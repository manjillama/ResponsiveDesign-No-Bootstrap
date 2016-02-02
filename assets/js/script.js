$(document).ready(function(){
	$(".menu-dinner").hide();
	$("#map").hide();
	
	/*$(".nav-menu").click(function(){
		$('.menu-dinner').toggle(400);
	}); */
	
	
	$('#lunch').click(function(){
		$('.menu-dinner').toggle(400);
		$('.menu-dinner').load('menu-content/lunch.html');
	});
	$('#dinner').click(function(){
		$('.menu-dinner').toggle(400);
		$('.menu-dinner').load('menu-content/breakfast.html');	
	});
	$('#taste').click(function(){
		$('.menu-dinner').toggle(400);
		$('.menu-dinner').load('menu-content/taste.html');
	});
	$('#beverage').click(function(){
		$('.menu-dinner').toggle(400);
		$('.menu-dinner').load('menu-content/beverage.html');
	});
	$('#location-holder').click(function(){
		$('#map').slideToggle(400);
		$('div.tumble-map').toggleClass('map-tumble');
	});
	
});
		// Creates a marker in DROP animation. Clicking on the marker will toggle the animation between a BOUNCE
	// animation and no animation.

var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 27.70412, lng: 85.32495}
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 27.70412, lng: 85.32495},
    title: "Leapfrog Academy!!!"
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}