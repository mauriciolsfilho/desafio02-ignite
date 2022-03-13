import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import MovieProps from "../models/movie-props";

import "../styles/content.scss";
import { api } from "../services/api";

interface ContentProps {
  selectedGenreId: number;
}
/**
 * Componente {@link Content}
 * @param props
 */
export function Content({ selectedGenreId }: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });
  }, [selectedGenreId]);

  return (
    <main>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
}
