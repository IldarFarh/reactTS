import React from "react";
import { Box, Flex, Link } from "@chakra-ui/core";
import NextLink from "next/link"
import { useMeQuery } from "../generated/graphql";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{data, fetching}] = useMeQuery();
  return (
    <Flex bg="tomato" p={4} ml={"auto"}>
      <Box ml={"auto"}>
        <NextLink href="/login">
          <Link mr={2}>login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>register</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default NavBar;
