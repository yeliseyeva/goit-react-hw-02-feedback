import React, {Component} from "react";
import FeedbackOptions from "./Components/FeedbackOptions";
import Statistics from "./Components/Statistics";
import Section from "./Components/Section";
import Notification from "./Components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (name) => {
    this.setState((prevState) => {
      if ("Good" === name) {
        return { good: prevState.good + 1 };
      } else if ("Neutral" === name) {
        return { neutral: prevState.neutral + 1 };
      } else {
        return { bad: prevState.bad + 1 };
      }
    });
  };

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

  render() {

    const total = this.countTotalFeedback();

    return (
      <>
      <Section title="Feedback">
        <FeedbackOptions 
        options={["Good", "Neutral", "Bad"]} 
        onLeaveFeedback={this.onLeaveFeedback}/>
      </Section>

      <Section title="Statistics">
      {total === 0 ? (<Notification/>) : (
        <Statistics 
        good={this.state.good} 
        neutral={this.state.neutral} 
        bad={this.state.bad} 
        total={this.countTotalFeedback()} 
        positivePercentage={this.countPositiveFeedbackPercentage()}/>
      
      )}
      </Section>
      </>
    )
  }
}

export default App;
