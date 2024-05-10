import React from "react";
import CountriesCard from "../component/CountriesCard.jsx";

const Countries = ({ data, searchData }) => {
  const updatedData = data.filter((country) =>
    country.name.common.toLowerCase().includes(searchData.toLowerCase())
  );

  return updatedData.length === 0 && searchData === null ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      {data.map((country) => (
        <CountriesCard countryValue={country} />
      ))}
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      {updatedData.map((country) => (
        <CountriesCard countryValue={country} />
      ))}
    </div>
  );
};

export default Countries;
