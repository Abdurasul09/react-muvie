import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/home/hero/Hero";
import Latest from "./pages/Latest";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Upcomming from "./pages/Upcomming";

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
        <Route path="/Latest" element={<Latest/>}/>
      </Routes>
    </div>
  );
}

export default App;
