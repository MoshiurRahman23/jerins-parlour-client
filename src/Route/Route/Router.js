import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import OrderList from "../../Pages/OrderList/OrderList/OrderList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import OrderListLayOut from "../../Layout/Main/OrderListLayOut";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Projects from "../../Pages/Projects/Projects";
import AdminPage from "../../Pages/AdminPage/AdminPage";

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
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/project',
                element: <Projects></Projects>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/admin',
                element: <AdminPage></AdminPage>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/OrderList',
        element: <PrivateRoute><OrderListLayOut></OrderListLayOut></PrivateRoute>,
        children: [
            {
                path: '/OrderList',
                element: <OrderList></OrderList>
            }
        ]
    }
])
export default router;