import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import NavBar from "../pages/shared/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default Main;