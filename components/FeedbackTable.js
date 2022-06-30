import React from "react";
import { Table, Tr, Th, Td } from "./Table";
import RemoveButton from "./RemoveButton";

import { Box, Code, Switch, IconButton } from "@chakra-ui/react";

const FeedbackTable = ({ allFeedback }) => {
  return (
    <Table minW="80%">
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th>{""}</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map((feedback) => (
          <Box as="tr" key={feedback.id}>
            <Td fontWeight="medium">{feedback.author} </Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{"/"}</Code>
            </Td>
            <Td>
              <Switch size="md" defaultChecked={feedback.status === "active"} />
            </Td>
            <Td>
              <RemoveButton feedbackId={feedback.id} />
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
