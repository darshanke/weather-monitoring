import { Box, Typography } from "@mui/material";
import React from "react";

const InfoRow = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 1,
    }}
  >
    <Typography>{label}:</Typography>
    <Typography>{value}</Typography>
  </Box>
);

const DetailsProvider = ({ details }) => {
  if (!details || Object.keys(details).length === 0) {
    return <Typography>Please input the city name</Typography>;
  }

  const city = details.location ? details.location.name : "N/A";
  const region = details.location ? details.location.region : "N/A"; 
  const currenttempc = details.current ? details.current.temp_c : "N/A";
  const currenttempf = details.current ? details.current.temp_f : "N/A";

  return (
    <Box
      sx={{
        height: "100vh", 
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        backgroundColor: "rgb(18,18,18)", // Background color
      }}
    >
      <Box
        sx={{
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgb(18,18,18)", 
          color: "rgb(255,255,255)", 
          borderRadius: 2, 
          boxShadow: 1, 
        }}
      >
        <InfoRow label="City" value={city} />
        <InfoRow label="Region" value={region} />
        <InfoRow label="Temperature in Centigrade" value={currenttempc} />
        <InfoRow label="Temperature in Fahrenheit" value={currenttempf} />
        <Box>
          <Typography>Condition</Typography>
          <img src={ details.current.condition.icon} alt="Weather Condition" />
          <Typography>{details.current ? details.current.condition.text : "N/A"}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsProvider;
