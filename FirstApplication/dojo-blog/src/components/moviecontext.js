import react,{createContext, useState} from "react";

export const Moviecontext = createContext();

export const MovieProvider = (props) => {
    const [movies,setMovies] = useState([
        {name : 'movie1', price : 10, key : 1233},
        {name : 'movie2', price : 20, key : 1344},
        {name : 'movie3', price : 30, key : 1244},
    ]);
    return ( 
        <Moviecontext.Provider value = 'hello'>
            {props.children}
        </Moviecontext.Provider>
     );
}
 
