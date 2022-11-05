import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { apiKay } from "../../api/api";
import Actors from "./Actors";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKay}&language=en-US`
    ).then(({ data }) => setMovie(data));
  }, []);

  const durationTime = Math.floor(movie.runtime / 60) + "h" + " " + (movie.runtime % 60) + " min";


  return (
    <div className="detailPage pt-[10rem]">
      <div className="container mx-auto px-9">
        <div className="flex items-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
            className="w-80 h-100 rounded"
          />
          <div className="pl-12 w-1/2">
            <span className="text-2xl text-[#e2d703] font-bold">
              New Episodes
            </span>
            <h1 className="text-[4rem] text-gray-200 font-bold">
            {movie.original_title}
            </h1>
            <div className="flex my-4">
              <h3 className="border-[#fff]  text-[12px] text-[#e2d703] border-2 p-1">HD</h3>
                {movie.genres?.map((el) => (
                  <h1 key={el.id} className="text-gray-200 mx-2 font-bold">
                    {el.name},
                  </h1>
                ))}
              </div>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <MdOutlineWatchLater className="text-[#e2d703]" />
                <h5 className="text-white pl-2">{durationTime}</h5>
              </div>
              <div className="flex items-center ml-2">
                <AiFillStar className="text-[#e2d703]" />
                <h5 className="text-white pl-2">
                  {Math.floor(movie.popularity)}
                </h5>
              </div>
            </div>
            

            <p className="text-gray-200">
              A bank teller called Guy realizes he is a background character in
              an open world video game called Free City that will soon go
              offline.
            </p>
            <div className="flex items-center justify-between border border-stone-800 rounded mt-9 bg-[#242c38] w-fit p-6">
              <div className="mr-8">
                <svg
                  className="h-8 w-8 text-gray-200"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="6" cy="12" r="3" />{" "}
                  <circle cx="18" cy="6" r="3" />{" "}
                  <circle cx="18" cy="18" r="3" />{" "}
                  <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />{" "}
                  <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
                </svg>
                <span className="text-gray-200 text-sm">Share</span>
              </div>
              <div className="mr-8">
                <h2 className="text-gray-50 text-xl font-bold">Prime Video</h2>
                <p className="text-gray-50 text-sm">Streaming Channels</p>
              </div>
              <button className="border-2 rounded-3xl border-[#e2d703] px-4  py-2 bg-gray-700 transition duration-150  text-white font-bold hover:bg-[#e2d703] text-[1rem] uppercase">
                Wotch now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Actors/>
    </div>
  );
};

export default MovieDetailsPage;
