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

const SiteFeedbackTableHeader = ({ siteName }) => (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
        <NextLink href="/feedback" passHref>
          <Link fontWeight="medium" color="blue.500">
            Feedback
          </Link>
        </NextLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink fontSize="sm" color="gray.600">
          {siteName}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between" flexDirection="row">
      <Heading mb={5}>{siteName}</Heading>
    </Flex>
  </>
);

export default SiteFeedbackTableHeader;
