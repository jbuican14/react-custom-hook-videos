import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const KEY = 'AIzaSyCLr46xh8fvpe6azbgETy5UV0Oywun1keQ';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect( ()=> {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term => {
        const res = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY,
            }
        }); //console.log(res.data.items);

        setVideos(res.data.items);
    };
    return {videos, search};    
};

export default useVideos;