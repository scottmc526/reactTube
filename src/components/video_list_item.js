import React from 'react';

const VideoListItem = (props) => {
  return <li>{props.video.snippet.channelTitle}</li>
}

export default VideoListItem;
