import React from "react";
import NextLink from "next/link";
import AddSiteModal from "./AddSiteModal";
import { Flex, Link, Stack, Icon, Avatar, Box, Button } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { useAuth } from "@/lib/auth";

const DashboardShell = ({ children }) => {
  const { user, signOut } = useAuth();

  return (
    <Box backgroundColor="gray.100" minH="100vh" backgroundSize="cover" pb={20}>
      <Box backgroundColor="blue.400" h={2} w="100%" />
      <Flex backgroundColor="white" mb={16} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
        >
          <Stack spacing={4} alignItems="center" isInline>
            <NextLink href="/" passHref>
              <Icon viewBox="0 0 200 200" w={14} h={14}>
                <path
                  d="M24.2102 155V45.9091H89.6222V57.6278H37.4205V94.4886H84.7216V106.207H37.4205V155H24.2102ZM112.247 155V45.9091H177.659V57.6278H125.458V94.4886H172.759V106.207H125.458V155H112.247Z"
                  fill="black"
                />
              </Icon>
            </NextLink>
            <NextLink href="/dashboard" passHref>
              <Link>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Stack>
          <Flex justifyContent="center" alignItems="center">
            {user && (
              <Button variant="ghost" mr={2} onClick={() => signOut()}>
                Log Out
              </Button>
            )}
            <Avatar size="sm" src={user?.photoUrl} />
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;
