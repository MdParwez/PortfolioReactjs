import React from 'react';

import duke from '../assets/duke.png';
import infosys from '../assets/infosys.png';
import javascript1 from '../assets/javascript1.png';
import fronendmeta from '../assets/fronendmeta.png';
import gfg from '../assets/gfg.png';
import metafront from '../assets/metafront.png';
import java from '../assets/java.png';
import data from '../assets/data.png';
import deepai from '../assets/deepai.jpeg';

const Certificates = () => {
  return (
    <div name='certificates' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Certificates</p>
          <p className='py-4'></p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {[
            infosys,
            duke,
            javascript1,
            fronendmeta,
            gfg,
            metafront,
            java,
            data,
            deepai
          ].map((certificate, index) => (
            <div
              key={index}
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 relative'
            >
              <img
                className='w-full h-full object-cover'
                src={certificate}
                alt={`Certificate ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
