import React, { useState } from 'react';

import { useForm } from "react-hook-form";
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Nabvar from '../../Navbar/Nabvar';

const AddReview = () => {

    const { register, handleSubmit, errors } = useForm();

    const [imageURL, setImageURL] = useState(null)


    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            description: data.description,
            rating: data.rating,
            imageURL: imageURL
        };
        const url = 'http://localhost:5000/addReview'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'dde3c3bb7c106f0d15bdad728e6bff80');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response){
            setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    return (
        <div className="flex container">
          <div>
            <Sidebar />
          </div>
          <div className="w-full">
          <div className = "mx-auto   bg-purple-100 rounded-lg">
            <div className="bg-purple-600 mb-24">
            <Nabvar />
            </div>
          <div className="text-center text-gray-600 text-3xl mb-4 font-bold">
<p >Add a Review</p>
          </div>
            
        <div className="mt-5 md:mt-0 ">
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5  space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                    Title
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">

                      <input placeholder="Title" name="name"{...register("name")}  type="text" className="focus:ring-indigo-500 focus:border-indigo-300 flex-1 block w-full  rounded-lg sm:text-sm py-3 shadow-lg pl-5 border-gray-400" placeholder="Service Title " />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  Description
                  </label>
                  <div className="mt-1">
                    <textarea placeholder="description" name="description"{...register("description")}  type="text"  rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-400 shadow-lg pl-5 pt-5 rounded-lg" placeholder="Service Description" defaultValue={""} />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description for your Service.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                    Service Rating
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">

                      <input  placeholder="1-10" name="rating"{...register("rating")}  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-lg rounded-r-md sm:text-sm border-gray-400 shadow-lg pl-5 py-3 bg-none" placeholder="ex: 10" />
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
                          <input onChange={handleImageUpload} type="file" name="image"  />
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
          </div>
        </div>
    
    )
};

export default AddReview;