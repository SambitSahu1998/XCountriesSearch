import React from "react";

const SearchBar = ({ onChange }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        borderBottom: "2px solid #808080",
        boxShadow: "5px 7px 7px #808080",
      }}
    >
      <input
        type="text"
        placeholder="Search for countries..."
        onChange={onChange}
        style={{
          margin: "0.5rem 0",
          width: "60%",
          borderRadius: "10px",
          padding: "5px",
          height: "1.5rem",
          boxShadow: "0 0 7px #808080",
          border: "1px solid #818181",
        }}
      />
    </div>
  );
};

export default SearchBar;
