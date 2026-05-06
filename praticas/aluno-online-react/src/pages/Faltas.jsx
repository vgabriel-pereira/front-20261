import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Faltas() {
  return (
    <div className="flex flex-col md:flex-row">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Faltas</h2>
            <p className="mb-4">Lista de faltas registradas.</p>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Data</th>
                  <th className="border border-gray-300 p-2 text-left">Disciplina</th>
                  <th className="border border-gray-300 p-2 text-left">Justificada</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">2023-10-01</td>
                  <td className="border border-gray-300 p-2">Matemática</td>
                  <td className="border border-gray-300 p-2">Sim</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">2023-10-05</td>
                  <td className="border border-gray-300 p-2">Português</td>
                  <td className="border border-gray-300 p-2">Não</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Faltas;