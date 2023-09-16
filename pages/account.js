import { useAuth } from "@/lib/auth";

import {
  Button,
  Box,
  StatGroup,
  StatNumber,
  Stat,
  StatHelpText,
  StatLabel,
  Flex,
  Text,
  Badge,
  Avatar,
  Heading,
} from "@chakra-ui/react";

import DashboardShell from "@/components/DashboardShell";
import { createCheckoutSession, goToBillingPortal } from "@/lib/db";
import { useState } from "react";
import Page from "@/components/Page";
import Image from "next/image";
import { Card } from "@tremor/react";

const FeedbackUsage = () => (
  <StatGroup>
    <Stat>
      <StatLabel color="gray.700">Feedback</StatLabel>
      <StatNumber fontWeight="medium">∞</StatNumber>
      <StatHelpText>10,000 limit</StatHelpText>
    </Stat>

    <Stat>
      <StatLabel color="gray.700">Sites</StatLabel>
      <StatNumber fontWeight="medium">1/∞</StatNumber>
      <StatHelpText>Unlimited Sites</StatHelpText>
    </Stat>
  </StatGroup>
);

const SettingsTable = ({ stripeRole, children }) => (
  <Box
    backgroundColor="white"
    mt={8}
    borderRadius={[0, 8, 8]}
    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
  >
    <Flex
      backgroundColor="gray.50"
      borderTopLeftRadius={[0, 8, 8]}
      borderTopRightRadius={[0, 8, 8]}
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      px={6}
      py={4}
    >
      <Flex justify="space-between" align="center" w="full">
        <Text
          textTransform="uppercase"
          fontSize="xs"
          color="gray.500"
          fontWeight="medium"
          mt={1}
        >
          Settings
        </Text>
        <Badge h="1rem" variantColor="blue">
          {stripeRole}
        </Badge>
      </Flex>
    </Flex>
    <Flex direction="column" p={6}>
      {children}
    </Flex>
  </Box>
);

const Account = () => {
  const { user, signOut } = useAuth();
  const [isBillingLoading, setBillingLoading] = useState(false);

  return (
    <DashboardShell>
      <div className="max-w-2xl mx-auto">
        <div className="mx-auto text-center">
          {user?.photoUrl && (
            <Image
              width={100}
              height={100}
              className="rounded-full"
              src={user?.photoUrl}
            />
          )}
          <h1 className="mb-2 mt-2 text-3xl">{user?.name}</h1>
          <h2 className="mb-5">{user?.email}</h2>
        </div>
        <Card
          stripeRole={user?.stripeRole}
          direction="column"
          maxW="600px"
          align={["left", "center"]}
          margin="0 auto"
        >
          <FeedbackUsage />
          <Text my={4}>
            Fast Feedback uses Stripe to update, change, or cancel your
            subscription. You can also update card information and billing
            addresses through the secure portal.
          </Text>
          <Flex justify="flex-end">
            <button variant="ghost" ml={4} onClick={() => signOut()}>
              Log Out
            </button>
            <Button
              onClick={() => {
                setBillingLoading(true);
                goToBillingPortal();
              }}
              className="bg-white text-black"
            >
              Manage Billing
            </Button>
          </Flex>
        </Card>
      </div>
    </DashboardShell>
  );
};

const AccountPage = () => (
  <Page name="Account" path="/account">
    <Account />
  </Page>
);

export default AccountPage;
