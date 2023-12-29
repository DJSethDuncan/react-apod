import React from "react";
import { Photo } from "./Photo";
import { Video } from "./Video";
import { getApiData } from "../repositories/utils";
import ResultData from "../types/ResultData";
import { ChakraBaseProvider, Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
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

  render() {
    return (
      <ChakraBaseProvider>
        {!process.env.REACT_APP_NASA_API_TOKEN ? (
          <p>REACT_APP_NASA_API_TOKEN missing from .env</p>
        ) : (
          <Container width="100%" height="100%" bg="gray.300" centerContent>
            <Text fontSize="3xl" color="gray.600" my={35}>
              NASA Astronomy Photo of the Day
            </Text>
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
