import { React, useState } from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";
import { createCheckoutSession } from "@/lib/db";
import { useAuth } from "@/lib/auth";

const UpgradeEmptyState = () => {
  const [isCheckoutLoading, setCheckoutLoading] = useState(false);
  const { user } = useAuth();

  return (
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius={4}
      p={16}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading mb={2}>Get feedback on your site instantly.</Heading>
      <Text mb={8}>Get started today.</Text>
      <Button
        onClick={() => {
          setCheckoutLoading(true);
          createCheckoutSession(user.uid);
        }}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        isLoading={isCheckoutLoading}
        _hover={{ bg: "gray.700" }}
        _active={{
          bg: "gray.800",
          transform: "scale(0.95)",
        }}
      >
        Upgrade to Starter
      </Button>
    </Flex>
  );
};

export default UpgradeEmptyState;
