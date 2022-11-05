import React, {useEffect, useState} from 'react'
import Layout from '../../components/Layout'
import axios from 'axios';
import LatestMovies from './LatestMovies';
import { apiKay } from '../../api/api';


const Latest = () => {

	const [getData, setGetData] = useState([]);

	console.log(getData);
	useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKay}&language=en-US&page=1`)
		.then(res => setGetData(res.data))
	},[])
	

	return (
		<Layout>
			<div className='latest h-[100vh] py-[3rem]'>
      <section>
				<div className='container mx-auto px-9'>
					<div className='flex items-center justify-between py-20' >
						<div>
								<span className='text-[#bde203] text-l font-bold '>ONLINE STREAMING</span>
						<h1 className='text-white text-5xl font-[700] pt-4'>Latest Movies</h1>
						</div>
					
						<div>
							<button className='px-12 py-2 text-white bg-gray-800 rounded-3xl border-[#e2d703] border-2'>Movies</button>
							<button className='px-12 py-2 text-white bg-gray-800 rounded-3xl border-[#e2d703] border-2 mx-3'>TV Shows</button>
							<button className='px-12 py-2 text-white bg-gray-800 rounded-3xl border-[#e2d703] border-2'>Anime</button>
						</div>

					</div>
					<LatestMovies data={getData}/>
				</div>
			</section>
    </div>
		</Layout>
	)
}

export default Latest