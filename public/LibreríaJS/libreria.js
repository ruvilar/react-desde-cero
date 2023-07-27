/* let header = document.createElement('header');
// <header></header>
header.id = 'mainHeader';
// <header id="mainHeader"></header>
header.classList.add('main-header');
// <header id="mainHeader" className="main-header"></header>

let root = document.getElementById('root');
// <div id="root"></div>
root.appendChild(header);
// <div id="root"><header id="mainHeader" className="main-header"></header></div> */


/* export function createElement(elem, attribute = {}) {
    let element = document.createElement(elem);
    // <header></header>
    element.id = attribute.id;
    // <header id="mainHeader"></header>
    element.classList.add(attribute.className);
    // <header id="mainHeader" className="main-header"></header>

    return element;
};

export function render(element, domElement) {
    domElement.appendChild(element);
    // <div id="root"><header id="mainHeader" className="main-header"></header></div>
}; */


export function createElement(tipo, listaAtributos = {}, hijos = []) {
    let elemento = createElement(tipo);

    let keys = Object.keys(listaAtributos);
    keys.map(key => elemento.setAttribute(key, listaAtributos[key]));

    hijos.map(hijo => hijoRenderizado(elemento, hijo));

    return elemento;
};

export function hijoRenderizado(elemento, hijo) {
     if(typeof hijo === 'string') {
        elemento.innerHTML = elemento.innerHTML + hijo;

        return;
     }
     elemento.appendChild(hijo);
};

export function renderizado(elemento, DOMelemento) {
    DOMelemento.appendChild(elemento);
}