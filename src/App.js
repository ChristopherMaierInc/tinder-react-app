import React, { Component } from 'react';
import './App.css';
import Profile from './components/profile';

class App extends Component {

  state = {
    firstName: 'John',
    lastName: 'Dog',
    nickName: 'Big Dog',
    imageURL: 'https://randomuser.me/api/portraits/men/55.jpg',
    imageNum: 45,
    editing: false
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

  onChangeIncreaseNum = (event) => {
    console.log('Image increased!')
    this.setState({
      imageNum: this.state.imageNum + 1
    })
  }

  onChangeDecreaseNum = (event) => {
    console.log('Image decreased!')
    this.setState({
      imageURL: this.state.imageNum - 1
    })
  }

  getRandomUser = (event) => {
    console.log('Getting random user!')
    return fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((responseJson) => {
        let user = responseJson.results [0];
        this.setState({
          firstName: user.name.first,
          lastName: user.name.last,
          imageURL: user.picture.large
        })
      })
  }

  render() {

    let { firstName, nickName, lastName, imageURL, imageNum, editing } = this.state;

    return (
      <div className="App">
        <Profile
          firstName={ firstName }
          nickName={ nickName }
          lastName={ lastName }
          imageURL={ imageURL }
          imageNum={ imageNum } />

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
             Image:
          <input type="text" value={ imageURL } onChange={ this.onChangeimageURL }/>
        </label><br />

        <label>
          <input type="button" value="+" onClick={ this.onChangeIncreaseNum }/>
        </label>

        <label>
          <input type="button" value="-" onClick={ this.onChangeDecreaseNum }/>
        </label><br />

        <button value="edit" onClick= { this.getRandomUser }>Random</button>

      </div>
    );
  }
}

export default App;
