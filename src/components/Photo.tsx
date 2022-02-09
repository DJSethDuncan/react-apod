import * as React from "react";

interface PhotoProps {
  resultData: {
    title: string | undefined;
    date: string | undefined;
    hdurl: string | undefined;
    url: string | undefined;
  };
}

interface PhotoState {}

class Photo extends React.Component<PhotoProps, PhotoState> {
  render() {
    return (
      <div className="photoContainer">
        <div>{this.props.resultData.title}</div>
        <div>{this.props.resultData.date}</div>
        <div>
          <img
            src={this.props.resultData.url}
            title="APOD Image"
            alt={this.props.resultData.title}
          />
        </div>
      </div>
    );
  }
}

export default Photo;
