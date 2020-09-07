import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

/* Variable que permite mostrar los valores en pantalla a través del ID 'root' */
const root = document.getElementById('root')

/* Función que permite renderizar el componente 'App' ya importado y llamar a la variable 'root' */
ReactDOM.render(<App />, root);

// ReactDOM.render(<h1 className="saludo">Hola Mundo</h1>, root);