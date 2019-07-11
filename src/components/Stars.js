import React from "react";

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalStars: 5,
      lightedStars: 0
    };
  }

  handleClick = e => {
    this.setState({ lightedStars: Number(e.target.id) });
  };

  render() {
    const starsArray = [];
    for (let i = 0; i < this.state.lightedStars; i++) {
      starsArray.push({
        id: i + 1,
        className: "lit"
      });
    }

    for (let i = 0; i < 5 - this.state.lightedStars; i++) {
      starsArray.push({
        id: this.state.lightedStars + i + 1,
        className: "unlit"
      });
    }

    const stars = starsArray.map(star => {
      return (
        <Star
          key={star.id}
          id={star.id}
          onClick={this.handleClick}
          className={star.className}
        />
      );
    });

    return <div className="star-container">{stars}</div>;
  }
}

function Star(props) {
  return (
    <p
      key={props.id}
      id={props.id}
      onClick={props.onClick}
      className={props.className}
    >
      {String.fromCharCode(9734)}
    </p>
  );
}

export default Stars;
