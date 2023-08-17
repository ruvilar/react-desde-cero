// import React, {Component} from 'react';
import React, {useEffect, useState, useRef} from 'react';
import './App.css';

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
/* class Cupcake extends Component {
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
}; */


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


/***********************COMPONENTE FULL-STATE FUNCIONAL */

const Cupcake = ({image, color, flavor}) => {
    
    const [sold, setSold] = useState(false);
    const [reserved, setReserved] = useState(false);
    const imageCupcake = useRef();
    const sell = () => {
        setSold(true);
        setReserved(true);
        const imageElem = imageCupcake.current;
        imageElem.classList.add('imageSold');
    };
    const reserve = () => setReserved(true);

    /* useEffect(() => {
        // console.log('Dato registrado', Date.now());
        // console.log(imageCupcake.current);
        const imageElem = imageCupcake.current;
        if(reserved) {
            imageElem.classList.add('imageSold');
        }
    }, [reserved]); */
    
    return (
        <div className="cupcake" id="test">
            <img ref={imageCupcake} src={image} alt={flavor} />
            <h2>{`Color: ${color}`}</h2>
            <p>{`Sabor: ${flavor}`}</p>
            <p><b>Estado: </b>{
            sold ? 'Vendido' : 'A la Venta'
            }</p>
            {
            !sold && <button id="testButton" onClick={sell}>Vender</button>
            }
            <p><b>Disponibilidad: </b>{
            reserved ? 'Reservado' : 'libre'
            }</p>
            {
            !reserved && <button id="testButton2" onClick={reserve}>Reservar</button>
            }
        </div>
    )
};

export default Cupcake;