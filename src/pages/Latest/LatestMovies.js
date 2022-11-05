import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const LatestMovies = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  console.log(data);

  return (
    <Slider {...settings}>
      {data.results?.map((el, idx) => {
        return (
          <div className="p-4" key={idx}>
            <NavLink to={`/movie/${el.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                alt="img"
                className="w-full h-[] object-cover rounded"
              />
            </NavLink>
            <div className="flex items-center justify-between">
              <h2 className="text-white py-4">{el.title}</h2>
              <span className="text-[#e2d703]">{el.release_date}</span>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="border-[#fff]  text-sm text-[#e2d703] border p-1">HD</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <MdOutlineWatchLater className="text-[#e2d703]" />
                  <h5 className="text-white pl-2">128 min</h5>
                </div>
                <div className="flex items-center ml-2">
                  <AiFillStar className="text-[#e2d703]" />
                  <h5 className="text-white pl-2">
                    {Math.floor(el.popularity)}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default LatestMovies;
