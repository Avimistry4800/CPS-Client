import React from 'react';
import { useHistory } from 'react-router-dom';


const LoadService = ({ service }) => {
    console.log(service)
    const { name, price , desc, id} = service;

    const history =useHistory();
   const handleBooking = (id) => {
    const url = `/service/${id}`;
    history.push(url);
   }

    return (

<div>
<article className="flex h-80 flex-col bg-coolGray-50 border-2 rounded-xl mx-3 mb-6 shadow-xl border-gray-50">            
            <img alt="" className="object-cover border rounded-lg w-auto p-2 h-32" src= {`data:image/png;base64,${service.image.img}`} />
            <div className="flex flex-col flex-1 p-2">
                <small>
                    <span className="text-black text-md font-bold line-clamp-2">{name}</span> 
                </small>
                <h3 className="flex-1 py-6 text-regal-blue text-sm leading-snug line-clamp-2">{desc}</h3>
                <h3 className="text-center"> Price: ${price}</h3>

            </div>
            <div className="flex justify-evenly pb-8">
                <button className="rounded-lg border w-32 py-1 border-gray-200" >View More</button>
                <button className="rounded-lg border w-32 py-1 border-gray-200" onClick={()=> handleBooking(id) }>Book Now</button>
                 </div>
        </article>
</div>
        
    );
};

export default LoadService;