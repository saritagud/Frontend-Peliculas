import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Movies/Carousel";
import CardMovie from "./Movies/CardMovie";
import Searcher from "./Movies/Searcher";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from "../features/movies/moviesSlice";
import { Link } from "react-router-dom";

function Landing() {
  const movies = useSelector(state => state.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    if (movies.movies.length === 0) {
      dispatch(fetchMovies())
    }
  }, [dispatch, movies])
  
  return (
    <>
      <Header />
      <section>
        <Carousel />
      </section>

      <section className="flex flex-col justify-center items-center">
        <Searcher />
        <Link to={'/administrador'}>Admin</Link>
        {movies.movies.length === 0 ? (
          // Esto ⬇️ hay que mejorarlo
          <h1>no hay movies</h1>
        ) : (
          movies.movies.map(movie => (
            <CardMovie
              key={movie._id}
              data={movie}
            />
          ))
        )}
      </section>

      <Footer />
    </>
  );
}

export default Landing;
