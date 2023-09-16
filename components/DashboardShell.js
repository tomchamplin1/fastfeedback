import { React, useState } from "react";
import NextLink from "next/link";
import {
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import logo from "../src/Flogo.png";
import { goToBillingPortal } from "@/lib/db";
import Image from "next/image";

const DashboardShell = ({ children }) => {
  const [isBillingLoading, setBillingLoading] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <div backgroundColor="bg-white" minH="100vh" backgroundSize="cover" pb={20}>
      <div className="bg-blue-800 w-full h-2" />
      <nav className="bg-white px-5 py-2 border border-b" w="full">
        <div
          alignItems="center"
          justifyContent="space-between"
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          className="px-8 w-full flex justify-between"
        >
          <div className="flex my-auto">
            <NextLink href="/" passHref>
              <Image
                width={40}
                height={40}
                className=""
                src={logo}
                alt="logo"
              />
            </NextLink>
            <NextLink href="/sites" passHref>
              <Link className="my-auto mr-5 ml-5">Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link className="my-auto">Feedback</Link>
            </NextLink>
          </div>

          <NextLink href="/account" passHref className="my-auto">
            <Link className="my-auto pt-1" style={{ textDecoration: "none" }}>
              {user?.photoUrl && (
                <Image
                  width={40}
                  height={40}
                  className="rounded-full my-auto"
                  src={user?.photoUrl}
                  alt="logo"
                />
              )}
            </Link>
          </NextLink>
        </div>
      </nav>
      <div className="px-12 py-12">{children}</div>
    </div>
  );
};

export default DashboardShell;
