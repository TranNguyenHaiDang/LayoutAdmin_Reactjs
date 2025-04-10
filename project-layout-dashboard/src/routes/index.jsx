import LayoutAdmin from "../components/LayoutAdmin";
import Dashboard from "../pages/Dashboard";

export const routes = [
    {
        path: "/",
        element: <LayoutAdmin />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
        ]
    }
];