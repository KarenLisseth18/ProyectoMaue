import AdminPanel from "../components/AdminPanel";

function Admin() {
    return (
        <main className="pagina-admin">

            <section className="titulo-pagina">

                <p>ADMINISTRACIÓN</p>

                <h1>
                    Panel de administrador
                </h1>

                <span>
                    Gestiona los productos y categorías de Maué
                </span>

            </section>

            <AdminPanel />

        </main>
    );
}

export default Admin;