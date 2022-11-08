import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import SingleService from "../../Pages/SingleService/SingleService";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/singleservice/:id',
                element: <SingleService></SingleService>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default router;