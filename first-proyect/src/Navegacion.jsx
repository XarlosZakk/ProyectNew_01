import "./Estilos/navCSS.css"

export function Navegacion() {
    return (
        <nav className="indice">
            <div className="titulo">
                <h1>Welcome My Web</h1>
            </div>
            <div className="MenuNav">
                <ul>
                    <li><a href="#">Opcion 1</a></li>
                    <li><a href="#">Opcion 2</a></li>
                    <li><a href="#">Opcion 3</a></li>
                    <li><a href="#">Opcion 4</a></li>
                    <li><a href="#">Opcion 5</a></li>
                </ul>

                <button className="Invertir" id="eventoBTN">Modo C</button>
            </div>
        </nav>
    );
}