import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../ErroPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddBooks from "../Pages/Add-Books/AddBooks";
import AllBooks from "../Pages/All-Books/AllBooks";
import BooksUpdate from "../Pages/All-Books/BooksUpdate";
import PrivateRoute from "./PrivateRoute";
import BookCategoryAllCard from "../Components/BookCategoryAllCard";
import CategoryCardDetails from "../Components/CategoryCardDetails";
import BorrowedBooks from "../Pages/Borrowed-Books/BorrowedBooks";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/addBooks",
                element:<PrivateRoute><AddBooks></AddBooks></PrivateRoute>
            },
            {
                path:"/allBooks",
                element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path:"/updateBook/:id",
                element:<PrivateRoute><BooksUpdate></BooksUpdate></PrivateRoute>
            },
            {
                path:"/bookCategoryCard/:category",
                element:<BookCategoryAllCard></BookCategoryAllCard>
            },
            {
                path:"/categoryCardDetails/:id",
                element:<PrivateRoute><CategoryCardDetails></CategoryCardDetails></PrivateRoute>
            },
            {
                path:"/borrowBooks",
                element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
            
        ]
    }
])

export default router;