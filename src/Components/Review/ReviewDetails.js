import React from 'react';

const ReviewDetails = ({ review }) => {
    console.log(review);
    return (        
        <div className="flex w-1/4 mx-auto items-center h-24 my-10">
        <div className="flex bg-purple-800 p-4 rounded-lg">
          <div className="flex flex-col w-2/3 pr-4 bg">
            <p className="text-md text-left mb-2 text-gray-50">{review.name}</p>
            <p className="text-sm text-left font-light leading-5 text-gray-300">Where the earth is stepped on, there the sky is upheld</p>
            <div className="flex h-full items-end text-gray-300 hover:text-gray-50">
              <p> Rating: {review.rating}/10</p>
            </div>
          </div>
          <div className="w-1/3">
            <img className="w-full h-32 hover:animate-bounce p-1 rounded-lg" src={review.imageURL} alt="" />
          </div>
        </div>
      </div>
    );
};

export default ReviewDetails;