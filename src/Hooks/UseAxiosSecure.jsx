import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";


const axiosInstance = axios.create({
    withCredentials: true
})

const UseAxiosSecure = () => {
    const {signOutUser} = UseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {

            return response;
        }, error => {

            if (error.status === 401 || error.status === 403) {

                signOutUser()
                    .then(() => {
                        navigate("/login");

                    })
                    .catch(err => console.log(err))
            }
            return Promise.reject(error);
        })
    }, [])

    return axiosInstance;
};

export default UseAxiosSecure;