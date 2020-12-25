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

	let menuTrigger = document.querySelector('.header__menu'),
		closeMenuButton = document.querySelector('.side-nav__close'),
		darkerCurtain = document.querySelector('.page__darker'),
		pageBody = document.querySelector('body');

	menuTrigger.addEventListener('click', function() {
		pageBody.classList.toggle('open-nav');
	})
	closeMenuButton.addEventListener('click', function() {
		pageBody.classList.toggle('open-nav');
	})
	darkerCurtain.addEventListener('click', function() {
		pageBody.classList.toggle('open-nav');
	})

	let mainNavLinks = document.querySelectorAll('.nav-steps__item');

	window.addEventListener('scroll', event => {
		let fromTop = window.scrollY;

		mainNavLinks.forEach(link => {
			let section = document.querySelector(link.hash);

			if (
				section.offsetTop <= fromTop &&
				section.offsetTop + section.offsetHeight > fromTop
			) {
				link.classList.add('nav-steps__item_active');
			} else {
				link.classList.remove('nav-steps__item_active');
			}
		});
	});
}