import React from 'react'
import Movies from './movies/Movies'

const UpcomingMovies = () => {
	return (
    <div className='bg-gray-900 h-[100vh]'>
      <section>
				<div className='container mx-auto px-9'>
					<div className='flex items-center justify-between py-20' >
						<div>
								<span className='text-[#bde203] text-l font-bold '>ONLINE STREAMING</span>
						<h1 className='text-white text-5xl font-[700] pt-4'>Upcoming Movies</h1>
						</div>
					
						<div>
							<button className='px-12 py-2 text-white bg-gray-800 rounded-3xl border-[#bde203] border-2'>Movies</button>
							<button className='px-12 py-2 text-white bg-gray-800 rounded-3xl border-[#bde203] border-2 mx-3'>TV Shows</button>
							<button className='px-12 py-2 text-white bg-gray-800 rounded-3xl border-[#bde203] border-2'>Anime</button>
						</div>

					</div>
					<Movies/>

				</div>
			</section>
    </div>
  );
}

export default UpcomingMovies