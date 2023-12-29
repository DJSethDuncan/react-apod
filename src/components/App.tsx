import React from "react";
import { Photo } from "./Photo";
import { Video } from "./Video";
import { getApiData } from "../repositories/utils";
import ResultData from "../types/ResultData";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import "../css/App.css";

interface AppProps {}

interface AppState {
  resultData: ResultData;
}

const { Button } = chakraTheme.components;

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      resultData: {
        title: "",
        date: "",
        hdurl: "",
        url: "",
        media_type: "image",
        explanation: "",
      },
    };
  }

  async componentDidMount() {
    const result = await getApiData();
    this.setState({ resultData: result.data });
  }

  // cleanup async data calls on unmount
  componentWillUnmount() {
    this.setState = () => {
      return;
    };
  }

  theme = extendBaseTheme({
    components: {
      Button,
    },
  });

  render() {
    return (
      <ChakraBaseProvider theme={this.theme}>
        {!process.env.REACT_APP_NASA_API_TOKEN ? (
          <p>REACT_APP_NASA_API_TOKEN missing from .env</p>
        ) : (
          <Container bg="blue.600" color="white" centerContent>
            <h1>APOD</h1>
            {this.state.resultData.media_type === "image" ? (
              <Photo resultData={this.state.resultData} />
            ) : (
              <Video resultData={this.state.resultData} />
            )}
          </Container>
        )}
      </ChakraBaseProvider>
    );
  }
}

export default App;
