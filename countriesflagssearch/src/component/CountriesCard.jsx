import React from "react";

const CountriesCard = ({ countryValue }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "8px",
        flexDirection: "column",
        width: "200px",
      }}
    >
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
