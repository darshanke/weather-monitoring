import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(location);
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} style={{height: '30px' , margin: '1rem'}}>
      <input
        type="text"
        placeholder="Enter citry name"
        value={location}
        onChange={handleChange}
        style={{backgroundColor: "#FFFFFF" , color: "rgb(18,18,18,1)", 
          height: '30px', margin: '30px', borderRadius: '8px' , 
        }}

        
      />
      <button style={{height: '30px' ,  borderRadius: '10px' , backgroundColor: 'green' , color: "white"}}type="submit">Search</button>
    </form>
  );
};

export default SearchBox;

