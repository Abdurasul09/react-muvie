import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Movies from '../components/home/upcomingMovies/movies/Movies';

const Popular = () => {
	const [getData, setGetData] = useState([]);
  console.log(getData);
	useEffect(() => {
    axios("https://api.themoviedb.org/3/movie/popular?api_key=72315348c29a41a225bae93956036048&language=en-US&page=1")
		.then(res => setGetData(res.data))
	},[])


	return (
		<div className='bg-gray-900 h-[100vh] py-[3rem]'>
      <section>
				<div className='container mx-auto px-9'>
					<div className='flex items-center justify-between py-20' >
						<div>
								<span className='text-[#bde203] text-l font-bold '>ONLINE STREAMING</span>
						<h1 className='text-white text-5xl font-[700] pt-4'>Popular Movies</h1>
						</div>
					
						<div>
							<button className='px-12 py-2 text-white bg-gray-800 rounded-3xl border-[#bde203] border-2'>Movies</button>
							<button className='px-12 py-2 text-white bg-gray-800 rounded-3xl border-[#bde203] border-2 mx-3'>TV Shows</button>
							<button className='px-12 py-2 text-white bg-gray-800 rounded-3xl border-[#bde203] border-2'>Anime</button>
						</div>

					</div>
					<Movies data={getData}/>
				</div>
			</section>
    </div>
	)
}

export default Popular;