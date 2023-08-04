import { createElement, render } from './libreria.js';

/* const Header = createElement('header', {id: 'mainHeader', className: 'main-header'}); */
// <header id="mainHeader" className="main-header"></header>
/* render(Header, document.getElementById('root')); */
// <div id="root">
//    <header id="mainHeader" className="main-header"></header>
// </div>


const Logo = createElement('img', {
    className: 'logo',
    alt: 'Logo',
    src: './images/logo.png'
});

const Nav = createElement('nav', {
    className: 'main-nav'
});

const Header = createElement('header', {
    className: 'main-header'
}, [Logo, Nav]);

render(Header, document.getElementById('root'));