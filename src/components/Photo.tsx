import * as React from "react";
import ResultData from "../types/ResultData";

interface PhotoProps {
  resultData: ResultData;
}

export class Photo extends React.Component<PhotoProps> {
  render() {
    return (
      <div className="photoContainer">
        <div>{this.props.resultData.title}</div>
        <div>{this.props.resultData.date}</div>
        <div>
          {this.props.resultData.url && this.props.resultData.title ? (
            <img
              src={this.props.resultData.url}
              title="APOD Image"
              alt={this.props.resultData.title}
            />
          ) : (
            <p>Missing image information</p>
          )}
        </div>
        <div>{this.props.resultData.explanation}</div>
      </div>
    );
  }
}
