import "./search.css";
import Button from "../button/button";
import { useState } from "react";

const Search = ({ rest, filterrest }) => {
  const [restList] = rest;
  const [setFilterList] = filterrest;
  const [searchText, setSearchText] = useState("");
  return (
    <div id="search">
      <input
        type="text"
        placeholder="Search"
        name=""
        value={searchText}
        id=""
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      <Button
        ButtonText="Search"
        onClick={async () => {
          const filteredList = restList.filter((res) => {
            return res?.info?.name
              ?.toLowerCase()
              .includes(searchText.toLowerCase());
          });
          setFilterList(filteredList);
        }}
      />
    </div>
  );
};

export default Search;
