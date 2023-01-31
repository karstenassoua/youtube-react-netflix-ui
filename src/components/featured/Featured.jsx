import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React, { Component } from "react";
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://i.imgur.com/dA3soJx.jpeg" alt="" />
      <div className="info">
        <img src="https://i.imgur.com/2cBI0ei.png" alt="" />
        <span className="desc">
          The Tokyo Bulls are on a mission to win one final championship, but
          the road to victory is far from easy. With aggressive fouls and injury
          scandals, the team must fight against the Beijing Jazz in the 1937
          Sino-Japan Finals. The stakes are high as tensions rise between Japan
          and China, leading to the iconic "Last Shot" by superstar shooting
          guard Konoe Jordan.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
