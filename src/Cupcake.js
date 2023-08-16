import React, {Component} from 'react';

/***********************COMPONENTE FUNCIONAL */
/* function Cupcake({color, flavor, image}) {
    return (
        <div className="cupcake">
            <h2>{`Color: ${color}`}</h2>
            <p>{`Sabor: ${flavor}`}</p>
            <img src={image} alt={flavor} />
        </div>
    )
}; */

/***********************COMPONENTE DE CLASE */
class Cupcake extends Component {
    constructor() {
        super()
        // Estado con un valor por defecto
        this.state = {
            sold: false
        }
        this.sell = this.sell.bind(this);
    }

    // Método que establece el valor del estado
    sell() {
        this.setState({
            sold: true
        });
    }

componentWillMount() {
    console.log('El componente se montará');
    let test = document.getElementById('test');
    console.log(test);
};

componentDidMount() {
    console.log('El componente se ha montado');
    let test = document.getElementById('test');
    console.log(test);
};

componentWillUpdate() {
    console.log('El botón se actualizará');
    let testButton = document.getElementById('testButton');
    console.log(testButton);
};

componentDidUpdate() {
    console.log('El botón se ha actualizado');
    let testButton = document.getElementById('testButton');
    console.log(testButton);
};

    render() {
        return (
            <div className="cupcake" id="test">
                <img src={this.props.image} alt={this.props.flavor} />
                <h2>{`Color: ${this.props.color}`}</h2>
                <p>{`Sabor: ${this.props.flavor}`}</p>
                <p><b>Estado: </b>{
                this.state.sold ? 'Vendido' : 'A la Venta'
                }</p>
                {
                !this.state.sold && <button id="testButton" onClick={this.sell}>Vender</button>
                }
            </div>
        )
    }
};

export default Cupcake;


/***************************CICLO DE VIDA DE LOS COMPONENTES 
 * 
 * - componentWillMount() - Se montará
 * - render() - Se está montando
 * - componentDidMount() - Se ha montado
 * ---------------------------------------------------------
 * - componentWillUpdate() - Se actualizará
 * - render() - Se está actualizando
 * - componentDidUpdate() - Se ha actualizado
 * ---------------------------------------------------------
 * - componentWillUnmount() - Se desmontará
*/