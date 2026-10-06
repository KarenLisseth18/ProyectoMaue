
import { Link, useNavigate } from "react-router-dom";
import logoMaue from "../assets/logo/maue-logo.jpg";

function Navbar({ cantidadCarrito }) {

    const navigate = useNavigate();

    const usuario = JSON.parse(
        localStorage.getItem("usuarioMaue")
    );

    const cerrarSesion = () => {
        localStorage.removeItem("usuarioMaue");
        navigate("/login");
    };

    return (
        <nav className="navbar">

            <Link to="/" className="logo">
                <img src={logoMaue} alt="Logo Maué" />
            </Link>

            <div className="menu">

                <Link to="/">
                    Inicio
                </Link>

                <Link to="/productos">
                    Productos
                </Link>

                <Link
                    to="/carrito"
                    className="link-carrito"
                >
                    Carrito

                    {cantidadCarrito > 0 && (
                        <span className="contador-carrito">
                            {cantidadCarrito}
                        </span>
                    )}

                </Link>

                {usuario?.rol === "administrador" && (
                    <Link to="/admin">
                        Administrador
                    </Link>
                )}

                {usuario ? (
                    <button
                        onClick={cerrarSesion}
                        className="link-logout"
                    >
                        Cerrar sesión
                    </button>
                ) : (
                    <Link
                        to="/login"
                        className="link-login"
                    >
                        Iniciar sesión
                    </Link>
                )}

            </div>
        </nav>
    );
}

export default Navbar;
