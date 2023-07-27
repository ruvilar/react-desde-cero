import {createElement, renderizado} from "./libreria.js";

/* const Header = createElement('header', {id: 'mainHeader2', className: 'main-header-2'});
render(Header, document.getElementById('root')); */


const Logo = createElement('img', {
    className: 'logo',
    alt: 'Logo',
    src: './images/logo.png'
});

const Nav = createElement('nav', { className: 'main-nav' });

const Header = createElement('header', {
    className: 'main-header'
}, [Logo, Nav, 'Inicio']);

renderizado(Header, document.getElementById('root'));