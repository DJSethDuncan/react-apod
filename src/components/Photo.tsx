import * as React from "react";
import ResultData from "../types/ResultData";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface PhotoProps {
  resultData: ResultData;
}

// export class Photo extends React.Component<PhotoProps> {
export const Photo = (props: PhotoProps) => (
  <Box boxShadow="dark-lg" p="6" rounded="md" bg="white" w="50%" maxW={600}>
    <Box rounded="sm">
      {props.resultData.url && props.resultData.title ? (
        <Image
          src={props.resultData.url}
          title="APOD Image"
          alt={props.resultData.title}
          borderRadius={5}
        />
      ) : (
        <p>Missing image information</p>
      )}
    </Box>
    <Flex
      flexDir="row"
      justifyContent="space-between"
      mt={5}
      verticalAlign="baseline"
      color="gray.600"
    >
      <Text fontSize="2xl">{props.resultData.title}</Text>
      <Text fontSize="md" alignSelf="flex-end">
        {props.resultData.date}
      </Text>
    </Flex>
    <Text fontSize="sm" mt={2} color="gray.500">
      {props.resultData.explanation}
    </Text>
  </Box>
);
