import {useState, useContext} from "react";
import Movie from "./movie";
import { Moviecontext } from "./moviecontext";
const Movielist = () => {
const value = useContext(Moviecontext);

 //   const [movies,setMovies] = useState([
 //       {name : 'movie1', price : 10, key : 1233},
 //       {name : 'movie2', price : 20, key : 1344}
 //   ]);
    
    return ( 
    <div>
        <h1>{value}</h1>
    </div> 
    );
}
 
export default Movielist;