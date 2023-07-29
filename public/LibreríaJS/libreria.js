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


export function createElement(type, attributesList = {}, children = []) {
    let element = document.createElement(type);
    // Ejemplo: <header></header>

    let attributes = Object.keys(attributesList);
    attributes.map(attribute => element.setAttribute(attribute, attributesList[attribute]));
    // Ejemplo:
    //   attributesList = {
    //      id: mainHeader,
    //      className: main-header
    // }
    // <header id="mainHeader" className="main-header"></header>

    children.map(child => renderChild(element, child));
    // Ejemplo:
    //   children = [
    //      id: mainContainer,
    //      className: main-container
    // ]
    // <header id="mainHeader" className="main-header">
    //   <div id="mainContainer" className="main-container"></div>
    // </header>

    return element;
};

function renderChild(element, child) {
     if(typeof child === 'string') {
        element.innerHTML += child;
        // Ejemplo:
        // span

        return;
     }
     element.appendChild(child);
     // Ejemplo:
     // <span></span>
};

export function render(element, DOMelement) {
    DOMelement.appendChild(element);
    // Ejemplo:
    // <header id="mainHeader" className="main-header">
    //   <div id="mainContainer" className="main-container">
    //      <span></span>
    //   </div>
    // </header>
}