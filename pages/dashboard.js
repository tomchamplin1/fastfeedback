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

export default function Dashboard() {
  const auth = useAuth();

  if (!auth.user) {
    return "Loading...";
  }

  return <EmptyState />;
}
