import { Outlet } from "react-router";
import Menu from "./Menu";

function Layout(){
    return(
        <div className="flex">
        <aside>
            <Menu />
        </aside>
        <main className="flex-1 p-6">
            <Outlet />
        </main>
        </div>
    )
}

export default Layout;