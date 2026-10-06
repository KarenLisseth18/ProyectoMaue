import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const iniciarSesion = (e) => {

        e.preventDefault();

        setError("");

        if (
            correo === "admin@maue.com" &&
            contrasena === "admin123"
        ) {

            localStorage.setItem(
                "usuarioMaue",
                JSON.stringify({
                    correo,
                    rol: "administrador"
                })
            );

            navigate("/admin");

            return;
        }

        if (
            correo === "usuario@maue.com" &&
            contrasena === "usuario123"
        ) {

            localStorage.setItem(
                "usuarioMaue",
                JSON.stringify({
                    correo,
                    rol: "usuario"
                })
            );

            navigate("/productos");

            return;
        }

        setError("Correo o contraseña incorrectos.");
    };

    return (
        <main className="pagina-login">

            <section className="login-contenedor">

                <p>MAÚ</p>

                <h1>Iniciar sesión</h1>

                <span>
                    Ingresa para continuar
                </span>

                <form onSubmit={iniciarSesion}>

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={correo}
                        onChange={(e) =>
                            setCorreo(e.target.value)
                        }
                        required
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={contrasena}
                        onChange={(e) =>
                            setContrasena(e.target.value)
                        }
                        required
                    />

                    {error && (
                        <p className="mensaje-error">
                            {error}
                        </p>
                    )}

                    <button type="submit">
                        Iniciar sesión
                    </button>

                </form>

            </section>

        </main>
    );
}

export default Login;