import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { apiKay } from "../../api/api";

const Actors = () => {
  const [actors, setActors] = useState([]);
  const { id: movieId } = useParams();

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKay}&language=en-US`
    ).then(({ data }) => setActors(data));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto px-9 my-9">
      <h2 className='text-white text-5xl font-[700] py-4'>Actors</h2>
      <Slider {...settings}>
        {actors.cast?.map((el) => (
          <div key={el.id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                alt={el.name}
                className="w-56 h-56 object-contain"
              />
              <h1 className="text-center text-white py-2">{el.original_name}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Actors;
