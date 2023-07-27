import React from 'react'
import CourseCard from './CourseCard'

/* Función que crea una constante 'cursos' para almacenar un array con objetos dinámicos */
const courses = [
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

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {courses.map(c => (
        <CourseCard 
        key={c.id}
        id={c.id}
        title={c.title}
        image={c.image}
        price={c.price}
        professor={c.professor} 
        />
        ))}
    </div>
)

export default CourseGrid