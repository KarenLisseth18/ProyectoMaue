function Carrito({ carrito, cambiarCantidad, eliminarDelCarrito }) {
    const total = carrito.reduce(
        (suma, producto) =>
            suma + producto.precio * producto.cantidad,
        0
    );

    return (
        <section className="carrito">
            <h2>🛒 Carrito de compras</h2>

            {carrito.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                    {carrito.map((producto) => (
                        <div className="item-carrito" key={producto.id}>
                            <div>
                                <h3>{producto.nombre}</h3>

                                <p>
                                    ${producto.precio.toLocaleString("es-CO")}
                                </p>
                            </div>

                            <div className="cantidad">
                                <button
                                    onClick={() =>
                                        cambiarCantidad(
                                            producto.id,
                                            producto.cantidad - 1
                                        )
                                    }
                                >
                                    -
                                </button>

                                <span>{producto.cantidad}</span>

                                <button
                                    onClick={() =>
                                        cambiarCantidad(
                                            producto.id,
                                            producto.cantidad + 1
                                        )
                                    }
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={() =>
                                    eliminarDelCarrito(producto.id)
                                }
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}

                    <h3 className="total">
                        Total: ${total.toLocaleString("es-CO")}
                    </h3>
                </>
            )}
        </section>
    );
}

export default Carrito;