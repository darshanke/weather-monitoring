import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import axios from "axios";
import DetailsProvider from "./DetailsProvider";

const LandingPage = () => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);
  
  const baseuri = {
    weather: "https://api.weatherapi.com/v1/current.json?key=5380575eec214db2aff112415240110",
  };

  const onSearch = async (params) => {
    try {
      const res = await axios.get(`${baseuri.weather}&q=${params}&aqi=yes`);
      setDetails(res.data);
      setError(null); 
    } catch (e) {
      setError("Place not found");
      console.error(e);
    }
  };

  return (
    <>
      <SearchBox onSearch={onSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <DetailsProvider details={details} />
    </>
  );
};

export default LandingPage;
