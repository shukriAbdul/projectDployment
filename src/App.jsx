import React from "react";
import {useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs"
import{RxDotFilled} from "react-icons/rx"
import './App.css';

function App(){
  const  slides =[
    {
        url:  "https://img.freepik.com/free-photo/new-york-city_649448-1679.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1708300800&semt=sph",
    
    },

    {
        url:   "https://img.freepik.com/free-photo/manhattan-downtown-skyline-with-urban-skyscrapers-river-with-reflections_649448-255.jpg?w=740&t=st=1708343455~exp=1708344055~hmac=6473c8a6a69c6a243362959a86b664b93e5f96f5b9353707d4b4c94723be6069"
    },

    {
        url: "https://img.freepik.com/free-photo/complex-aerial-view-city_23-2148975282.jpg?w=740&t=st=1708343159~exp=1708343759~hmac=5ddaad489ad41bba48c6f25ee787c2b34211289fbd7ef77703c0cd34d2e4af8d"
    },
   
    {
        url:  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/City-of-the-future.jpg/1280px-City-of-the-future.jpg"
    },

  
  ];
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide =() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1;
    setCurrentIndex(newIndex);

  }


  const nextSlide =() => {
  const isLastSlide = currentIndex === slides.length-1;
  const newIndex = isLastSlide ? 0 : currentIndex +1;
  setCurrentIndex(newIndex);
  }


  const goSlideIndex = (slideIndex) =>{
    setCurrentIndex(slideIndex)
  }

    return(
        <div className=" main justify-center  px-[25rem]  py-2 duration-500 relative group">

<div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-[450px] rounded-2xl bg-center bg-cover"> </div>
     {/* icons Left */}

<div className=" icon_parent hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[26rem] text-3xl rounded-full p-2  text-white cursor-pointer ">
    <BsChevronCompactLeft onClick={prevSlide} size={30} className="icon1"/>
    </div>

    {/* icons Left */}

<div className=" icon_parent hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[26rem] text-3xl rounded-full p-2   text-white cursor-pointer ">

    <BsChevronCompactRight onClick={nextSlide} size={30} className="icon2"/>
</div>

{/* Dots... */}
<div className=" last_icons flex top-4 justify-center py-2 ">
    {slides.map((slide,slideIndex ) =>(
        <div 
        key={slideIndex}
        onClick={() => goSlideIndex(slideIndex)}
        className="cursor-pointer">
            
            < RxDotFilled  size={20}/>
            
             </div>
             
    ))}

</div>
        </div>
    )
}
export default App;