import React from "react";

function addCelebration(count) {
  if (count % 5 === 0 && count !== 0) {
    return `${count} likes Woohoo!`;
  } else {
    return `${count} likes`;
  }
}

function Likes(props) {
  return (
    <div className="counter">
      <h1>{addCelebration(props.likeCounter)} </h1>
      <button onClick={props.likeHandler}>LIKE</button>
    </div>
  );
}

export default Likes;