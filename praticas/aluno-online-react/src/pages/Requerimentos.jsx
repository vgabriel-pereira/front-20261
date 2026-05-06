import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Requerimentos() {
  return (
    <div className="flex flex-col md:flex-row">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Requerimentos</h2>
            <p className="mb-4">Lista de requerimentos enviados.</p>
            <dl className="flex flex-col">
              <dt className="font-bold mt-4">Requerimento 1</dt>
              <dd className="ml-0 mb-4">Status: Aprovado</dd>
              <dt className="font-bold mt-4">Requerimento 2</dt>
              <dd className="ml-0 mb-4">Status: Pendente</dd>
            </dl>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Requerimentos;