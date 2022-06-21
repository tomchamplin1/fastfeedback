import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { auth } from "firebase";
import { useAuth } from "@/lib/auth";
import logo from "../src/logo.svg";
import {
  Button,
  ButtonGroup,
  Heading,
  Text,
  Code,
  Icon,
  Flex,
} from "@chakra-ui/react";

import EmptyState from "@/components/EmptyState";

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        max-width="300px"
        h="100vh"
      >
        <Head>
          <title>Fast Feedback</title>
        </Head>
        <Icon viewBox="0 0 200 200" w={14} h={14}>
          <path
            d="M24.2102 155V45.9091H89.6222V57.6278H37.4205V94.4886H84.7216V106.207H37.4205V155H24.2102ZM112.247 155V45.9091H177.659V57.6278H125.458V94.4886H172.759V106.207H125.458V155H112.247Z"
            fill="black"
          />
        </Icon>
        {auth.user ? (
          <Button mt={4} size="sm" onClick={(e) => auth.signOut()}>
            Sign Out
          </Button>
        ) : (
          <Button mt={4} size="sm" onClick={(e) => auth.signinWithGithub()}>
            Sign In
          </Button>
        )}
      </Flex>
    </div>
  );
}
