import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/home/hero/Hero";
import Latest from "./pages/Latest/Latest";
import NowPlaying from "./pages/nowPlaying/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/topRated/TopRated";
import Upcomming from "./pages/upcomming/Upcomming";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import SearchPage from "./pages/searchPage/SearchPage";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/top-rated" element={<TopRated/>}/>
        <Route path="/now-playing" element={<NowPlaying/>}/>
        <Route path="/upcomming" element={<Upcomming/>}/>
        <Route path="/latest" element={<Latest/>}/>
        <Route path="/movie/:id" element={<MovieDetailsPage/>}/>
        <Route path="/search-movie/:movieName" element={<SearchPage/>}/>
      </Routes>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
