import {createElement, render} from "./libreria.js";

/* const Header = createElement('header', {id: 'mainHeader2', className: 'main-header-2'});
render(Header, document.getElementById('root')); */


const Logo = createElement('img', {
    className: 'logo',
    alt: 'Logo',
    src: './images/logo.png'
});
// <img className="logo" alt="Logo" src="./images/logo.png" />

const Nav = createElement('nav', { className: 'main-nav' });
// <nav className="main-nav"></nav>

const Header = createElement('header', {
    className: 'main-header'
}, [Logo, Nav]);
// <header className="main-header">
//   <img className="logo" alt="Logo" src="./images/logo.png" />
//   <nav className="main-nav"></nav>    
// </header>

render(Header, document.getElementById('root'));