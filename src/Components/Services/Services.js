import React, { useEffect, useState } from 'react';
import LoadService from '../LoadService/LoadService';


const Services = () => {
    const [services, setServices]= useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> {
            setServices(data);
        })
    },[])
    return (
        <section className="py-6 sm:py-12 bg-coolGray-100 text-coolGray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">OUR SERVICES</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">


                    {
                        services.map(services => (<LoadService  id={services._id} service={services}></LoadService>))
                    }


                </div>
            </div>
        </section>
    );
};

export default Services;