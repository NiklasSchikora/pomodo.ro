import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

export const TimeCircle = () => {
  const [time, setTime] = useState(100);

  return (
    <React.Fragment>
      <CircularProgress size="10vw" value={time} thickness="4px">
        <CircularProgressLabel>
          <Box p={5}>
            <Flex
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <BellIcon w={8} h={8} />
              {time}
            </Flex>
          </Box>
        </CircularProgressLabel>
      </CircularProgress>
    </React.Fragment>
  );
};
