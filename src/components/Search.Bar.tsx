import "../styles/search-bar.css";
import React, { useContext, useRef, useState } from "react";
import { MyProvider } from "../context";

function SearchBar() {

    const [search, setSearch] = useState<String>("");

    const context = useContext(MyProvider)

    // set search in state
    const handelSetSearch = (e:  React.ChangeEvent<HTMLInputElement>): void =>{
    
        setSearch(e.target.value)
    
    }

    // send for api
    const handelSearch = (): void =>{

        context?.setSearch(search as string)

    
    }



  return (
    <div className="search_bar_container">

        <input type="text" onChange={handelSetSearch} placeholder="Search..."/>

        <button onClick={handelSearch}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="search-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
            </svg>
        </button>
    </div>
  );
}

export default React.memo(SearchBar);
