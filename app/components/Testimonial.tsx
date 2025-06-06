import React from 'react';
import Image from 'next/image';
import testimonial1 from '../asset/testimonial1.jpg';
import testimonial2 from '../asset/testimonial2.jpg';

const Testimonial = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8'>
      <Image src={testimonial1} alt="Testimonial 1" width={500} height={300} className="max-w-full h-auto" />
      <Image src={testimonial2} alt="Testimonial 2" width={500} height={250} className="max-w-full h-auto" />
    </div>
  );
};

export default Testimonial;