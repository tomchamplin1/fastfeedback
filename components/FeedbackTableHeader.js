import React from "react";
import Link from "next/link";
import NextLink from "next/link";

import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";

const FeedbackTableHeader = ({ siteName }) => (
  <>
    <div>
      <div>
        <h1 className="text-2xl">Feedback</h1>
      </div>
      <div>
        <h2 className="text-slate-500 mb-5">All Feedback</h2>
      </div>
    </div>
  </>
);

export default FeedbackTableHeader;
