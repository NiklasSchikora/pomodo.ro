import { Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { TimeControl } from "./TimeControl";

export const Header = () => {
  return (
    <React.Fragment>
      <Center padding="5">
        <Heading as="h1" size="2xl">
          pomodo.ro ✨
        </Heading>
      </Center>
    </React.Fragment>
  );
};
