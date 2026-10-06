import { useEffect, useState } from "react";

import {
    obtenerCategorias,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
} from "../services/categoriaService";

import {
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} from "../services/productoService";

function AdminPanel() {

    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);

    const [nombreCategoria, setNombreCategoria] = useState("");
    const [descripcionCategoria, setDescripcionCategoria] = useState("");
    const [categoriaEditando, setCategoriaEditando] = useState(null);

    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [categoriaProducto, setCategoriaProducto] = useState("");
    const [disponibilidad, setDisponibilidad] = useState(true);
    const [productoEditando, setProductoEditando] = useState(null);

    useEffect(() => {
        cargarCategorias();
        cargarProductos();
    }, []);

    const cargarCategorias = async () => {
        try {
            const data = await obtenerCategorias();
            setCategorias(data);
        } catch (error) {
            console.error("Error al obtener categorías:", error);
        }
    };

    const cargarProductos = async () => {
        try {
            const data = await obtenerProductos();
            setProductos(data);
        } catch (error) {
            console.error("Error al obtener productos:", error);
        }
    };

    // ==========================
    // CATEGORÍAS
    // ==========================

    const guardarCategoria = async (e) => {
        e.preventDefault();

        const categoria = {
            nombre: nombreCategoria,
            descripcion: descripcionCategoria
        };

        try {
            if (categoriaEditando) {
                await actualizarCategoria(categoriaEditando, categoria);
                setCategoriaEditando(null);
            } else {
                await crearCategoria(categoria);
            }

            setNombreCategoria("");
            setDescripcionCategoria("");

            await cargarCategorias();

        } catch (error) {
            console.error("Error al guardar categoría:", error);
        }
    };

    const editarCategoria = (categoria) => {
        setCategoriaEditando(categoria.id);
        setNombreCategoria(categoria.nombre);
        setDescripcionCategoria(categoria.descripcion);
    };

    const borrarCategoria = async (id) => {
        try {
            await eliminarCategoria(id);
            await cargarCategorias();
        } catch (error) {
            console.error("Error al eliminar categoría:", error);
        }
    };

    // ==========================
    // PRODUCTOS
    // ==========================

    const guardarProducto = async (e) => {
        e.preventDefault();

        const producto = {
            nombre: nombreProducto,
            precio: Number(precioProducto),
            categoria: categoriaProducto,
            disponibilidad: disponibilidad
        };

        try {
            if (productoEditando) {
                await actualizarProducto(productoEditando, producto);
                setProductoEditando(null);
            } else {
                await crearProducto(producto);
            }

            setNombreProducto("");
            setPrecioProducto("");
            setCategoriaProducto("");
            setDisponibilidad(true);

            await cargarProductos();

        } catch (error) {
            console.error("Error al guardar producto:", error);
        }
    };

    const editarProducto = (producto) => {
        setProductoEditando(producto.id);

        setNombreProducto(producto.nombre);
        setPrecioProducto(producto.precio);
        setCategoriaProducto(producto.categoria);
        setDisponibilidad(producto.disponibilidad);
    };

    const borrarProducto = async (id) => {
        try {
            await eliminarProducto(id);
            await cargarProductos();
        } catch (error) {
            console.error("Error al eliminar producto:", error);
        }
    };

    return (
        <section className="admin-panel">

            <h2>Panel de administrador</h2>

            {/* ==========================
                CATEGORÍAS
            ========================== */}

            <h3>Gestión de categorías</h3>

            <form onSubmit={guardarCategoria}>

                <input
                    type="text"
                    placeholder="Nombre de la categoría"
                    value={nombreCategoria}
                    onChange={(e) => setNombreCategoria(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Descripción"
                    value={descripcionCategoria}
                    onChange={(e) =>
                        setDescripcionCategoria(e.target.value)
                    }
                    required
                />

                <button type="submit">
                    {categoriaEditando
                        ? "Actualizar categoría"
                        : "Crear categoría"}
                </button>

            </form>

            <div className="lista-categorias">

                {categorias.map((categoria) => (

                    <div
                        className="categoria-admin"
                        key={categoria.id}
                    >

                        <div>
                            <strong>{categoria.nombre}</strong>
                            <p>{categoria.descripcion}</p>
                        </div>

                        <div>

                            <button
                                onClick={() =>
                                    editarCategoria(categoria)
                                }
                            >
                                Editar
                            </button>

                            <button
                                onClick={() =>
                                    borrarCategoria(categoria.id)
                                }
                            >
                                Eliminar
                            </button>

                        </div>

                    </div>

                ))}

            </div>

            {/* ==========================
                PRODUCTOS
            ========================== */}

            <h3 className="titulo-productos-admin">
                Gestión de productos
            </h3>

            <form onSubmit={guardarProducto}>

                <input
                    type="text"
                    placeholder="Nombre del producto"
                    value={nombreProducto}
                    onChange={(e) =>
                        setNombreProducto(e.target.value)
                    }
                    required
                />

                <input
                    type="number"
                    placeholder="Precio"
                    value={precioProducto}
                    onChange={(e) =>
                        setPrecioProducto(e.target.value)
                    }
                    required
                />

                <input
                    type="text"
                    placeholder="Categoría"
                    value={categoriaProducto}
                    onChange={(e) =>
                        setCategoriaProducto(e.target.value)
                    }
                    required
                />

                <label className="disponibilidad">

                    <input
                        type="checkbox"
                        checked={disponibilidad}
                        onChange={(e) =>
                            setDisponibilidad(e.target.checked)
                        }
                    />

                    Disponible

                </label>

                <button type="submit">

                    {productoEditando
                        ? "Actualizar producto"
                        : "Crear producto"}

                </button>

            </form>

            <div className="lista-productos-admin">

                {productos.map((producto) => (

                    <div
                        className="producto-admin"
                        key={producto.id}
                    >

                        <div>

                            <strong>
                                {producto.nombre}
                            </strong>

                            <p>
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

                        </div>

                        <div>

                            <button
                                onClick={() =>
                                    editarProducto(producto)
                                }
                            >
                                Editar
                            </button>

                            <button
                                onClick={() =>
                                    borrarProducto(producto.id)
                                }
                            >
                                Eliminar
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default AdminPanel;