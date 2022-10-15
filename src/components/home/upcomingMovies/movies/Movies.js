import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";


const Movies = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-wrap items-center justify-between">
      {data.results?.slice(0, 8).map((el, idx) => {
        return (
          <div className="w-72 mb-12" key={idx}>
            <img
              src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
              alt="img"
              className="w-72 h-80 object-cover"
            />
            <div className="flex items-center justify-between">
              <h2 className="text-white py-4">{el.title}</h2>
              <span className="text-[#bde203]">{el.release_date}</span>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="border-[#fff] w-10 h-9 text-white">HD</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <MdOutlineWatchLater className="text-[#bde203]" />
                  <h5 className="text-white pl-2">128 min</h5>
                </div>
                <div className="flex items-center ml-2">
                  <AiFillStar className="text-[#bde203]" />
                  <h5 className="text-white pl-2">
                    {Math.floor(el.popularity)}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
