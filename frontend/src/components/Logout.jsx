import React from 'react'
import { useAuth } from '../context/UserContext'
import toast from 'react-hot-toast';

const Logout = () => {

    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        try {
            setAuthUser({         // we can skip this function update code and jump directly removing our Users from the local storage. 
                ...authUser,
                user: null
            });
            localStorage.removeItem("Users");
            toast.success("Logout successfully");

            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }
        catch (error) {
            console.log("Error: ", error.message);
            toast.error("Error: ", error.message);
        }
    }

    return (
        <div>
            <button
                className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    )
}

export default Logout