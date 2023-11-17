import React, { useState } from "react";

const SearchBar = ({ setTerm }) => {
    const [search, setSearch] = useState()
    return (
        <div className="">
            <form className="flex" onSubmit={(e) => {
                e.preventDefault()
                setTerm(search)
            }}>
                <input className="bg-neutral-700 placeholder:text-neutral-300 px-2 text-lg text-white  w-7/12 rounded-md py-2" type="text" placeholder="Search video" onChange={e => setSearch(e.target.value)}/>
            </form>
        </div>
    );
};

export default SearchBar;
