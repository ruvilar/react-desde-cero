import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            date: new Date()
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    cambiarNombre(e) {
        this.setState({
            name: e.target.value
        })
    }

    cambiarCorreo(e) {
        this.setState({
            email: e.target.value
        })
    }

    cambiarFecha(e) {
        this.setState({
            date: new Date()
        })
    }

    render() {

        return (

            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <h4>Fecha actual: {Math.ceil(this.state.date/1000)}</h4>

                <form id="form-element">
                    <div className="ed-grid m-grid-2">
                        
                        <div className="form__item">
                            <label>Nombre completo</label>
                            <input
                            type="text" 
                            onChange={this.cambiarNombre} 
                            />
                        </div>

                        <div className="form__item">
                            <label>Email</label>
                            <input 
                            type="email"
                            onChange={this.cambiarCorreo}
                            />
                        </div>

                        <div className="form__item">
                            <input className="button full" type="submit" value="Enviar"/>
                        </div>

                    </div>
                </form>

                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo es: ${this.state.email}`}</span>
                </div>

            </div>

        )
    }

    componentDidMount() {
        let element = document.getElementById('form-element')
        console.log(element)

        this.intervaloFecha = setInterval(() => {
            this.cambiarFecha()
            console.log(new Date())
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps)
        console.log(prevState)
    }

    componentWillUnmount() {
        clearInterval(this.intervaloFecha)
    }

}

export default Form