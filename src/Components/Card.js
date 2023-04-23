import React from "react";
import { CardData } from "../Data/CardData.js";
function Card() {
  return (
    <div className="card">
      <div className="card-title">
        <hr
          style={{
            width: "30%",
            border: "solid 4px #EF5A21",
            borderRadius: "5px",
            boxShadow: "5px 5px 75px #EF5A21",
            zIndex: "2000",
            position: "absolute",
            top: "-5px",
          }}
        />
        <p>A კატეგორიის საგზურში შედის</p>
      </div>

      <div className="card-element-container">
        {CardData.map((data) => {
          return (
            <div className="card-element" key={data.id}>
              <img src={data.img} />
              <p>{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
