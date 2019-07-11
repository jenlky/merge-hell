import React from "react";

function Likes(props) {
  return (
    <div className="counter">
      <h1>{`${props.likeCounter} likes`} </h1>
      <button onClick={props.likeHandler}>LIKE</button>
    </div>
  );
}

export default Likes;
