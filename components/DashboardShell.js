import React from "react";
import { useAuth } from "@/lib/auth";
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

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="#ffffff"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        py={4}
        px={8}
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
          <Avatar size="md" src={auth.user.photoUrl} />
        </Stack>
      </Flex>
      <Flex backgroundColor="gray.100" height="100vh">
        <Flex backgroundColor="gray.100" ml="auto" mr="auto">
          <Flex flexDirection="column" maxWidth="800px" p={8} width="100%">
            <Breadcrumb />
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink fontSize="sm" color="gray.600">
                  Sites /
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading mb={5}>Sites</Heading>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
