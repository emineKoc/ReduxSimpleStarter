import React from 'react';
// no need any state any user interaction, no recording the user atractons
// So We use plain functional component
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map( (video)=> {
    return <VideoListItem key = {video.etag} video = {video} />
});
// when ever we render a list of array, React wants us to pass a key.
  return (
    <ul className = "col-md-4 list-group">
    { videoItems }
    </ul>
  )

}


export default VideoList;
