import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const News = () => {

  const [newss, setNewss] = useState(null);

  useEffect(() => {
    fetch('/news.json')
      .then(res => res.json())
      .then(data => setNewss(data))
      
  }, []);

  return (
    <div>
      <div>
        <h1 className='text-center my-[30px] text-4xl font-bold'><span className='text-golden'>Blog</span> and News</h1>
      </div>
      <div  className='grid grid-cols-1 md:grid-cols-3'>
        {
          newss?.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
        
        }
      </div>
    </div>
  );
};

export default News;
