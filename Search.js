import React from 'react';

const Search = ({searchfield,searchChange}) =>{
    return(
        <div className="tc">
            <input className="tc pa3 ba b--green bg-lightest-blue"
             type="search" 
             placeholder=" search robots"
             onChange={searchChange}
             />
        </div>
    )
}

export default Search;