import * as React from "react";
import { Component } from "react";
interface VideoProps {
  resultData: {
    // @TODO: convert this type to an importable type
    title: string | undefined;
    date: string | undefined;
    hdurl: string | undefined;
    url: string | undefined;
  };
}

interface VideoState {}

class Video extends React.Component<VideoProps, VideoState> {
  render() {
    return (
      <div>
        <div>{this.props.resultData.title}</div>
        <div>{this.props.resultData.date}</div>
        <iframe
          id="player"
          width="640"
          height="390"
          title={this.props.resultData.title}
          src={this.props.resultData.url}
        ></iframe>
      </div>
    );
  }
}

export default Video;
