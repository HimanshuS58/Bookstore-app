import React from 'react'

const Cards = ({ item }) => {
    return (
       <>
        <div className='mt-7 my-3'>
            <div className="card bg-base-100 w-96 shadow-xl transition-all 
                            duration-300 ease-in-out hover:scale-105 dark:bg-slate-800 dark:text-white dark:border">
                <figure>
                    <img
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">₹{item.price}</div>
                        <div className="cursor-poineter px-2 py-1 rounded-lg border-2 hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default Cards