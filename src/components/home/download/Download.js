import React from 'react'
import bannerImg from "./../../../assets/service-banner.jpg"
const Download = () => {
	return (
    <div className='bg-'>
      <div className="container mx-auto px-9">
  <div className='flex items-start justify-between'>
	<div className="">
          <img src={bannerImg} alt="bannerImg"/>
        </div>
				<div className='w-[45%]'>
					<h1 className='text-white font-[800] text-4xl'>Download Your Shows Watch Offline.</h1>
					<p className='text-white font-bolder'>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.</p>
				</div>
	</div>
      </div>
    </div>
  );
}

export default Download
