import { Link } from "react-router-dom";

function Navbar({ cantidadCarrito }) {

    return (
        <nav className="navbar">

            <Link to="/" className="logo">
                Maué
            </Link>

            <div className="menu">

                <Link to="/">
                    Inicio
                </Link>

                <Link to="/productos">
                    Productos
                </Link>

                <Link to="/carrito" className="link-carrito">
                    🛒 Carrito

                    {cantidadCarrito > 0 && (
                        <span className="contador-carrito">
                            {cantidadCarrito}
                        </span>
                    )}

                </Link>

                <Link to="/admin">
                    Administrador
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;