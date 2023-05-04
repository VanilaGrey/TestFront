import '../common/utils/focus-lock.js';

export default (headerElement) => {
	const togglerElement = headerElement.querySelector('.page-header__toggler');
	const navElement = document.querySelector('nav');

	const keyCloseHandler = (evt) => {
		if (evt.key.startsWith('Esc')) {
			closeHeader();
		}
	};

	const openHeader = () => {
		window.focusLock.lock('.page-header__wrapper');
		togglerElement.setAttribute('aria-expanded', 'true');
		document.addEventListener('keydown', keyCloseHandler);
		document.documentElement.classList.add('scroll-lock');
		headerElement.classList.add('is-active');
		navElement.classList.add('is-active');
	};

	const closeHeader = () => {
		window.focusLock.unlock('.page-header__wrapper');
		togglerElement.setAttribute('aria-expanded', 'false');
		document.removeEventListener('keydown', keyCloseHandler);
		document.documentElement.classList.remove('scroll-lock');
		headerElement.classList.remove('is-active');
		navElement.classList.remove('is-active');
	};

	document.addEventListener('click', (evt) => {
		const isTogglerTarget = evt.target === togglerElement;
		const isLinkTarget = evt.target.nodeName === 'A';

		if (!isTogglerTarget && !isLinkTarget && evt.target.closest('.page-header__wrapper')) {
			return;
		}

		if (headerElement.classList.contains('is-active')) {
			closeHeader();
			return;
		}

		if (isTogglerTarget) {
			openHeader();
		}
	});
};
