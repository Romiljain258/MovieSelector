import React from 'react';

const SearchArea=(props)=>{
     return(
         <form onSubmit={props.findResult}>
          <input className="text" type="text" placeholder="search movie name" onChange={props.findingResult}/>
         </form>
     )
};
export default SearchArea;