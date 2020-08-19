import React from 'react';
import './assets/styles.scss';
import Curso from './curso';

/* Variable que permite mostrar un título 'h1' en pantalla */
// const App = () => <h1>Hola mundo desde App.js</h1>

const cursos = [
    {
        'title': 'React desde cero',
        'image': 'https://edteam-media.s3.amazonaws.com/courses/original/4c858734-9c72-45db-84ca-eb9e79cbe8df.png',
        'price': 30,
        'profesor': 'Beto Quiroga'
    },

    {
        'title': 'CSS Avanzado',
        'image': 'https://edteam-media.s3.amazonaws.com/courses/original/262e68b3-eea2-43f2-9e9a-febc106a8295.png',
        'price': 50,
        'profesor': 'Alvaro Felipe'
    },

    {
        'title': 'Wordpress desde cero',
        'image': 'https://edteam-media.s3.amazonaws.com/courses/original/82dfe34a-4e3b-4904-bdb5-03f45112fcd2.png',
        'price': 20,
        'profesor': 'Catalina Zapata'
    },
    
    {
        'title': 'Drupal desde cero',
        'image': 'https://edteam-media.s3.amazonaws.com/courses/original/3c84b04b-4f00-4916-b161-ffe5c6132d19.jpg',
        'price': 30,
        'profesor': 'Beto Quiroga'
    }
]

const App = () => (

    <>
        <div className="main-banner img-container" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img className="main-banner__img" alt="banner" src="https://i.blogs.es/6fb2d9/article-2167595-13e3a2a1000005dc-581_964x751/450_1000.jpg"/>
                    <div className="main-banner__data s-center">
                        <p className="t2 s-mb-0">Cursos de EDteam</p>
                        <p>Tu futuro te está esperando</p>
                        <a href="https://ed.team" className="button">Suscribirse</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="ed-grid m-grid-3">
            {
                cursos.map(c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor} />)
            }
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