import React from "react";
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";

import AddSiteModal from "./AddSiteModal";

const SiteTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink fontSize="sm" color="gray.600">
          Sites /
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between" flexDirection="row">
      <Heading mb={5}>Sites</Heading>
      <AddSiteModal>+ Add site</AddSiteModal>
    </Flex>
  </>
);

export default SiteTableHeader;
