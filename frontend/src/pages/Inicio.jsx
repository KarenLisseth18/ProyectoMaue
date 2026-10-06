import { Link } from "react-router-dom";

function Inicio() {
    return (
        <main className="inicio">

            <section className="hero">

                <div className="hero-contenido">

                    <p className="hero-pequeno">
                        Repostería artesanal
                    </p>

                    <h1>
                        Un pequeño detalle
                        <br />
                        puede endulzar tu día
                    </h1>

                    <p>
                        Descubre nuestros productos preparados
                        con dedicación y mucho amor.
                    </p>

                    <Link to="/productos" className="boton-principal">
                        Ver productos
                    </Link>

                </div>

            </section>

            <section className="bienvenida">

                <p className="seccion-pequena">
                    BIENVENIDOS A MAUÉ
                </p>

                <h2>
                    Dulces momentos,
                    <br />
                    hechos para compartir
                </h2>

                <p>
                    En Maué elaboramos productos de repostería
                    pensando en esos momentos especiales que
                    quieres disfrutar y compartir.
                </p>

            </section>

        </main>
    );
}

export default Inicio;