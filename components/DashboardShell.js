import { React, useState } from "react";
import NextLink from "next/link";
import AddSiteModal from "./AddSiteModal";
import {
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  MenuDivider,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ExternalLinkIcon,
  InfoOutlineIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { useAuth } from "@/lib/auth";
import { createCheckoutSession, goToBillingPortal } from "@/lib/db";

const DashboardShell = ({ children }) => {
  const [isBillingLoading, setBillingLoading] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <Box backgroundColor="gray.100" minH="100vh" backgroundSize="cover" pb={20}>
      <Box backgroundColor="blue.400" h={2} w="100%" />
      <Flex backgroundColor="white" mb={16} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={2}
          pb={2}
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
            <NextLink href="/sites" passHref>
              <Link>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Stack>
          <Flex justifyContent="center" alignItems="center">
            <Menu>
              <MenuButton _hover={{ boxShadow: "lg" }} borderRadius="15px">
                <Avatar size="sm" src={user?.photoUrl} />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <NextLink href="/account" passHref>
                    <Link style={{ textDecoration: "none" }}>Account</Link>
                  </NextLink>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setBillingLoading(true);
                    goToBillingPortal();
                  }}
                  isLoading={isBillingLoading}
                >
                  Manage Billing
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
              </MenuList>
            </Menu>
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
