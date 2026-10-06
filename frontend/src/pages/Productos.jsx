import { useEffect, useState } from "react";
import { obtenerProductos } from "../services/productoService";
import ProductoCard from "../components/ProductoCard";

function Productos({ agregarAlCarrito }) {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {
            const data = await obtenerProductos();
            setProductos(data);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    };

    return (
        <main className="pagina-productos">

            <section className="titulo-pagina">

                <p>DESCUBRE MAUÉ</p>

                <h1>
                    Nuestros productos
                </h1>

                <span>
                    Repostería artesanal preparada para ti
                </span>

            </section>

            <section className="productos">

                {productos.map((producto) => (

                    <ProductoCard
                        key={producto.id}
                        producto={producto}
                        agregarAlCarrito={agregarAlCarrito}
                    />

                ))}

            </section>

        </main>
    );
}

export default Productos;