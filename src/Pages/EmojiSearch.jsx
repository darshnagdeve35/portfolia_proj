import "./../EmojiSearch.css";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";

function EmojiSearch() {
  const [searchText, setSearchText] = useState("");

  function setSearchTextfn() {
    setSearchText("");
  }

  return (
    <>
      <div className="emoji-search">
        <div className="Search-container">
          <div className="Search-Bar">
            <Search />
            <input
              type="text"
              placeholder="Enter Query Here"
              className="Search-input"
              value={searchText}
              onChange={setSearchTextfn}
            />
          </div>
          \
        </div>
      </div>
    </>
  );
}

export default EmojiSearch;
