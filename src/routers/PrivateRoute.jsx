import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Shared/Loading/Loading";


const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();

    if(loading){
        return <Loading></Loading>;
    }

    if(user && user?.email){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;