import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../services/hooks";
import { selectSessionDetails } from "../../services/session/sessionSlice";
import { Box, Chip } from "@mui/material";
import dayjs from "dayjs";
import "../../style/Timer.scss";

export const Timer = () => {
  const sessionDetails = useAppSelector(selectSessionDetails);
  const parsedStartTime = dayjs(sessionDetails.startTime);
  const [elapsedTime, setElapsedTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = dayjs();
      const hours = (currentTime.hour() - parsedStartTime.hour())
        .toString()
        .padStart(2, "0");
      const minutes = (currentTime.minute() - parsedStartTime.minute())
        .toString()
        .padStart(2, "0");
      const seconds = (currentTime.second() - parsedStartTime.second())
        .toString()
        .padStart(2, "0");
      setElapsedTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [parsedStartTime]);

  console.log("s", parsedStartTime);

  return (
    <Box className="timer-wrapper">
      {sessionDetails.startTime && <Box>{elapsedTime}</Box>}
      <Chip className="chip-live" label="Live" />
    </Box>
  );
};
