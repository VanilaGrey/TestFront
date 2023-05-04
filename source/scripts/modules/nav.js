const POSITION = 200;

const initScrollNav = () => {
	const nav = document.querySelector('.nav');
	if (window.pageYOffset < POSITION) {
		nav.classList.add('nav__fixed');
		nav.classList.remove('nav__hidden');
		document.nav.classList.add('nav__fixed');
	} else {
		nav.classList.remove('nav__fixed');
		nav.classList.add('nav__hidden');
		document.nav.classList.remove('nav__fixed');
	}
};

window.addEventListener('scroll', initScrollNav);

export default initScrollNav;
