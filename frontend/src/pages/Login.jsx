import { useState } from "react";

function Login() {

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const iniciarSesion = (e) => {
        e.preventDefault();

        console.log("Correo:", correo);
        console.log("Contraseña:", password);
    };

    return (
        <div className="login-container">

            <div className="login-box">

                <h2>Iniciar sesión</h2>

                <form onSubmit={iniciarSesion}>

                    <label>Correo electrónico</label>

                    <input
                        type="email"
                        placeholder="Ingrese su correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />

                    <label>Contraseña</label>

                    <input
                        type="password"
                        placeholder="Ingrese su contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Iniciar sesión
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;