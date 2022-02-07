import * as React from "react";
import { Component } from "react";

interface PhotoProps {
  photoData: {
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
      <div>
        <div>{this.props.photoData.title}</div>
        <div>{this.props.photoData.date}</div>
        <div>
          <img src={this.props.photoData.url} alt="title" />
        </div>
      </div>
    );
  }
}

export default Photo;
