import { useState, useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Cards from './components/cards';


const API_KEY = "e0766bf3";

const API_RESPONSE_STATUSES = {
  TRUE : "true",
  FALSE : "false"
}

function App() {
  const [searchMoviesKeyword, setSearchMoviesKeyword] = useState("movie");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const fetchMovies = async () => {
    try {
      const apiURL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchMoviesKeyword}`;
      const response = await fetch(apiURL);
      const respJSON = await response.json();
      if (
        !response.ok ||
        (respJSON.Response &&  respJSON.Response.toLowerCase() === API_RESPONSE_STATUSES.FALSE)
       
      ) {
        throw respJSON;
      }
       const result = [];
       respJSON.Search.forEach((movie) => {
        result.push({
          title: movie.Title,
          poster: movie.Poster,
        })
       })
      dispatch({
        type: "INSERT_MOVIES",
        movies: result,
      })
    } catch (err) {
      console.error("[fetchMovies]:", err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);


  return (
    <>
      <div className="container mx-auto mb-3">
        <Navbar 
        onChange={(value) => {
          setSearchMoviesKeyword(value)
        }} 
        onClick={() => {
          fetchMovies()
        }}
        />
        <div className="container mx-auto px-12 my-6">
          <h1 className="text-2xl font-bold text-sky-600">Your favorite movie</h1>
        </div>
        <div className="container mx-auto px-6 flex justify-center items-center flex-wrap gap-4 mb-4">
          {
            movies.map((movie, index) => {
              return (
                <Cards 
                key={`${movie.poster}- ${index}`}
                  title= {movie.title}
                  poster={movie.poster}
                
                />
              )
            })
          }
        
        </div>
      </div>
    </>
  );
}

export default App;
