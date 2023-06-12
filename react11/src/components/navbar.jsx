import React, { useContext } from "react";
import SearchContext from "../searchContext";


function Navbar(){
    const {search,updateSearch}=useContext(SearchContext);
    const  handleChange=(e) =>{
        updateSearch(e.target.value);
    };
    return  (
        <div>
            <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e)=>handleChange(e)}
            />
        </div>
    );
}
export default Navbar;