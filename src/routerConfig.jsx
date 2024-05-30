import { Home, Documents, Login } from "./pages";

export const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/documentos',
        element: <Documents/>
    },
]