import React, { useState } from 'react';
import Nabvar from '../../Navbar/Nabvar';
import Sidebar from '../Sidebar/Sidebar';


const MakeAdmin = () => {
    const [admin, setAdmin] = useState({})
    const handleBlur = e =>{
        const newAdmin = {...admin}
        newAdmin[e.target.name] = e.target.value
        setAdmin(newAdmin)
    }
    const handleSubmit = e =>{
        e.preventDefault()
        const url = 'http://localhost:5000/addAdmin'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => console.log('server side response', res))
    }
    return (
        <div className="flex ">
            <div className="">
                <Sidebar />
            </div>
           <div>
               <div className="bg-purple-600 w-screen">
                   <Nabvar />
               </div>
               <div>
               <div className="flex bg-gray-100 h-72 rounded-lg w-80 justify-center mt-24 ml-24  pt-5 pb-5">
                <div class="login-box text-center">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-gray-600 text-2xl text-center mb-5">Add New Admin</h1>
                        <div >
                        <label className=" ">Admin User Email</label> <br />
                            <input type="text" className="rounded-lg border border-gray-300 px-4 my-5 h-12" onBlur={handleBlur} name="email" required="" />
                            
                        </div>
                        <input className="w-32 h-10 text-lg rounded-lg bg-purple-600 text-white " type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
               </div>
           </div>
        </div>
    );
};

export default MakeAdmin;