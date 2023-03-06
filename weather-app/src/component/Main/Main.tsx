import React, { useEffect, useState } from 'react';

const Main = () => {
  const [currentTime,setCurrentTime] = useState(0)
  useEffect(()=>{
    setCurrentTime(new Date().getHours())
    console.log(currentTime)
  },[])
  return (
    <div className={`h-screen w-screen overflow-hidden bg-hero-pattern ${currentTime>=17?'bg-black':'bg-white'}`}>
      meaw
    </div>
  );
};

export default Main;