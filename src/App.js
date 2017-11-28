import React, { Component } from 'react';
import './App.css';
import Profile from './components/profile';

class App extends Component {

  state = {
    firstName: 'John',
    lastName: 'Dog',
    nickName: 'Big Dog',
    imageURL: 'https://randomuser.me/api/portraits/men/44.jpg'
  }

  onChangeFirstName = (event) => {
    console.log('First name changed!')
    const input = event.target;
    const newFirstName = input.value;
    this.setState({
      firstName: newFirstName
    })
  }

  onChangeNickName = (event) => {
    console.log('Nick name changed!')
    const input = event.target;
    const newNickName = input.value;
    this.setState({
      nickName: newNickName
    })
  }

  onChangeLastName = (event) => {
    console.log('Last name changed!')
    const input = event.target;
    const newLastName = input.value;
    this.setState({
      lastName: newLastName
    })
  }

  onChangeimageURL = (event) => {
    console.log('Image changed!')
    const input = event.target;
    const newimageURL = input.value;
    this.setState({
      imageURL: newimageURL
    })
  }

  render() {

    let { firstName, nickName, lastName, imageURL } = this.state;

    return (
      <div className="App">
        <Profile
          firstName={ firstName }
          nickName={ nickName }
          lastName={ lastName }
          imageURL={ imageURL } />

        <label>
          First name:
          <input type="text" value={ firstName } onChange={ this.onChangeFirstName }/>
        </label><br />
        <label>
          Nick name:
          <input type="text" value={ nickName } onChange={ this.onChangeNickName }/>
        </label><br />
        <label>
          Last name:
          <input type="text" value={ lastName } onChange={ this.onChangeLastName }/>
        </label><br />
        <label>
          Change image:
          <input type="file" value={ imageURL } onChange={ this.onChangeimageURL }/>
        </label><br />
        <button>Save changes</button>
      </div>
    );
  }
}

export default App;
