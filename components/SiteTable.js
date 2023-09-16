import React from "react";
import { Box, Skeleton, Link } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import NextLink from "next/link";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const SiteTable = ({ sites }) => {
  return (
    <Card className="shadow-xl">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-right">Site Link</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Feedback Link
            </TableHeaderCell>
            <TableHeaderCell className="text-right">Date Added</TableHeaderCell>
            <TableHeaderCell className="text-right">{""}</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sites.map((site) => (
            <TableRow key={site.id}>
              <TableCell>
                <NextLink
                  href="/site/[siteId]"
                  as={`/site/${site.id}`}
                  passHref
                >
                  <Link fontWeight="medium">{site.name}</Link>
                </NextLink>
              </TableCell>
              <TableCell className="text-right">
                <Link href={site.url} isExternal>
                  {site.url}
                </Link>
              </TableCell>
              <TableCell className="text-right">
                <NextLink
                  href="/feedback/[siteId]"
                  as={`/feedback/${site.id}`}
                  passHref
                >
                  <Link fontWeight="medium" color="blue.500">
                    View Feedback
                  </Link>
                </NextLink>
              </TableCell>
              <TableCell className="text-right">
                {format(parseISO(site.createdAt), "PPpp")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default SiteTable;
