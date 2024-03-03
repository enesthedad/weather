import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "./api";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=50000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((res) => res.json())
      .then((res) => {
        return {
          options: res.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} , ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "5px",
      border: "2px solid #ccc",
      width: "100%",
      boxShadow: state.isFocused ? "0 0 0 2px #515052" : null,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#515052" : null,
      color: state.isFocused ? "white" : null,
    }),
  };
  return (
    <div className="lg:w-[600px] md:w-[450px] w-[200px] text-sm lg:text-lg md:text-[16px]">
      <AsyncPaginate
        placeholder="search for cities"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        styles={customStyles}
      />
    </div>
  );
};

export default Search;
