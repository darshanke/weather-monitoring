import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const InfoCard = ({ label, value }) => (
  <Card
  className="weather-cards"
    sx={{
      width: 200,
      height: 200,
      margin: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: 2,
    }}
  >
    <CardContent>
      <Typography variant="h6">{label}</Typography>
      <Typography variant="body1">{value}</Typography>
    </CardContent>
  </Card>
);

const DetailsProvider = ({ details, loading }) => {
  if(loading){
    return <p style={{margin: '6rem'}}>Loading data...</p>;
  }
  if (!details || Object.keys(details).length === 0 ) {
  
    return; 
  }

  const city = details.location ? details.location.name : "N/A";
  const humidity = details.location ? details.current.humidity : "N/A";
  const condition = details.location ? details.current.condition.text : "N/A";
  const wind = details.location ? details.current.wind_kph : "N/A"; 
  const currenttempc = details.current ? details.current.temp_c : "N/A";


  return (
    <Box
      sx={{
        height: "100vh", 
        // width: "100vw", 
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        margin: 0
 
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 2,
          flexWrap: "wrap", 
        }}
      >
         <InfoCard label="Temperature"  value={`${humidity}oc`} />
        <InfoCard label="Humidity" value={`${humidity} %`} />
        {/* <InfoCard label="Condition" value={`${condition}`} /> */}
        <Card
          sx={{
            width: 200,
            height: 200,
            margin: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6">Condition</Typography>
            <Typography variant="body1">
              {details.current ? details.current.condition.text : "N/A"}
            </Typography>
            <img src={details.current.condition.icon} alt="Weather Condition" />
          </CardContent>
        </Card>
        <InfoCard label="Wind Speed" value={`${wind} kph`} />
       
       
        
        
      </Box>
    </Box>
  );
};

export default DetailsProvider;
