import React from 'react'
import { Link } from 'react-router-dom'
// import list from '../../public/list.json'  ---> no use of it as the data is stored in the backend
import Cards from './Cards'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

const Course = () => {

    const [book, setBook] = useState([]);

    useEffect(() => {

        const getBook = async () => {
            try {
                const res = await axios.get('https://bookstore-app-backend-xxf2.onrender.com/book');
                console.log(res.data)
                setBook(res.data)
            } catch(error) {
                console.log("Error: ", error.message)
            }
        }

        getBook();

    }, [])



    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-16 pt-15 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>We're delighted to have you{" "}
                        <span className='text-pink-500'> Here! :)</span>
                    </h1>
                    <p className='mt-12'>Welcome to your personal reading space where stories, knowledge, and creativity come together.
                        Discover books across various genres, explore free and premium collections, and enjoy a simple experience
                        designed to make reading enjoyable and accessible for everyone.
                    </p>
                    <Link to="/">
                        <button className='bg-pink-500 text-white mt-6 px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                            Back
                        </button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                    {
                        book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course
