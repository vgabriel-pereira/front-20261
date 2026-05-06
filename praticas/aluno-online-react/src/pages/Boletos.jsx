import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Boletos() {
  return (
    <div className="flex flex-col md:flex-row">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Boletos</h2>
            <p className="mb-4">Lista de boletos pendentes.</p>
            <ol className="list-decimal list-inside">
              <li className="mb-2">Boleto 1: R$ 150,00 - Vencimento: 15/11/2023</li>
              <li className="mb-2">Boleto 2: R$ 200,00 - Vencimento: 20/11/2023</li>
            </ol>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Boletos;