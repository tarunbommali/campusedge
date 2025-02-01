import React from 'react';
import HeroPage1 from '../components/HeroPage1';
import HeroPage2 from '../components/HeroPage2';
const Home = () => {
  const windowHeight = window.innerHeight;

  return (
    <div className='relative'>
      <h1 className='text-green-300'>Hello</h1>
      <div className='absolute top-0 left-0'>
      <HeroPage1 width="100%" height={`${windowHeight / 2}px`} />
      <HeroPage2/>
      </div>
    </div>
  );
};
export default Home