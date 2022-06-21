import React from "react";
import {
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Breadcrumb,
  Box,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

const DashboardShell = () => (
  <Flex flexDirection="column">
    <Flex
      backgroundColor="#ffffff"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      p={4}
    >
      <Stack spacing={4} alignItems="center" isInline>
        <Icon viewBox="0 0 200 200" w={14} h={14}>
          <path
            d="M24.2102 155V45.9091H89.6222V57.6278H37.4205V94.4886H84.7216V106.207H37.4205V155H24.2102ZM112.247 155V45.9091H177.659V57.6278H125.458V94.4886H172.759V106.207H125.458V155H112.247Z"
            fill="black"
          />
        </Icon>
        <Link>Feedback</Link>
        <Link>Sites</Link>
      </Stack>
      <Stack spacing={4} isInline alignItems="center" justifyContent="center">
        <Link>Account</Link>
        <Avatar />
      </Stack>
    </Flex>
    <Flex backgroundColor="gray.100" height="100%">
      <Flex backgroundColor="gray.100" ml="auto" mr="auto">
        <Flex
          flexDirection="column"
          maxWidth="800px"
          justifyContent="center"
          p={8}
        >
          <Breadcrumb />
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>Sites /</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Sites</Heading>
          <Box width="100%" backgroundColor="white" borderRadius={4} p={8}>
            <Heading>Get feedback on your site instantly.</Heading>
            <Text>Get started today.</Text>
            <Button variant="solid" size="md">
              Upgrade to starter
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

export default DashboardShell;
