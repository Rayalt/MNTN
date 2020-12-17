'use strict';

window.onload = function() {
	window.addEventListener('scroll', function() {
		let topDistance,
			layers,
			layer,
			i,
			depth,
			movement,
			translate;
		topDistance = this.pageYOffset;
		layers = document.querySelectorAll('[data-type="parallax"]');
		for (i = 0, length = layers.length; i < length; i++) {
			layer = layers[i];
			depth = layer.getAttribute('data-depth')
			movement = -(topDistance * depth);
			translate = 'translate3d(0, ' + movement + 'px, 0)';
			layer.style.transform = translate;
		}
    });

	let navItems = document.querySelectorAll('.nav-steps__item');
	navItems.forEach(function(item) {
    	item.addEventListener('click', function (evt) {
    		navItems.forEach(function(item) {
        		evt.target !== item ? item.classList.remove('nav-steps__item_active') : item.classList.add('nav-steps__item_active');
    		});
    	});
	});
}