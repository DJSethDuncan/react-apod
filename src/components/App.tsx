import React from "react";
import axios from "axios";
import Photo from "./Photo";
import Video from "./Video";
import ResultData from "../types/ResultData";
import "../css/App.css";

interface AppProps {}

interface AppState {
  resultData: ResultData;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      resultData: {
        title: undefined,
        date: undefined,
        hdurl: undefined,
        url: undefined,
        media_type: "image",
      },
    };
  }

  async componentDidMount() {
    const apiKey = process.env.REACT_APP_NASA_API_TOKEN;
    const result = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );
    this.setState({ resultData: result.data });
  }

  render() {
    return (
      <div>
        <h1>APOD</h1>
        {this.state.resultData.media_type === "image" ? (
          <Photo resultData={this.state.resultData} />
        ) : (
          <Video resultData={this.state.resultData} />
        )}
      </div>
    );
  }
}

export default App;
