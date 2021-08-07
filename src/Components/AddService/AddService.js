import React, { useState } from 'react';

const AddService = () => {

    const [services, setServices] = useState({});
    console.log(services)
    const [image, setImage] = useState(null);
    console.log(image)

    const handleBlur = (e) => {
        const newService = { ...services };
        newService[e.target.name] = e.target.value;
        setServices(newService);
    };

    const handleImage = (e) => {
        const newImage = e.target.files[0];
        setImage(newImage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', services.name);
        formData.append('price', services.price);
        formData.append('desc', services.description);
        fetch('https://polar-scrubland-16805.herokuapp.com/addService', {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    alert("Service added successfully")
                }
            }).catch(err => {
                console.log(err);
            })
           
    }

    return (

        <div className = "container mx-auto bg-blue-100 rounded-lg">
          
            
            <div className="mt-5 md:mt-0 ">
              <form onSubmit={handleSubmit} method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5  space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                        Service Name
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">

                          <input  onBlur={handleBlur} type="text" name="name" className="focus:ring-indigo-500 focus:border-indigo-300 flex-1 block w-full  rounded-lg sm:text-sm py-3 shadow-lg pl-5 border-gray-400" placeholder="Service Title " />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      Description
                      </label>
                      <div className="mt-1">
                        <textarea onBlur={handleBlur} type="text" name="description" rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-400 shadow-lg pl-5 pt-5 rounded-lg" placeholder="Service Description" defaultValue={""} />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for your Service.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                        Service Price
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">

                          <input  onBlur={handleBlur} type="text" name="price" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-lg rounded-r-md sm:text-sm border-gray-400 shadow-lg pl-5 py-3 bg-none" placeholder="ex: 10" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Service Image
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label  className="relative cursor-pointer  rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                              <span>Upload a file</span>
                              <input onChange={handleImage} type="file" />
                            </label>
                            <p className="pl-1 ">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3  text-right sm:px-6">
                    <button type="submit" value="Submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          
          </div>
        
      );
};

export default AddService;