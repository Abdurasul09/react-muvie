import React from 'react'
import img1 from "./../../../../assets/upcoming-1.png"
import img2 from "./../../../../assets/upcoming-2.png"
import img3 from "./../../../../assets/upcoming-3.png"
import img4 from "./../../../../assets/upcoming-4.png"
import {MdOutlineWatchLater} from "react-icons/md"
import {AiFillStar} from "react-icons/ai"

const Movies = () => {
	return (
   <div className='flex items-center justify-between'>
		 <div className='w-72 h-72'>
      <img src={img1} alt="img" className='w-72 h-80 object-cover' />
      <div className='flex items-center justify-between'>
        <h2 className='text-white '>The Northman</h2>
        <span className='text-[#bde203]'>2022</span>
      </div>
      <div className='flex items-center justify-between'>
        <h3 className='border-[#fff] w-10 h-9 text-white'>HD</h3>
       <div className='flex items-center'>
			 <div className='flex items-center'>
          <MdOutlineWatchLater  className='text-[#bde203]'/>
          <h5 className='text-white'>128 min</h5>
        </div>
				<div className='flex items-center ml-2'>
          <AiFillStar className='text-[#bde203]'/>
          <h5 className='text-white'>8.5</h5>
        </div>
			 </div>
      </div>
    </div>
		<div className='w-72 h-72'>
      <img src={img2} alt="img" className='w-72 h-80 object-cover' />
      <div className='flex items-center justify-between'>
        <h2 className='text-white '>The Northman</h2>
        <span className='text-[#bde203]'>2022</span>
      </div>
      <div className='flex items-center justify-between'>
        <h3 className='border-[#fff] w-10 h-9 text-white'>HD</h3>
       <div className='flex items-center'>
			 <div className='flex items-center'>
          <MdOutlineWatchLater  className='text-[#bde203]'/>
          <h5 className='text-white'>128 min</h5>
        </div>
				<div className='flex items-center ml-2'>
          <AiFillStar className='text-[#bde203]'/>
          <h5 className='text-white'>8.5</h5>
        </div>
			 </div>
      </div>
    </div>
		<div className='w-72 h-72'>
      <img src={img3} alt="img" className='w-72 h-80 object-cover' />
      <div className='flex items-center justify-between'>
        <h2 className='text-white '>The Northman</h2>
        <span className='text-[#bde203]'>2022</span>
      </div>
      <div className='flex items-center justify-between'>
        <h3 className='border-[#fff] w-10 h-9 text-white'>HD</h3>
       <div className='flex items-center'>
			 <div className='flex items-center'>
          <MdOutlineWatchLater  className='text-[#bde203]'/>
          <h5 className='text-white'>128 min</h5>
        </div>
				<div className='flex items-center ml-2'>
          <AiFillStar className='text-[#bde203]'/>
          <h5 className='text-white'>8.5</h5>
        </div>
			 </div>
      </div>
    </div>
		<div className='w-72 h-72'>
      <img src={img4} alt="img" className='w-72 h-80 object-cover' />
      <div className='flex items-center justify-between'>
        <h2 className='text-white '>The Northman</h2>
        <span className='text-[#bde203]'>2022</span>
      </div>
      <div className='flex items-center justify-between'>
        <h3 className='border-[#fff] w-10 h-9 text-white'>HD</h3>
       <div className='flex items-center'>
			 <div className='flex items-center'>
          <MdOutlineWatchLater  className='text-[#bde203]'/>
          <h5 className='text-white'>128 min</h5>
        </div>
				<div className='flex items-center ml-2'>
          <AiFillStar className='text-[#bde203]'/>
          <h5 className='text-white'>8.5</h5>
        </div>
			 </div>
      </div>
    </div>
	 </div>
  );
}

export default Movies