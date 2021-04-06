import React from 'react';
import './VideoDetail.css';

const VideoDetail =  ({ selectedVideo }) => {

  return (
    <div className="ui relaxed divided list">
      {selectedVideo ?
        <div>
          <div className="ui embed">
            <iframe 
              src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
              title="Youtube Video"
            />
          </div>
          <div className="ui segment">
            <h4 className="ui header">{selectedVideo.snippet.title}</h4>
            <p>{selectedVideo.snippet.description}</p>
          </div>
        </div>
        : 'Loading....'
      }
    </div>
  );
}

export default VideoDetail;
