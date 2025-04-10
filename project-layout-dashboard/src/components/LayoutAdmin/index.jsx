
import Header from "./Header"
import MenuSider from "./MenuSider"
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
    return (
        <>
            <div className="grid grid-cols-[250px_1fr] h-screen">
                <MenuSider />

                <div className="flex flex-col">
                    <Header />
                    <div className="p-6 bg-gray-100 flex-1 overflow-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
export default LayoutAdmin