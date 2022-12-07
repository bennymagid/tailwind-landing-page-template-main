import React from 'react';
import { Link } from 'react-router-dom';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Meet the Team</h2>
            {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-800 rounded shadow-xl">
              <img className="rounded-md mb-3 shadow-lg" src='src\images\ketanjog.jpeg'></img>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Ketan Jog</h4>
              <p className="text-gray-400 text">Ketan co-founded his first AI startup while in college 
              that successfully raised in 2022. With a Science Research Fellowship at Columbia University, 
              Ketan has a B.A in Math and Statistics and a B.S in Computer Science. A builder at heart, his 
              most recent crypto project aims to make cloud computing a Web3 native resource. Ketan has a diverse 
              research experience working with cutting edge faculty in unsupervised and reinforcement learning, 
              applied math and neuroscience.</p>
              <div className="md:flex md:justify-between self-end">
                <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0 ">
                  <li className="ml-4">
                    <Link to="#" className="flex justify-center items-center text-gray-200 hover:text-gray-800 bg-gray-600 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                      <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 -130 440 800">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>                
                      </svg>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link to="#" className="flex justify-center items-center text-gray-200 hover:text-gray-800 bg-gray-600 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                    </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-800 rounded shadow-xl">
              <img className="rounded-md mb-3 shadow-lg" src='src\images\andrew.png'></img>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Andrew Magid</h4>
              <p className="text-gray-400 text">Andrew received a degree from Columbia University in 
              Math and Computer Science with a research focus in Systems and Security. His first exposure 
              to crypto came while researching mining vulnerabilities on proof of work protocols. 
              He further worked on supply chain security and sandboxing during his time at the software 
              systems lab. Andrew later worked as a Quant Dev in the market making arm of the global markets 
              division at Goldman Sachs.</p>
              <div className="md:flex md:justify-between self-end">
                <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                  <li className="ml-4">
                    <Link to="#" className="flex justify-center items-center text-gray-200 hover:text-gray-800 bg-gray-600 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                      <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 -130 440 800">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>                
                      </svg>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link to="#" className="flex justify-center items-center text-gray-200 hover:text-gray-800 bg-gray-600 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                    </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-800 rounded shadow-xl">
              <img className="rounded-md mb-3 shadow-lg" src='src\images\marinminamiya.jpeg'></img>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Marin Minamiya</h4>
              <p className="text-gray-400 text">Marin Minamiya is a Computer Science student at 
              Columbia University in the City of New York. She has been keen on Blockchain since 
              her first encounter in 2011. Marin has experience working with the advertisement industry
               and she has raised US$500K for her personal challenge - to complete The Explorer’s 
               Grand Slam (Seven summits + North & South Pole). In April 2017, she became the youngest
                person in the world to complete this feat.</p>
              <div className="md:flex md:justify-between self-end">
                <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                  <li className="ml-4">
                    <Link to="#" className="flex justify-center items-center text-gray-200 hover:text-gray-800 bg-gray-600 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                      <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 -130 440 800">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>                
                      </svg>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link to="#" className="flex justify-center items-center text-gray-200 hover:text-gray-800 bg-gray-600 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                    </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
