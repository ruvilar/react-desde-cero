import React from 'react'
import '../styles/styles.scss'
// import CourseCard from './CourseCard'
import Form from './Pages/Form'
import CourseGrid from './Organisms/CourseGrid'
import Course from './Pages/Course'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import History from './Pages/History'
import Home from './Pages/Home'
import MainMenu from './Organisms/MainMenu'
import Users from './Pages/Users'

/* Variable que permite mostrar un título 'h1' en pantalla */
// const App = () => <h1>Hola mundo desde App.js</h1>

const App = () => (

    <Router>
        <MainMenu />
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/cursos/:idem" component={ Course } />
            <Route path="/cursos" component={ CourseGrid } />
            <Route path="/historial/:idem" component={ History } />
            <Route path="/historial" component={ History } />
            <Route path="/usuarios" component={ Users } />
            <Route path="/formulario" component={ () => <Form name="Página de contacto" /> } />
            <Route component={ () => 
            <div>
                <h1>Error 404</h1>
                <span>Página Ausente</span>
            </div> 
            } />
        </Switch>
    </Router>

        // <div className="ed-grid m-grid-3">
        //     {
        //         /* Función que recorre un array 'cursos' de objetos asignando una variable 'c' al componente 'Curso' para mostrar su contenido dinámico */
        //         cursos.map(c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor} />)
        //     }
        // </div>

)

export default App

// Reglas JSX ->
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver un solo elemento padre
// 3: Apoyarse de los 'Fragments' cuando se necesitan devolver 2 elementos
// 4: Nomenclatura <Fragment> => <> </>
// 5: Las etiquetas siempre se cierran con />
// 6: class="" => className=""
// 7: for => htmlFor