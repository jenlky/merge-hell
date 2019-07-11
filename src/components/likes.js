import React from "react";

function Likes() {
  return (
    <div className="counter">
      <h1>{`${props.counter} likes`} </h1>
      <button onClick={props.likeHandler}>LIKE</button>
    </div>
  );
}

export default Likes;
