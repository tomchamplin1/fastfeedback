import React, { useState } from "react";
import { mutate } from "swr";
import { Box, Code, Switch } from "@chakra-ui/react";

import { Td } from "./Table";
import RemoveButton from "./RemoveButton";
import { updateFeedback } from "@/lib/db";
import { useAuth } from "@/lib/auth";
import { TableCell, TableRow } from "@tremor/react";

const FeedbackRow = ({ id, author, text, route, status }) => {
  const auth = useAuth();
  const isChecked = status === "active";

  const toggleFeedback = async () => {
    await updateFeedback(id, { status: isChecked ? "pending" : "active" });
    mutate(["/api/feedback", auth.user.token]);
  };

  return (
    <TableRow as="tr" key={id}>
      <TableCell fontWeight="medium">{author} </TableCell>
      <TableCell>{text}</TableCell>
      <TableCell>
        <Code>{route || "/"}</Code>
      </TableCell>
      <TableCell>
        <Switch onChange={toggleFeedback} isChecked={isChecked} />
      </TableCell>
      <TableCell>
        <RemoveButton feedbackId={id} />
      </TableCell>
    </TableRow>
  );
};

export default FeedbackRow;
