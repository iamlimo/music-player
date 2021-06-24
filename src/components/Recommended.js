import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ImageCover from '../assets/b-e.jpg'
import '../styles/recommended.css'

const Recommended = () => {
    const [songs, displaySongs] = useState([]);


    useState(()=>{
        const fetchSongs = async () =>{
            const res = await axios.get('https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm');

        let newData = res.data.tracks
            
        displaySongs(newData)
            
        }      
        fetchSongs()
       
    }, [])

    console.log(songs)
    return (
        <>
          <div className="teesty">Recommended</div>
        <div className="flex-container">
           
        {songs.map((song) =>{
             
             return   <div className="recommended">
            <div id="img-cover" className="" style={{ backgroundImage: `url(http://direct.rhapsody.com/imageserver/v2/albums/${song.albumId}/images/300x300.jpg)` }}></div>
            <h3 id="">{song.artistName}</h3>
            <p>{song.albumName}</p>
            </div>
         })}
           
        </div>
            

         
        </>
    )
}

export default Recommended
