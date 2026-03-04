import React from 'react'
import Cards from './Cards';

import Slider from "react-slick";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"

const Freebook = () => {

  const [book, setBook] = useState([]);

  useEffect(() => {

    const getFreeBook = async () => {
      try {
        const res = await axios.get('https://bookstore-app-backend-tp91.onrender.com');
        const data = res.data.filter((item) => (item.category === "free"));
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log("Error: ", error.message)
      }
    }

    getFreeBook();

  }, [])


  // const filterData = list.filter((item) => (item.category === "free"));
  // console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>

        <div>
          <h1 className='font-semibold text-xl pb-2'>
            Free Offered Courses
          </h1>
          <p>
            Browse our free courses covering various subjects, thoughtfully created to support learning,
            encourage curiosity, and make knowledge accessible for everyone.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {
              book.map((item) => (
                <Cards item={item} key={item.id} />
              ))
            }
          </Slider>
        </div>

      </div>
    </>
  )
}

export default Freebook
