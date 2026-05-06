import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <p className="mb-4">Bem-vindo ao Aluno Online. Aqui você pode ver um resumo das suas atividades.</p>
            <article className="border border-gray-300 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">Resumo</h3>
              <p>Notas: 8.5</p>
              <p>Faltas: 2</p>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;