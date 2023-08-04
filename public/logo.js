// Regla JSX 1: Solo se puede almacenar 1 elemento a la vez 

const Logo = () => {
    return (
        <div>
            <h1>Logo 1</h1>
            <img src="./images/logo.png" alt="Logo" className="logo" /> 
        </div>
    )
};

// Regla JSX 2: Usar fragmentos

const Logo2 = (
    <>
        <h1>Logo 2</h1>
        <img src="./images/logo.png" alt="Logo" className="logo" /> 
    </>
);

// Regla JSX 3: Toda etiqueta debe cerrarse

const Logo3 = (
    <>
        <h1>Logo 3</h1>
        <img /> 
    </>
);

// Regla JSX 4: Todo atributo compuesto se convierte en camelCase

const miBoton = <button className="boton-1" onClick={Logo}>Click Me!</button>