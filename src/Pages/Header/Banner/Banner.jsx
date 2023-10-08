import React, { useEffect, useState } from 'react';
import './style.css';
import { FcNext , FcPrevious} from 'react-icons/fc';

const Banner = () => {

    const [showMore , setShowMore] = useState(false)

    const text1 = "Esports events have taken the world by storm, blurring the lines between virtual and reality. These thrilling competitions bring together the best gamers from around the globe to battle it out in popular titles like League of Legends, Dota 2, and Counter-Strike. What sets esports events apart is their electrifying atmosphere.";

    const text2 = "Football, the world's most popular sport, finds its ultimate expression in FIFA events. These global spectacles bring together nations, cultures, and fans from every corner of the planet. The FIFA World Cup, held every four years, stands as the crown jewel, captivating billions with its exhilarating matches and unforgettable moments. Additionally, FIFA organizes tournaments like the Women's World Cup, U-20 World Cup, and Club World Cup, further showcasing the beautiful game's diversity and excellence. These events are more than just football; they are celebrations of unity, sportsmanship, and the power of shared dreams. FIFA events continue to inspire, entertain, and unite people worldwide.";

    const text3 = "Racing game events have become the ultimate playground for adrenaline junkies and gaming enthusiasts alike. These virtual competitions offer a thrilling experience that transcends the boundaries of reality. From the iconic tracks of Formula 1 to the off-road chaos of rally racing, there's a racing game event for every taste.";

    const text5 = "Dota events, short for Defense of the Ancients events, have become a cornerstone of the competitive gaming world. These tournaments bring together some of the most skilled players and passionate fans from around the globe to celebrate the iconic multiplayer online battle arena game. From The International, offering multi-million dollar prize pools, to regional competitions, Dota events offer excitement and entertainment to both players and spectators alike."

    const text6 = "Boss battle events have become a staple in the world of gaming, offering players a unique and exhilarating gaming experience. These epic encounters pit players against formidable foes, challenging their skills, strategy, and teamwork. Whether in role-playing games, action-adventures, or even mobile apps, boss battles bring an element of excitement and anticipation that sets them apart."
    
    useEffect(() => {
        const slideNext = () => {
          const lists = document.querySelectorAll('.item');
          document.getElementById('slide').appendChild(lists[0].cloneNode(true));
          document.getElementById('slide').removeChild(lists[0]);
        };
    
        const slidePrev = () => {
          const lists = document.querySelectorAll('.item');
          const lastItem = lists[lists.length - 1];
          document.getElementById('slide').insertBefore(lastItem.cloneNode(true), lists[0]);
          document.getElementById('slide').removeChild(lastItem);
        };
    
        document.getElementById('next').addEventListener('click', slideNext);
        document.getElementById('prev').addEventListener('click', slidePrev);
    
        const autoSlide = () => {
            slideNext();
          };
    
        const autoSlideInterval = setInterval(autoSlide, 6000);
        return () => {
          document.getElementById('next').removeEventListener('click', slideNext);
          document.getElementById('prev').removeEventListener('click', slidePrev);
          clearInterval(autoSlideInterval);
        };
      }, []);
        const toggleText = () => {
            setShowMore(!showMore);
        };
        
    return (
        <div>
      <div>
        <div>
        <div className="container">
          <div id="slide" className="flex space-x-5 overflow-x-scroll p-5">
            <div className="item w-full h-screen bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/side-view-friends-winning-videogame_23-2149349984.jpg?size=626&ext=jpg&ga=GA1.1.1683526684.1696775679&semt=ais)' }}>
              <div className="content p-4 text-white">
                <div className="name text-3xl font-bold">Esports Events: Where Virtual Meets Reality</div>
                <div className="description my-2">
                    { showMore ? text1 :  text1.substring(0, 50)}
                    <button className='bg-[#eec645] ml-4 rounded text-white' onClick={toggleText}>
                    {showMore ? 'Read Less...' : 'Read More...'}
                    </button>
                </div>
              </div>
            </div>
            <div className="item w-full h-screen bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/stadium-with-purple-roof-lights-that-says-world-cup-it_1340-34178.jpg?size=626&ext=jpg&ga=GA1.1.1683526684.1696775679&semt=ais)' }}>
              <div className="content p-4 text-white">
                <div className="name text-3xl font-bold"><span className='text-[#eec645]'>The Global Spectacle:</span> FIFA Events Unite the World in Football Passion</div>
                <div className="description my-2">
                    { showMore ? text2 :  text2.substring(0, 50)}
                    <button className='bg-[#eec645] ml-4 rounded text-white' onClick={toggleText}>
                    {showMore ? 'Read Less...' : 'Read More...'}
                    </button>
                </div>
              </div>
            </div>
            <div className="item w-full h-screen bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/motocross-rider-action-motocross-sport_654080-1649.jpg?size=626&ext=jpg&ga=GA1.2.1683526684.1696775679&semt=ais)' }}>
              <div className="content p-4 text-white">
                <div className="name text-3xl font-bold"><span className='text-[#eec645]'>Adrenaline-Pumping Action:</span> The World of Racing Game Events</div>
                <div className="description my-2">
                    { showMore ? text3 :  text3.substring(0, 50)}
                    <button className='bg-[#eec645] ml-4 rounded text-white' onClick={toggleText}>
                    {showMore ? 'Read Less...' : 'Read More...'}
                    </button>
                </div>
              </div>
            </div>
            <div className="item w-full h-screen bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmFsb3JlbnQlMjBnYW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)' }}>
              <div className="content p-4 text-white">
                <div className="name text-3xl font-bold"><span className='text-[#eec645]'>Dota:</span> The Thrilling World of Dota Events</div>
                <div className="description my-2">
                    { showMore ? text5 :  text5.substring(0, 50)}
                    <button className='bg-[#eec645] ml-4 rounded text-white' onClick={toggleText}>
                    {showMore ? 'Read Less...' : 'Read More...'}
                    </button>
                </div>
              </div>
            </div>
            <div className="item w-full h-screen bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmFsb3JlbnQlMjBnYW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)' }}>
              <div className="content p-4 text-white">
                <div className="name text-3xl font-bold"><span className='text-[#eec645]'>Boss Battle :</span> The Thrill of Boss Battle Events</div>
                <div className="description my-2">
                    { showMore ? text6 :  text6.substring(0, 50)}
                    <button className='bg-[#eec645] ml-4 rounded text-white' onClick={toggleText}>
                    {showMore ? 'Read Less...' : 'Read More...'}
                    </button>
                </div>
              </div>
            </div>
          </div>    
        </div>
        <div className="buttons  mt-5">
          <button id="prev"><FcPrevious></FcPrevious></button>
          <button id="next"><FcNext></FcNext></button>
        </div>
      </div>
    </div>
    </div>
    );
};

export default Banner;