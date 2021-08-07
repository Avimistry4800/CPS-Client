import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        const url = "https://polar-scrubland-16805.herokuapp.com/isAdmin";
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then((res) => res.json())
            .then((data) => {setIsAdmin(data)
            console.log(data)});
            
    }, []);
  


    return (
        <div className="flex flex-col w-20 md:w-72 h-auto px-4 pt-8 bg-white  dark:bg-gray-800 dark:border-gray-600">
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
            {isAdmin ? ( 
                <div>
                    <Link to="/home" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                     <span className="lg:mx-4 lg:pl-5 font-medium">Home</span>
                    </Link>
                    <Link to="/orderList" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                     <span className="lg:mx-4 lg:pl-5 font-medium">Order List</span>
                    </Link>
                    <Link to="/addService" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                     <span className="lg:mx-4 lg:pl-5 font-medium">Add Service</span>
                    </Link>
                    <Link to="/makeAdmin" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                     <span className="lg:mx-4 lg:pl-5 font-medium">Make Admin</span>
                    </Link>
                    <Link to="/manageService" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                     <span className="lg:mx-4 lg:pl-5 font-medium">Manage Service</span>
                    </Link>
                    </div> 
                    ) : (
                        <div>
                    <Link to="/service/:id" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                     <span className="lg:mx-4 lg:pl-5 font-medium">Payment</span>
                    </Link>
                    <Link to="/bookingList" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                     <span className="lg:mx-4 lg:pl-5 font-medium">Booking List</span>
                    </Link>
                    <Link to="/addReview" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                     <span className="lg:mx-4 lg:pl-5 font-medium">Add Review</span>
                    </Link>
                    </div>
                    )}
            </nav>
    
          </div>
          <div className="flex items-center mt-96 pt-96 px-4 -mx-2">
            <h4 className="mx-2 pl-5 font-medium text-gray-800 dark:text-gray-200 hover:underline">CPS Studio</h4>
          </div>
        </div>
      );
};

export default Sidebar;
