import initPageHeader from './modules/page-header.js';
import initScrollNav from './modules/nav.js';

document.querySelectorAll('.page-header__wrapper').forEach(initPageHeader);
document.querySelectorAll('.page-header').forEach(initScrollNav);
