import React from 'react';
import Likes from '../likes';
import './profile.css';

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
        <Likes
          likeCounter={this.state.likeCounter}
          likeHandler={this.likeHandler}
        />
      </section>
    );
  }
}

export default Profile;
