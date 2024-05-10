import React from "react";
import "./CountriesCard.css";

const CountriesCard = ({ countryValue }) => {
  return (
    <div className="countryCard">
      <img
        src={countryValue.flags.png}
        alt={countryValue.flags.name}
        width="150px"
        height="100px"
        style={{ boxShadow: "0 0 7px #000000", border: "1px solid #000000" }}
      />
      <h2 style={{ fontFamily: "cursive", textAlign: "center" }}>
        {countryValue.name.common}
      </h2>
    </div>
  );
};

export default CountriesCard;
