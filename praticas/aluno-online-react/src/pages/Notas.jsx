import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Notas() {
  return (
    <div className="flex flex-col md:flex-row">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Notas</h2>
            <p className="mb-4">Lista de notas por disciplina.</p>
            <ul className="list-none p-0">
              <li className="p-2 border-b border-gray-300">Matemática: 8.5</li>
              <li className="p-2 border-b border-gray-300">Português: 9.0</li>
              <li className="p-2 border-b border-gray-300">História: 7.5</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Notas;