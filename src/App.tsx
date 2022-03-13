import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import { api } from "./services/api";
import GenreResponseProps from "./models/genre-response-props";

import "./styles/global.scss";

/**
 * Componente {@link App}
 */
export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  function handleClickButton(genreId: number) {
    setSelectedGenreId(genreId);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        onChangeGenre={handleClickButton}
        selectedGenreId={selectedGenreId}
      />
      <div className="container">
        <Header {...selectedGenre} />
        <Content selectedGenreId={selectedGenreId} />
      </div>
    </div>
  );
}
