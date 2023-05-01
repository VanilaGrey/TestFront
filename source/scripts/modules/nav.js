const POSITION = 281;

const initScrollNav = () => {
	const nav = document.querySelector('.page-header');
	if (window.pageYOffset < POSITION) {
		nav.classList.add('page-header__fixed');
		nav.classList.remove('page-header__hidden');
		document.body.classList.add('page-header__fixed');
	} else {
		nav.classList.remove('page-header__fixed');
		nav.classList.add('page-header__hidden');
		document.body.classList.remove('page-header__fixed');
	}
};

window.addEventListener('scroll', initScrollNav);

export default initScrollNav;
