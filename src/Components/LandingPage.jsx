// import React, { useEffect, useState } from "react";
// import SearchBox from "./SearchBox";
// import axios from "axios";
// import DetailsProvider from "./DetailsProvider";
// import { height } from "@mui/system";

// const LandingPage = () => {
//   const [details, setDetails] = useState({});
//   const [error, setError] = useState(null);
//   const [loading, setloading] = useState(false);

//   const baseuri = {
//     weather:
//       "https://api.weatherapi.com/v1/current.json?key=5380575eec214db2aff112415240110",
//   };

//   const onSearch = async (params) => {
//     setloading(true);
//     try {
//       const res = await axios.get(`${baseuri.weather}&q=${params}&aqi=yes`);
//       console.log(res.data);
//       setDetails(res.data);
//       setError(null);
    
//     } catch (e) {
//       // setDetails([]);
//       // console.error(e.message);
//       setloading(false);
//       if (e.response && e.response.status === 400) {
//       setDetails([]);
//       console.error(e.message);
    
//       alert('Failed to fetch weather data');
   
//       }

//     }finally{
//       setloading(false);
//     }

//   };

//   return (
//     <div>
//       <SearchBox onSearch={onSearch}  />
//       <DetailsProvider details={details} loading={loading} />
//     </div>
//   );
// };

// export default LandingPage;
import React, { useState } from "react";
import SearchBox from "./SearchBox";
import axios from "axios";
import DetailsProvider from "./DetailsProvider";
import SpellCheckApp from "./SpellCheckApp";

const LandingPage = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const baseuri = {
    weather: "https://api.weatherapi.com/v1/current.json?key=5380575eec214db2aff112415240110",
  };

  const onSearch = async (params) => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseuri.weather}&q=${params}&aqi=yes`);
      console.log(res.data);
      setDetails(res.data);
    } catch (e) {
      setDetails({}); 
      console.error(e.message);  
      alert('Failed to fetch weather data')
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBox onSearch={onSearch} />
      <DetailsProvider details={details} loading={loading} />
      {/* <SpellCheckApp/> */}
    </div>
  );
};

export default LandingPage;
