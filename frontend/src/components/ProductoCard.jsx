function ProductoCard({ producto, agregarAlCarrito }) {
    return (
        <div className="producto">
            <h3>{producto.nombre}</h3>

            <p className="precio">
                ${producto.precio.toLocaleString("es-CO")}
            </p>

            <p>
                Categoría: {producto.categoria}
            </p>

            <p>
                {producto.disponibilidad
                    ? "Disponible"
                    : "No disponible"}
            </p>

            {producto.disponibilidad && (
                <button onClick={() => agregarAlCarrito(producto)}>
                    Agregar al carrito
                </button>
            )}
        </div>
    );
}

export default ProductoCard;