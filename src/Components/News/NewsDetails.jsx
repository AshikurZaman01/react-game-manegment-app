import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const NewsDetails = () => {
    const { id } = useParams();
    const newsData = useLoaderData();

    const newss = newsData.find( news => news.id === parseInt(id));
    console.log(newss)
    return (
        <div>
            <div className='w-[50%] mx-auto flex justify-center items-center h-[100vh]'>
                <div >
                    <div className='w-[500px]'>
                        <img className='w-full' src={newss.image} alt="" />
                    </div>
                    <div>
                        <h1 className='text-3xl p-4 text-golden font-bold'>{newss.title}</h1>
                        <p className='text-justify'>{newss.description}</p>
                    </div>
                    <div>
                        <p className='text-center text-golden'>Publish Date :{newss.publish_date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;