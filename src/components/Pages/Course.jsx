import React from 'react'

/* Función que crea una constante 'cursos' para almacenar un array con objetos dinámicos */
const cursos = [
    {
        'id': 1,
        'title': 'React desde cero',
        'image': 'https://edteam-media.s3.amazonaws.com/courses/original/4c858734-9c72-45db-84ca-eb9e79cbe8df.png',
        'price': 30,
        'profesor': 'Beto Quiroga'
    },

    {
        'id': 2,
        'title': 'CSS Avanzado',
        'image': 'https://edteam-media.s3.amazonaws.com/courses/original/262e68b3-eea2-43f2-9e9a-febc106a8295.png',
        'price': 50,
        'profesor': 'Alvaro Felipe'
    },

    {
        'id': 3,
        'title': 'Wordpress desde cero',
        'image': 'https://edteam-media.s3.amazonaws.com/courses/original/82dfe34a-4e3b-4904-bdb5-03f45112fcd2.png',
        'price': 20,
        'profesor': 'Catalina Zapata'
    },
    
    {
        'id': 4,
        'title': 'Drupal desde cero',
        'image': 'https://edteam-media.s3.amazonaws.com/courses/original/3c84b04b-4f00-4916-b161-ffe5c6132d19.jpg',
        'price': 30,
        'profesor': 'Beto Quiroga'
    }
]

const Course = ({ match }) => { 

    const cursoActual = cursos.filter(c => c.id === parseInt(match.params.idem))[0]

    return (
        <div className="ed-grid m-grid-3">
        {
            cursoActual ? (

                <>
                    <h1 className="m-cols-3">{cursoActual.title}</h1>
                    <img className="m-cols-1" src={cursoActual.image} alt={cursoActual.title}/>
                    <p className="m-cols-2">{cursoActual.profesor}</p>
                </>
            )
                
            :
                
                <h1>El curso no existe</h1>
        }
        </div>
    )
}

export default Course