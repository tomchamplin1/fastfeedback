import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { auth } from "firebase";
import { useAuth } from "@/lib/auth";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
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
import DashboardShell from "@/components/DashboardShell";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import SiteTable from "@/components/SiteTable";

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR("/api/sites", fetcher);

  console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
