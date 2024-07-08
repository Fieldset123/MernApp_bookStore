import React from 'react'

function Card({item}) {
    console.log(item);
    return (
        <>
        <div className="mt-6 mb-4 flex">
        <div className="card w-92 mx-3 bg-base-100 shadow-xl  hover:cursor-pointer hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions  justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 z-5 cursor-pointer">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
          
        </>
    )
}

export default Card
