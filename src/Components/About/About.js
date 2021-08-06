import React from 'react';

const About = () => {
    return (

        <div className=" mx-auto ">
          <div className="grid grid-cols-1 border border-gray-100 rounded-lg md:grid-cols-2 h-screen">
            <div className="max-h-96 md:h-screen">
              <img className="w-screen h-screen object-cover object-top" src="https://i.ibb.co/rdCV9QD/pexels-matheus-bertelli-2608516.jpg" alt="" />
            </div>
            <div className="flex bg-gray-100 p-10">
              <div className="mb-auto mt-auto ml-5 max-w-lg">
                <h1 className="text-3xl uppercase">Who are we?</h1>
                <p className="font-semibold mb-5 mt-3">Creative Photography Sollution Studio</p>
                <p>We are the best selected creative team of photographer designer & event organizers in your city. consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">Email us</button>
              </div>
            </div>
          </div>
        </div>
      );
    
};

export default About;