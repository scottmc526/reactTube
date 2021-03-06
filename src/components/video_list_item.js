import React from 'react';

//passing {video}   as argument is the same as saying const video = props.video
const VideoListItem = ({video, onVideoSelect}) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li onClick={() => onVideoSelect(video)} className='video-list-item list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imgUrl} />
        </div>
        <div className='media-body'>
          <div className='media-heading'>{title} </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
