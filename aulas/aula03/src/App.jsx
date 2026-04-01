import logo from './assets/learn.svg'
import avatar from './assets/avatar.svg'
function app() {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="bg-gray-200 dark:bg-gray-600">
        <header>
          <img src={logo} alt="Imagem Logo" />
          <h1>Aluno Online</h1>
        </header>
        <nav>
          <ul>
            <li>DashBoard</li>
            <li>Notas</li>
            <li>Faltas</li>
            <li>Boletos</li>
            <li>Requerimentos</li>
            <li>Sair</li>
          </ul>
        </nav>
      </aside>
      <main>
        <header>
          <h1>Olá Aluno</h1>
          <img src={avatar} alt="Imagem Avatar" />
        </header>
        <h2>Bem-vindo ao Portal do Aluno</h2>
        <section>
          <article>
            <h3>Mural de Avisos</h3>
            <ul>
              <li>Eleição para repsentante</li>
              <li></li>
              <li></li>
            </ul>
          </article>
          <article>
            <h3>Calendario Academico</h3>
            <ul>
              <li>23/04 - Aplicação P1</li>
              <li></li>
              <li></li>
            </ul>
          </article>
          <article>
            <h3>Minhas Disciplinas</h3>
            <ul>
              <li>Contrução Frontend</li>
              <li></li>
              <li></li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}

export default app;