import { Box, keyframes } from "@chakra-ui/react";

const shimmer = keyframes`
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
`;

const ShimmerBlock = (props: { h: string | number; w?: string; mt?: number }) => (
  <Box
    h={props.h}
    w={props.w ?? "100%"}
    mt={props.mt}
    borderRadius={5}
    bgGradient="linear(to-r, gray.200 25%, gray.100 50%, gray.200 75%)"
    bgSize="200% 100%"
    animation={`${shimmer} 1.5s linear infinite`}
  />
);

export const LoadingShimmer = () => (
  <Box
    boxShadow="dark-lg"
    p="6"
    rounded="md"
    bg="white"
    w="50%"
    maxW={600}
    role="status"
    aria-label="Loading photo of the day"
  >
    <ShimmerBlock h={300} />
    <ShimmerBlock h={6} w="60%" mt={5} />
    <ShimmerBlock h={3} mt={4} />
    <ShimmerBlock h={3} mt={2} />
    <ShimmerBlock h={3} w="80%" mt={2} />
  </Box>
);
