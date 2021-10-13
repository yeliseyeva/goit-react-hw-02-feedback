import React from "react";

function FeedbackOptions ({options, onLeaveFeedback}) {
    return (
      <ul className="list__button">

          {options.map(option => {
              return (
                <li className="item__button" key={option}>
                    <button 
                    type="button" 
                    className="button" 
                    name={option}
                    onClick={()=>onLeaveFeedback(option)}>{option}</button>
                </li>
              )
          })}
      </ul>
    )
}

export default FeedbackOptions; 