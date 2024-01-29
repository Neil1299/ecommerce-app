import React, { useEffect, useState } from 'react';
import img1 from '../img/veg1.avif';
import img2 from '../img/veg5.avif';
import img3 from '../img/veg2.avif';
import img4 from '../img/veg6.avif';
import img5 from '../img/veg3.avif';
import img6 from '../img/veg7.avif';
import img7 from '../img/veg4.avif';
import img8 from '../img/veg8.avif';
import img9 from '../img/veg5.avif';
import img10 from '../img/veg10.avif'; 

const HomePage1 = () => {
  const vegArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentImage === vegArray.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }, 2000);

    return () => clearInterval(intervalId);

  }, [currentImage, vegArray.length]);

  return (
    <div className='container-fluid bg-dark min-vh-50'>
      <img className='img-fluid' src={vegArray[currentImage]} alt="" />
    </div>
  );
};

export default HomePage1;
