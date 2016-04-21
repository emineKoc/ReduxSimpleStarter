import React from 'react';
// this one also does not need any changes or state. We use functional component

const VideoDetail = ({video}) => {

  if (!video) {
    return <div>Loading...</div>;
  };

  const videoId= video.id.videoId;
  const url=`https://youtube.com/embed/${videoId}`;

  return (
    <div className = "video-detail col-md-8">
    <div className = "embed-responsive embed-responsive-16by9">
      <iframe className= "embed-responsive-item" src={url}></iframe>
    </div>
    <div className = "details">
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>
    </div>
  )
}

export default VideoDetail;
