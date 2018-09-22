import React, { Component } from "react";
import Nav from "../Nav";
// import Header from "../Header";
// import Container from "../Container";
// import ClickItem from "../ClickItem";
// import Footer from "../Footer";
import picture from "../../picture.json";

class ClickyGame extends Component {
  state = {
    picture,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ picture: this.shuffleData(this.state.picture) });
  }

  handleCorrectGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      picture: this.shuffleData(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleIncorrectGuess = picture => {
    this.setState({
      picture: this.resetData(picture),
      score: 0
    });
  };

  resetData = picture => {
    const resetData = picture.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };

  shuffleData = picture => {
    let i = picture.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = picture[i];
      picture[i] = picture[j];
      picture[j] = temp;
      i--;
    }
    return picture;
  };

  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.picture.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };

  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
      
      </div>
    );
  }
}

export default ClickyGame;