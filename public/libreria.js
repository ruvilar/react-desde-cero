// let header = document.createElement('header');
// header.id = 'mainHeader';
// header.classList.add('main-header');

// let root = document.getElementById('root');
// root.appendChild(header);

// let nav = document.createElement('nav');
// nav.id = 'mainNav';
// nav.classList.add('main-nav');

// let logo = document.createElement('img');
// logo.id = 'mainLogo';
// logo.classList.add('main-logo');
// logo.src = './imagenes/logo.svg';

// header.appendChild(nav);
// header.appendChild(logo);


/* export function createElement(elem, attr = {}) {
    let element = document.createElement(elem);
    // <header></header>
    element.id = attr.id;
    // <header id="mainHeader"></header>
    element.classList.add(attr.className);
    // <header className="main-header"></header>

    return element;
}; */

/* export function render(elem, root) {
    root.appendChild(elem);
}; */
// <div id="root">
//    <header id="mainHeader" className="main-header"></header>
// </div>


export function createElement(elemType, attrLists = {}, elemChildren = []) {
    let element = document.createElement(elemType);
    // <header></header>
    // <nav></nav>
    // <img />

    let attrs = Object.keys(attrLists);
    // El parámetro 'attrLists' se transforma en un arreglo para almacenar varios atributos
    attrs.map(attr => element.setAttribute(attr, attrLists[attr]));
    // [className="main-header", className="main-nav", className="logo", alt="Logo", src="./images/logo.png"]

    elemChildren.map(elemChild => renderElemChild(element, elemChild));

    return element;
};
	
function renderElemChild(elem, elemChild) {
    if(typeof elemChild === 'string') {
        elem.innerHTML += elemChild;
        
        return;
    }
    elem.appendChild(elemChild);
};
// <header className="main-header">
//    <nav className="main-nav"></nav>
//    <img className="logo" alt="Logo" src="./images/logo.png" />
// </header>

export function render(elem, DOMelem) {
    DOMelem.appendChild(elem);
};
// <div id="root">
//    <header id="mainHeader" className="main-header">
//       <nav></nav>
//       <img />
//    </header>
// </div>