import { TimeIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Center, Container, Flex } from "@chakra-ui/react";
import React from "react";

export const TimeControl = () => {
  return (
    <React.Fragment>
      <Container>
        <Center>
          <ButtonGroup spacing={8}>
            <Button colorScheme="green" leftIcon={<TimeIcon />}>
              Start Flow
            </Button>
          </ButtonGroup>
        </Center>
      </Container>
    </React.Fragment>
  );
};
