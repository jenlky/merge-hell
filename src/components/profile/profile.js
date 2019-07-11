import React from "react";
import profileImage from "./profileImage";
import Likes from "./likes";

// const Profile = () => {
//   return (
//     <div>
//       <profileImage />
//     </div>
//   );
// };

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likeCounter: 0 };
  }

  likeHandler = () => {
    this.setState((prevState, props) => {
      return { likeCounter: prevState.likeCounter + 1 };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Likes
          likeCounter={this.state.likeCounter}
          likeHandler={this.likeHandler}
        />
      </React.Fragment>
    );
  }
}

export default Profile;
