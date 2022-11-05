import axios, { Axios } from 'axios';
import React,{useEffect, useState} from 'react'
import { apiKay } from '../../api/api';
import NowPlayingMovies from './NowPlayingMovies';



const NowPlaying = () => {

	const [getData, setGetData] = useState([]);
  console.log(getData);
	useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKay}&language=en-US&page=1`)
		.then(({data}) => setGetData(data.results))
	},[])


	return (
		<div className='popular h-[100vh] py-[3rem]'>
      <section>
				<div className='container mx-auto px-9'>
					<div className='flex items-center justify-between py-20' >
						<div>
								<span className='text-[#e2d703] text-l font-bold '>ONLINE STREAMING</span>
						<h1 className='text-white text-5xl font-[700] pt-4'>Now Playing Movies</h1>
						</div>
					
						<div>
							<button className='px-12 py-2 text-white bg-gray-800 rounded-3xl border-[#e2d703] border-2'>Movies</button>
							<button className='px-12 py-2 text-white bg-gray-800 rounded-3xl border-[#e2d703] border-2 mx-3'>TV Shows</button>
							<button className='px-12 py-2 text-white bg-gray-800 rounded-3xl border-[#e2d703] border-2'>Anime</button>
						</div>

					</div>
					<NowPlayingMovies data={getData}/>
				</div>
			</section>
    </div>
	)
}

export default NowPlaying