import React from "react";
import axios from "axios";
import Photo from "./Photo";
import Video from "./Video";
import "../css/App.css";

interface AppProps {}

interface AppState {
  resultData: {
    title: string | undefined;
    date: string | undefined;
    hdurl: string | undefined;
    url: string | undefined;
  };
  resultType: string | null; // @TODO: make this an enum
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
      },
      resultType: null,
    };
  }

  async componentDidMount() {
    const apiKey = process.env.REACT_APP_NASA_API_TOKEN;
    const result = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );
    this.setState({ resultData: result.data });
    this.setState({
      resultType: result.data.url.match(/youtube.com/i) ? "video" : "photo",
    });
  }

  render() {
    return (
      <div>
        <h1>APOD</h1>
        {this.state.resultType === "photo" ? (
          <Photo resultData={this.state.resultData} />
        ) : (
          <Video resultData={this.state.resultData} />
        )}
      </div>
    );
  }
}

export default App;
