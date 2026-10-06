import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import CarritoPage from "./pages/CarritoPage";
import Admin from "./pages/Admin";

function App() {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {

        const productoExistente = carrito.find(
            (item) => item.id === producto.id
        );

        if (productoExistente) {

            setCarrito(
                carrito.map((item) =>
                    item.id === producto.id
                        ? {
                            ...item,
                            cantidad: item.cantidad + 1
                        }
                        : item
                )
            );

        } else {

            setCarrito([
                ...carrito,
                {
                    ...producto,
                    cantidad: 1
                }
            ]);

        }
    };

    const cambiarCantidad = (id, cantidad) => {

        if (cantidad <= 0) {
            eliminarDelCarrito(id);
            return;
        }

        setCarrito(
            carrito.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        cantidad
                    }
                    : item
            )
        );
    };

    const eliminarDelCarrito = (id) => {

        setCarrito(
            carrito.filter(
                (item) => item.id !== id
            )
        );
    };

    const cantidadCarrito = carrito.reduce(
        (total, producto) =>
            total + producto.cantidad,
        0
    );

    return (
        <>

            <Navbar
                cantidadCarrito={cantidadCarrito}
            />

            <Routes>

                <Route
                    path="/"
                    element={<Inicio />}
                />

                <Route
                    path="/productos"
                    element={
                        <Productos
                            agregarAlCarrito={agregarAlCarrito}
                        />
                    }
                />

                <Route
                    path="/carrito"
                    element={
                        <CarritoPage
                            carrito={carrito}
                            cambiarCantidad={cambiarCantidad}
                            eliminarDelCarrito={eliminarDelCarrito}
                        />
                    }
                />

                <Route
                    path="/admin"
                    element={<Admin />}
                />

            </Routes>

        </>
    );
}

export default App;