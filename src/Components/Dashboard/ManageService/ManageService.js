import React, { useEffect, useState } from 'react';
import { nativeTouchData } from 'react-dom/test-utils';
import Nabvar from '../../Navbar/Nabvar';
import Sidebar from '../Sidebar/Sidebar';



const ManageService = () => {
    const [manageService, setManageService] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setManageService(data);
                
            })
    }, [])

    const handleDelete = id =>
    {
       id && fetch(`http://localhost:5000/services/${ id }`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .then(error => console.log(error))
            alert("Service deleted successfully")
            
    }

   

    return (
       <div className=" flex ">
           <div className="md: ">
               <Sidebar manageService={manageService} handleDelete={handleDelete}/>
           </div>
           <div>
               <div className="bg-gray-400  w-full -mt-2">
                   <Nabvar  className=""/>
               </div>
           <div className="flex flex-col mt-5">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Service Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Price
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                  {manageService.map(service =>  (
                      <tr key={service.name}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                    
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{service.name}</div>
                              
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{service.desc}</div>
                          
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ {service.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <p onClick={() => handleDelete(service._id)} className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                          Delete
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
           </div>
       </div>
      )


    
};

export default ManageService;