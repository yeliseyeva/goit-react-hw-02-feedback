import React from "react";

function Statistics ({good, neutral, bad, total, positivePercentage}) {
    return (
      <ul className="list__statistics">
        <li className="item__statistics">
          <p>Good: {good}</p>
        </li>
        <li className="item__statistics">
          <p>Neutral: {neutral}</p>
        </li>
        <li className="item__statistics">
          <p>Bad: {bad}</p>
        </li>
        <li className="item__statistics">
          <p>Total: {total}</p>
        </li>
        <li className="item__statistics">
          <p>Positive feedback: {positivePercentage || 0}%</p>
        </li>
      </ul>
    )
}
export default Statistics;