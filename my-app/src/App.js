import React, {Component} from "react";
import FeedbackOptions from "./Components/FeedbackOptions";
import Statistics from "./Components/Statistics";



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  // goodCounter = () => {
  //   this.setState(() => {
  //     return {
  //       good: this.state.good + 1,
  //     };
  //   });
  // };

  // neutralCounter = () => {
  //   this.setState(() => {
  //     return {
  //       neutral: this.state.neutral + 1,
  //     };
  //   });
  // };

  // badCounter = () => {
  //   this.setState(() => {
  //     return {
  //       bad: this.state.bad + 1,
  //     };
  //   });
  // };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const positiveFeedback = Math.round((good * 100) / this.countTotalFeedback());
    return positiveFeedback;
  }

  onLeaveFeedback = (e) => {
    const name = e.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }))
  }

  render() {

    return (
      <div>
      <FeedbackOptions 
      options={["Good", "Neutral", "Bad"]} 
      onLeaveFeedback={this.onLeaveFeedback()}/>;

      <Statistics 
        good={this.state.good} 
        neutral={this.state.neutral} 
        bad={this.state.bad} 
        total={this.countTotalFeedback()} 
        positivePercentage={this.countPositiveFeedbackPercentage()}/>
      </div>
    )
  }
}

export default App;
