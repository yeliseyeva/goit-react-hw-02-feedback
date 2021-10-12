import React from "react";

function FeedbackOptions ({options, onLeaveFeedback}) {
    return (
        <div>
            <h1 className="header">Feedback</h1>
      <ul className="list__button">

          {options.map(option => {
              return (
                <li className="item__button">
                    <button 
                    type="button" 
                    className="button" 
                    name={option}
                    onClick={onLeaveFeedback}>{option}</button>
                </li>
              )
          })}

        {/* <li className="item__button">
          <button type="button" className="button" onClick={this.goodCounter}>Good</button>
        </li>
        <li className="item__button">
          <button type="button" className="button" onClick={this.neutralCounter}>Neutral</button>
        </li>
        <li className="item__button">
          <button type="button" className="button" onClick={this.badCounter}>Bad</button>
        </li> */}
      </ul>
        </div>
    )
}

export default FeedbackOptions; 