import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "./../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    //Debouncing
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) setShowSuggestion(searchCache[searchQuery]);
      else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    dispatch(cacheResults({ [searchQuery]: json[1] }));
    // searchCache[json[1]] = json[1]

    setSuggestion(json[1]);

    // console.log(json[1]);
  };

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleHandler}
          className="h-10 mx-2 cursor-pointer"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <img
          className="h-10"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>

      <div className="col-span-10">
        <input
          className="w-1/2 px-10 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
          {" "}
          Search
        </button>
        {showSuggestion && (
          <div className="absolute shadow-lg bg-white py-2 px-5 w-[40rem] rounded-lg">
            <ul>
              {suggestion.map((text) => {
                return (
                  <li
                    key={text}
                    className="py-2 px-3 shadow  hover:bg-gray-100"
                  >
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-10"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small_2x/user-icon-member-login-isolated-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
