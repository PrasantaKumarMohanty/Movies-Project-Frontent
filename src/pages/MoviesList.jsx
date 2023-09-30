import React, { useEffect, useState } from 'react'
import axios from 'axios';

const MoviesList = () => {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/movies')
            .then((res) => {
                // console.log("Its data here", res.data);
                setMoviesData(res.data);
            })
            .catch((err) => {
                console.log("Error is comming", err)
            })
    }, []);

    let demoMoviePic = 'https://flxt.tmsimg.com/assets/p8553063_b_v13_ay.jpg'

    return (
        <div>
            <div class="flex items-center bg-indigo-100 w-screen min-h-screen">
                <div class="container ml-auto mr-auto flex flex-wrap items-start">
                    <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
                        <h1 class=" text-center text-3xl lg:text-4xl text-gray-700 font-extrabold">
                            Movies List
                        </h1>
                    </div>

                    {
                        moviesData.length > 0
                        &&
                        moviesData?.map((movie, i) => {
                            console.log("Its data here", movie)
                            return (
                                <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2" key={i}>
                                    <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                                        <figure class="flex justify-center items-center mb-2">
                                            <img className='h-60 w-60' src={demoMoviePic} />
                                        </figure>
                                        <div class="rounded-lg p-4 bg-purple-700 flex flex-col">
                                            <div>
                                                <h5 class="text-white text-2xl font-bold leading-none">
                                                    {movie?.title}
                                                </h5>
                                                <div class="text-lg text-white font-semibold my-2">Ratings : {movie?.rating}</div>
                                                <div class="text-lg text-white font-semibold">released date : {movie?.rDate}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default MoviesList
