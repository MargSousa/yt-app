import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import useVideos from './hooks/useVideos';

// Vercel Deployment: https://videos-hooks-sand-theta.vercel.app/
// Netligy Deployment: https://competent-ride-005420.netlify.app/

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('News');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="App ui container">
      <SearchBar search={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;