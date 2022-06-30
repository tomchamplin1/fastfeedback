import React from "react";
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";

import AddSiteModal from "./AddSiteModal";

const FeedbackTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink fontSize="sm" color="gray.600">
          Feedback /
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between" flexDirection="row">
      <Heading mb={5}>Feedback</Heading>
    </Flex>
  </>
);

export default FeedbackTableHeader;
