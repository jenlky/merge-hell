import React from "react";

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalStars: 5,
      lightedStars: false
    };
  }

  handleClick = e => {
    this.setState({ lightedStars: !this.state.lightedStars }); // Number(e.target.id)
  };

  render() {
    return (
      <p
        id="1"
        onClick={this.handleClick}
        className={this.state.lightedStars ? "lit" : "unlit"}
      >
        {String.fromCharCode(9734)}
      </p>
    );
  }
}

// return (
//   <React.Fragment>
//     <p
//       id="1"
//       onClick={this.handleClick}
//       className={
//         this.state.lightedStars > Number(this.id) ? "Lit" : "Unlit"
//       }
//     >
//       {String.fromCharCode(9734)}
//     </p>
//     <p
//       id="2"
//       onClick={this.handleClick}
//       className={
//         this.state.lightedStars > Number(this.id) ? "Lit" : "Unlit"
//       }
//     >
//       {String.fromCharCode(9734)}
//     </p>
//   </React.Fragment>
// );
// }

export default Stars;
