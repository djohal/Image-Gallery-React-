import React from "react";

import "./card-list.styles.css";
import { Cards } from "../cards/cards.component";

export const CardList = ({ photos }) => (
  <div className="card-list">
    {photos.map((pic) => (
      <Cards
        key={pic.id}
        author={pic.author}
        url={`https://picsum.photos/id/${pic.id}/367/267`}
        fullImageUrl={pic.download_url}
        imageUrl={pic.url}
      ></Cards>
    ))}
  </div>
);
