import React, { useState, useEffect } from "react";
import { Photo } from "./Photo";
import { Video } from "./Video";
import { getApiData } from "../repositories/utils";
import ResultData from "../types/ResultData";
import { ChakraBaseProvider, Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import "../css/App.css";

export const App = () => {
  const [apodData, setApodData] = useState<ResultData | null>(null);

  useEffect(() => {
    const getApiResponse = async () => {
      const { data } = await getApiData();
      const { title, date, hdurl, url, media_type, explanation } = data;
      const newApodData = {
        title,
        date,
        hdurl,
        url,
        media_type,
        explanation,
      };
      setApodData(newApodData);
    };
    getApiResponse();
  });

  const MediaComponent = () => {
    if (!apodData) return <>Unable to retrieve data from API</>;
    if (apodData.media_type === "image") {
      return <Photo resultData={apodData} />;
    } else if (apodData.media_type === "video") {
      return <Video resultData={apodData} />;
    } else {
      return <>Unknown media type</>;
    }
  };

  return (
    <ChakraBaseProvider>
      {!process.env.REACT_APP_NASA_API_TOKEN ? (
        <p>REACT_APP_NASA_API_TOKEN missing from .env</p>
      ) : (
        <Container
          width="100%"
          height="100%"
          bg="gray.300"
          overflow="auto"
          centerContent
          pb={100}
        >
          <Text fontSize="3xl" color="gray.600" my={35}>
            NASA Astronomy Photo of the Day
          </Text>
          <MediaComponent />
        </Container>
      )}
    </ChakraBaseProvider>
  );
};
