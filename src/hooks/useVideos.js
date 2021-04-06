import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultValue) => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultValue);
  }, [defaultValue]);

  const search = async (input) => {
    const response = await youtube.get('/search', {
      params: {
        q: input,
      }
    })
    setVideos(response.data.items);
  };

  return [videos, search];
}
 
export default useVideos;