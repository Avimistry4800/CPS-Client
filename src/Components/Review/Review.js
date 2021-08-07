import React, { useEffect, useState } from 'react';

import ReviewDetails from './ReviewDetails';


const Review = () => {
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        fetch('https://polar-scrubland-16805.herokuapp.com/reviewList')
        .then (res => res.json())
        .then(data=> setReviewData(data))
    },[])
    return (
       
         <section className="py-6 sm:py-12 bg-coolGray-100 text-coolGray-800">
         <div className="container p-6 mx-auto space-y-8">
             <div className="space-y-2 text-center">
             <p className="text-2xl font-bold text-gray-600">REVIEWS</p>
                <p className="text-gray-500 text-xl ">Our Most Valuable Review</p>
             </div>
             
             <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">


             {
                            reviewData.map(review => <ReviewDetails review={review}></ReviewDetails>)
                        }


             </div>
         </div>
     </section>
    );
};

export default Review;