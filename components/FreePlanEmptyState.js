import React from "react";
import DashboardShell from "./DashboardShell";
import {
  Box,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box backgroundColor="white">
      <Heading>Get feedback on your site instantly.</Heading>
      <Text>Get started today.</Text>
      <Button variant="solid" size="md">
        Upgrade to starter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
