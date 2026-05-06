function Sidebar() {
  return (
    <nav className="w-48 bg-gray-100 p-4 min-h-screen md:block hidden">
      <ul className="list-none p-0">
        <li className="mb-4 hover:bg-gray-200 p-2 cursor-pointer">Dashboard</li>
        <li className="mb-4 hover:bg-gray-200 p-2 cursor-pointer">Faltas</li>
        <li className="mb-4 hover:bg-gray-200 p-2 cursor-pointer">Notas</li>
        <li className="mb-4 hover:bg-gray-200 p-2 cursor-pointer">Boletos</li>
        <li className="mb-4 hover:bg-gray-200 p-2 cursor-pointer">Requerimentos</li>
      </ul>
    </nav>
  );
}

export default Sidebar;