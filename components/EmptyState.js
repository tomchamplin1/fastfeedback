import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";

const EmptyState = () => (
  <Flex
    width="100%"
    backgroundColor="white"
    borderRadius={4}
    p={16}
    justify="center"
    align="center"
    direction="column"
  >
    <Heading mb={2}>You haven&apos;t added any sites yet.</Heading>
    <Text mb={8}>Welcome! Let&apos;s get started.</Text>
    <AddSiteModal>Add your first site</AddSiteModal>
  </Flex>
);

export default EmptyState;
