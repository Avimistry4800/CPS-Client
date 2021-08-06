import React from 'react';
import grow from '../../media/image/grow.png';

const DedicatedSection = () => {
    return (
        <section className="text-blueGray-700 ">
            <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                <div className="flex flex-col w-full mb-2 text-left ">
                    <div className="w-full mx-auto lg:w-1/2 text-center">
                        <h1 className="mx-auto mb-1 text-2xl font-bold leading-none tracking-tighter text-black lg:text-3xl title-font whitespace-normal tracking-wider">Let your pictures tell your story.</h1>
                        
                      </div>
                </div>
            </div>
            <div className="container items-center px-5 mx-auto lg:px-28">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/2">
                        <div className="p-8">
                            
                            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">The importance of visual impact in a website or digital marketing campaign cannot be overstated. Current design standard trend very photo-heavy. Gone are the days when you could snap a few pictures with your smartphone and post them on the site. Even stock photography is becoming trickier to use—low cost stock is overused and often cheesy. Whenever we can do custom photography, the results are always better. Today’s designs require high fidelity photographs for clarity and function. </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="p-8">
                            <img src={grow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DedicatedSection;