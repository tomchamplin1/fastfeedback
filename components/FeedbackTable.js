import React from "react";
import RemoveButton from "./RemoveButton";

import { Box, Code, Switch, IconButton } from "@chakra-ui/react";
import FeedbackRow from "./FeedbackRow";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { useAuth } from "@/lib/auth";
import { mutate } from "swr";

const FeedbackTable = ({ allFeedback }) => {
  const auth = useAuth();
  const isChecked = allFeedback.status === "active";

  const toggleFeedback = async () => {
    await updateFeedback(id, { status: isChecked ? "pending" : "active" });
    mutate(["/api/feedback", auth.user.token]);
  };

  return (
    <Card className="shadow-xl">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-right">Feedback</TableHeaderCell>
            <TableHeaderCell className="text-right">Route</TableHeaderCell>
            <TableHeaderCell className="text-right">Visible</TableHeaderCell>
            <TableHeaderCell className="text-right">{""}</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allFeedback?.map((feedback) => (
            <TableRow key={feedback.id}>
              <TableCell className="text-left">{feedback.author} </TableCell>
              <TableCell className="text-right">{feedback.text}</TableCell>
              <TableCell className="text-right">
                <Code>{feedback.route || "/"}</Code>
              </TableCell>
              <TableCell className="text-right">
                <Switch onChange={toggleFeedback} isChecked={isChecked} />
              </TableCell>
              <TableCell className="text-right">
                <RemoveButton feedbackId={feedback.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default FeedbackTable;
