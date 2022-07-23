import React from "react";
import { Box, Heading, Text, Divider, Icon, Flex } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

const Feedback = ({ author, text, createdAt, provider, isLast, settings }) => (
  <Box borderRadius={4} maxWidth="700px" w="full">
    <Flex align="center">
      <Heading size="sm" as="h3" mb={0} color="gray.900" fontWeight="medium">
        {author}
      </Heading>
    </Flex>
    {settings?.timestamp && (
      <Text color="gray.500" fontSize="xs" mb={4}>
        {format(parseISO(createdAt), "PPpp")}
      </Text>
    )}
    <Text color="gray.800">{text}</Text>
    {!isLast && (
      <Divider
        borderColor="gray.200"
        backgroundColor="gray.200"
        mt={8}
        mb={8}
      />
    )}
  </Box>
);

export default Feedback;
