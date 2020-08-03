import React from 'react';
import './assets/styles.scss';
import Curso from './curso';
import Curso2 from './curso2';

// const App = () => <h1>Hola mundo desde el App.js</h1>

const App = () => (

    // <>
    //     <div className="saludo">
    //         <h1>Hola mundo</h1>
    //         <p>Hola, estoy saludando desde un componente</p>
    //     </div>

    //     <div>
    //         <h2>Hola subtítulo H2</h2>
    //         <p>Hola, estoy saludando desde el subtítulo H2 desde un componente</p>
    //     </div>

    //     <div>
    //         <img src="https://edteam-media.s3.amazonaws.com/courses/original/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png"/>
    //     </div>

    //     <div className="main-banner img-container" id="main-banner">
    //         <div className="ed-grid lg-grid-6">
    //             <div className="lg-cols-4 lg-x-2">
    //                 <img className="main-banner__img" alt="banner" src="tu-imagen.jpg"/>
    //                 <div className="main-banner__data s-center">
    //                     <p className="t2 s-mb-0">Cursos de EDteam</p>
    //                     <p>Tu futuro te está esperando</p>
    //                     <a href="https://ed.team" className="button">Suscribirse</a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </>

    <>

        <div>
            <Curso />
            <Curso />
            <Curso />
            <Curso2 />
            <Curso2 />
            <Curso2 />
        </div>

    </>

)

export default App;

// Reglas JSX ->
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver un solo elemento padre
// 3: Apoyarse de los 'Fragments' cuando se necesitan devolver 2 elementos
// 4: Nomenclatura <Fragment> => <> </>
// 5: Las etiquetas siempre se cierran con />
// 6: class="" => className=""
// 7: for => htmlFor