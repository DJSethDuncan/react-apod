import React from "react";
import axios from "axios";
import Photo from "./components/Photo";
import "./App.css";

interface AppProps {}

interface AppState {
  photoData: {
    title: string | undefined;
    date: string | undefined;
    hdurl: string | undefined;
    url: string | undefined;
  };
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      photoData: {
        title: undefined,
        date: undefined,
        hdurl: undefined,
        url: undefined,
      },
    };
  }

  async componentDidMount() {
    const apiKey = "";
    const result = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );
    this.setState({ photoData: result.data });
  }

  render() {
    return <Photo photoData={this.state.photoData} />;
  }
}

export default App;
