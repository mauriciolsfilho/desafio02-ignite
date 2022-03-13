import GenreResponseProps from "../models/genre-response-props";

import "../styles/header.scss";

/**
 * Componente {@link Header}
 * @param title
 */
export function Header({ title }: GenreResponseProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {title}</span>
      </span>
    </header>
  );
}
