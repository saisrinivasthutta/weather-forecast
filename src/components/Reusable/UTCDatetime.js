import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { getUTCDatetime } from "../../utilities/DatetimeUtils";

const UTCDatetime = () => {
  const [utcFullDate, setUtcFullDate] = useState(getUTCDatetime());

  useEffect(() => {
    // Set an interval to update the time every second
    const intervalId = setInterval(() => {
      setUtcFullDate(getUTCDatetime());
    }, 1000); // 1000ms = 1 second

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  return (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: "400",
        fontSize: { xs: "10px", sm: "12px" },
        color: "rgba(255, 255, 255, .7)",
        lineHeight: 1,
        paddingRight: "2px",
        fontFamily: "Poppins",
      }}
    >
      {utcFullDate} IST
    </Typography>
  );
};

export default UTCDatetime;
