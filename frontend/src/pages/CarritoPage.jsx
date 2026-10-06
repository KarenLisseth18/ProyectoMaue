import Carrito from "../components/Carrito";

function CarritoPage({
    carrito,
    cambiarCantidad,
    eliminarDelCarrito
}) {

    return (
        <main className="pagina-carrito">

            <section className="titulo-pagina">

                <p>TU PEDIDO</p>

                <h1>
                    Carrito de compras
                </h1>

                <span>
                    Revisa tus productos antes de continuar
                </span>

            </section>

            <Carrito
                carrito={carrito}
                cambiarCantidad={cambiarCantidad}
                eliminarDelCarrito={eliminarDelCarrito}
            />

        </main>
    );
}

export default CarritoPage;