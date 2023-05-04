import initPageHeader from './modules/page-header.js';
import initScrollNav from './modules/nav.js';

document.querySelectorAll('.page-header__wrapper').forEach(initPageHeader);
document.querySelectorAll('.nav').forEach(initScrollNav);
