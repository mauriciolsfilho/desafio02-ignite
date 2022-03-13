import { Button } from "./Button";
import GenreResponseProps from "../models/genre-response-props";

interface SidebarProps {
  onChangeGenre: (id: number) => void;
  selectedGenreId: number;
}

import "../styles/sidebar.scss";
import { useEffect, useState } from "react";
import { api } from "../services/api";

/**
 * Componente {@link Sidebar}
 * @param selectedGenreId
 * @param onChangeGenre
 */
export function SideBar({ selectedGenreId, onChangeGenre }: SidebarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres?.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onChangeGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
