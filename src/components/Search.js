import { useState } from "react";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        filterCakes(searchTerm);
        
    }
    
    return(
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="search-field">Search for a cake:</label>
            <input  type="text" 
                    id="search-field"
                    onChange = {(event) => setSearchTerm(event.target.value)}
                    value={searchTerm}/>
            
            <input type="submit" />
        
        </form>
    )

}

export default Search;