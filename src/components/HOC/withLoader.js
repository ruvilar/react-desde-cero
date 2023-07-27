import React, { Component } from 'react'

const withLoader = (propValue) => (WrappedComponent) => {
    return class WithLoader extends Component {
        // constructor(props){
        //     super(props)
        // }

        render() {
            return this.props[propValue].length === 0
            ? <h1>Cargando...</h1>
            : <WrappedComponent {...this.props} />
        }

    }
}

export default withLoader

// Los componentes de orden superior empiezan con la palabra 'with' seguido de un nombre identificativo de la función
// Deben tener extensión '.js', y no '.jsx'
// Para utilizar un componente de orden superior se deben invocar desde los componentes como 'export default withLoader(nombre_variable)(nombre_del_componente)'