import Countries from "./component/Countries";
import SearchBar from "./component/SearchBar";
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
      } catch (error) {
        console.log(error);
        alert("Failed To Get API Data");
      }
    };
    fetchData();
  }, []);

  const [searchData, setSearchData] = useState("");

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <SearchBar onChange={handleChange} />
      <div style={{ width: "100%", height: "1rem" }}></div>
      {data && (
        <Countries
          data={data}
          searchData={searchData}
        />
      )}
    </div>
  );
};

export default App;
