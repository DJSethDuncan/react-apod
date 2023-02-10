import * as React from "react";
import ResultData from "../types/ResultData";
interface VideoProps {
  resultData: ResultData;
}

export class Video extends React.Component<VideoProps> {
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
        <div>{this.props.resultData.explanation}</div>
      </div>
    );
  }
}
