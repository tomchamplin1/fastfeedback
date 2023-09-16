import React from "react";
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";

import AddSiteModal from "./AddSiteModal";

const SiteTableHeader = ({ isPaidAccount }) => (
  <>
    <div>
      <h1 className="text-2xl">Sites</h1>
    </div>
    <div className="flex justify-between mb-5">
      <h2 className="text-slate-500">All sites with feedback.</h2>
      {isPaidAccount && <AddSiteModal>+ Add site</AddSiteModal>}
    </div>
  </>
);

export default SiteTableHeader;
