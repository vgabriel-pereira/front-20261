import Card from "../components/Card";
import Layout from "./Layout";
function Dashboard() {
  return (
    <>
      <Layout titulo="Olá, Aluno" subtitulo="Bem-vindo ao portal do aluno">
        <Card titulo="Mural de avisos" />
        <Card titulo="Calendario Academico" />
        <Card titulo="Minhas Disciplinas" />
      </Layout>
    </>
  );
}

export default Dashboard;
