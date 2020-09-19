import React from 'react';

const Display=(props)=>{
     return(
         <div className="outer"> 
               {props.movie.map((val,id)=>(
               <div key={id} className="inner">
                   {val.poster_path==null?<img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={{width:180, height:280}}/>:<img src={`http://image.tmdb.org/t/p/w185${val.poster_path}`}></img>}
                   <h5>{val.title}</h5>
               </div>))}
         </div>
     )
}
export default Display;