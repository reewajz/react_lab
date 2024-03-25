import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "Specialized in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={2}>
      <Box h="100px">
        <Avatar size="xl" name="Reewaj" src="/images/avatar.png" />
      </Box>

      <Box h="40px">Hello, I am Reewaj</Box>
      <Box h="70px">
        <Heading size="3xl" color="white">
          A frontend developer
        </Heading>
      </Box>
      <Box h="70px">
        <Heading size="3xl" color="white">
          specialized in React
        </Heading>
      </Box>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
