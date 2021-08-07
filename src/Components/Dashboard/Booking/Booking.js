import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import Nabvar from "../../Navbar/Nabvar";
import PaymentProcess from "../PaymentProcess/PaymentProcess";
import Sidebar from "../Sidebar/Sidebar";


const Booking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams()
    console.log(id)
    const [serviceData,setServiceData] = useState({})

    useEffect(()=>{
        fetch(`https://polar-scrubland-16805.herokuapp.com/serviceBook/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setServiceData(data);
        })  
  },[])
  console.log(serviceData)
  const {name, price} = serviceData

  const [serviceInfo, setServiceInfo] = useState({})
  console.log(serviceInfo, loggedInUser)

  const newService = { name, price, ...loggedInUser };
  console.log("Name Service:" , newService)
  const handleBlur = (e) => {
    newService[e.target.name] = e.target.value;
    setServiceInfo(newService);
};
    return (
        <div className="flex justify">
            <div className=" w-1/3   ">
                <Sidebar />
            </div>
            <div className="container w-2/3 md:w-full">
                <div>
                <div className="bg-purple-600 ">
                   <Nabvar />
               </div>
                </div>
            <div className="flex justify-center pl-10 items-center py-10 md:py-40  bg-purple-200 w-full">
                <div class="mx-auto  ">
                    <form>
                        <h1 className="text-gray-600 text-2xl font-bold ">Booking Item Payment</h1>
                        <div class="py-5">
                        <label className="text-lg  mb-5 text-gray-500 ">Username</label> <br/>
                            <input value={loggedInUser.userName} onBlur={handleBlur} type="text" className="my-4  py-2 border border-gray-200 rounded-lg" />
                           
                        </div>
                        <div class="">
                        <label className="text-lg  mb-5 text-gray-500 ">Service Name</label> <br/>
                            <input type="text" name="service" required="" value={serviceData.name} className="my-4 py-2 border border-gray-200 rounded-lg"/>
                            
                        </div>
                        <div class="py-4">
                        <label className="text-lg  mb-5 text-gray-500 ">Price</label> <br/>
                            <input value={serviceData.price} type="text" name="price" required="" className="my-4 py-2 border border-gray-200 rounded-lg"/>
                            
                        </div>
                        
                    </form>
                        <div className="my-3">
                        <PaymentProcess newService={newService}/>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;