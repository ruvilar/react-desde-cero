import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

// const mayorEdad = edad => edad > 18

// const persona = {'nombre': 'Rodolfo', 'apellido': 'Vilar', 'edad': 43}

// const curso = {
//     title: 'React desde cero',
//     image: 'https://edteam-media.s3.amazonaws.com/courses/original/4c858734-9c72-45db-84ca-eb9e79cbe8df.png',
//     price: '50 USD'
// }

const CourseCard = ({id, title, image, price, professor}) => (
        <article className="card">

            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                    <Link to={`/cursos/${id}`}>
                        <img 
                        src={image ? image : 'https://concepto.de/wp-content/uploads/2018/08/Londres-e1533855310803.jpg'} 
                        alt={title ? title : 'No hay título'}
                        />
                    </Link>
            </div>

            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">

            <h3 className="center">{title ? title : 'No hay título!!!'}</h3>

                <div className="s-main-center">
                <div className="s-main-center">
                    {professor}
                </div>
            <a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ ${price}`}</a>
                </div>
            </div>

        </article>
)

CourseCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}

CourseCard.defaultProps = {
    id: '',
    title: 'No se encontró el título',
    image: 'https://concepto.de/wp-content/uploads/2018/08/Londres-e1533855310803.jpg',
    price: '--',
    profesor: ''
}

export default CourseCard;