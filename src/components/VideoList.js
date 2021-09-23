import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container >
      {listOfVideos}
    </Grid>
  );
}
