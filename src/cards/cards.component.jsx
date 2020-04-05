import React from "react";
import "./cards.styles.css";

export const Cards = ({ author, url, imageUrl, fullImageUrl }) => (
  <div className="card">
    <a href={fullImageUrl} target="_blank" rel="noopener noreferrer">
      <img alt="gallery" src={url} />
    </a>
    <div className="card-author">
      <p> {author}</p>
      <button>
        <a
          className="card-author__link"
          href={imageUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {"View"}
        </a>
      </button>
    </div>
  </div>
);
