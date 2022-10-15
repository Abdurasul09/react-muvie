import React from 'react'
import Layout from '../Layout'
import Download from './download/Download'
import Hero from './hero/Hero'
import UpcomingMovies from './upcomingMovies/UpcomingMovies'
import TopRated from './topRated/TopRated'
const Home = () => {
	return (
		<Layout>
       <Hero/>
			 <UpcomingMovies/>
			 <Download/>
			 <TopRated/>
		</Layout>
	)
}

export default Home