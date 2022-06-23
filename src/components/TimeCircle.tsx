import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const TimeCircle = () => {
  const [time, setTime] = useState(100);

  return (
    <React.Fragment>
      <CircularProgress size="40vw" value={time} thickness="4px">
        <CircularProgressLabel>{time}</CircularProgressLabel>
      </CircularProgress>
    </React.Fragment>
  );
};
