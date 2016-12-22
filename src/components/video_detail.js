import React from 'react';

const VideoDetail = ({video}) => {
  const title = video.snippet.title;
  const description = video.snippet.description;
  const videoId = video.id.videoId;
  //string interpolation
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  )
};

export default VideoDetail
