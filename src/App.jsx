import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import UserDetails from "./components/UserDetails/UserDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/details/:id",
        element: <UserDetails />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
