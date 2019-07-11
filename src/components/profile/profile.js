import React from 'react';
import Likes from '../likes/likes';
import ProfileImage from "../profileImage/ProfileImage"
import './profile.css';
import Name from "../name";
import Stars from "../Stars";
import Description from "../description";


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
      <section className="profile">
<<<<<<< HEAD
        <ProfileImage />
<<<<<<< HEAD
        <Stars />
=======
=======
        <Name />
        <Description />
>>>>>>> Name and description changes made
>>>>>>> Name and description changes made
        <Likes
          likeCounter={this.state.likeCounter}
          likeHandler={this.likeHandler}
        />
      </section>
    );
  }
}

export default Profile;
