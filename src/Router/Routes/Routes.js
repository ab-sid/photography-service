import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Register from "../../Pages/Register/Register";
import SingleService from "../../Pages/SingleService/SingleService";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";

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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/allservices')
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/myreview/${params.id}`)
            }
        ]
    }
])

export default router;