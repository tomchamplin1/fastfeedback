import React from "react";
import DashboardShell from "./DashboardShell";
import {
  Flex,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import AddSiteModal from "./AddSiteModal";

const EmptyState = () => (
  <DashboardShell>
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius={4}
      p={16}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading mb={2}>You haven't added any sites yet.</Heading>
      <Text mb={8}>Welcome! Let's get started.</Text>
      <AddSiteModal />
    </Flex>
  </DashboardShell>
);

export default EmptyState;
