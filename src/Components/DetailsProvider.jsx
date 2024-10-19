import React from "react";
import './DetailsProvider.css';

const InfoCard = ({ label, value }) => (
  <div className="weather-cards">
   
      <h6>{label}</h6>
      <p>{value}</p>
   
  </div>
);

const DetailsProvider = ({ details, loading }) => {
  if (loading) {
    return <p className="loading">Loading data...</p>;
  }
  if (!details || Object.keys(details).length === 0) {
    return;
  }

  // const city = details.location ? details.location.name : "N/A";
  const humidity = details.location ? details.current.humidity : "N/A";
  const condition = details.location ? details.current.condition.text : "N/A";
  const wind = details.location ? details.current.wind_kph : "N/A";
  const currenttempc = details.current ? details.current.temp_c : "N/A";

  return (
    <div className="details-container">
      <div className="cards-container">
        <InfoCard label="Temperature" value={`${currenttempc}°c`} />
        <InfoCard label="Humidity" value={`${humidity}%`} />
        <InfoCard label="Condition" value={`${condition}`} />
        <InfoCard label="Wind Speed" value={`${wind} kph`} />
      </div>
    </div>
  );
};

export default DetailsProvider;
