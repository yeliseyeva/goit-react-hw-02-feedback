import React from "react";
import s from "../FeedbackOptions/FeedbackOptions.module.css";

function FeedbackOptions ({options, onLeaveFeedback}) {
    return (
      <ul className={s.list}>

          {options.map(option => {
              return (
                <li className={s.item} key={option}>
                    <button 
                    type="button" 
                    className={s.button} 
                    name={option}
                    onClick={()=>onLeaveFeedback(option)}>{option}</button>
                </li>
              )
          })}
      </ul>
    )
}

export default FeedbackOptions; 