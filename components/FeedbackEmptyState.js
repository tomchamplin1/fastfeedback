import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";

const FeedbackEmptyState = () => (
  <Flex
    width="100%"
    backgroundColor="white"
    borderRadius={4}
    p={16}
    justify="center"
    align="center"
    direction="column"
  >
    <Heading mb={2}>There isn&apos;t any feedback.</Heading>
    <Text mb={8}>Share your site!</Text>
  </Flex>
);

export default FeedbackEmptyState;
