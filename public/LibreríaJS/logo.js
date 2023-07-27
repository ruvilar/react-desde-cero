const Logo = () => {
    return (
        <div id="main-logo">
            <img src="./images/logo.png" alt="Logo" className="logo" />
        </div>
    )
}

// Regla JSX 1: Solo se puede renderizar 1 elemento
// Regla JSX 2: Usar fragmentos
// Regla JSX 3: Toda etiqueta debe cerrarse
// Regla JSX 4: Todo atributo compuesto se convierte en camelCase

const saludo = (
    <>
        <h1>Hola!</h1>
        <img src="./images/logo.png" />
    </>
)

const miClase = 'container';
const miLogo = <img src="logo.svg" alt="Logo Principal" />
const miDiv = <div className={miClase} />
const miBoton = <button id="boton1" onClick={Logo}>Click Me!</button>