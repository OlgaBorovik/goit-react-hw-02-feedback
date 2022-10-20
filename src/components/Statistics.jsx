import React from "react";
import PropTypes from'prop-types'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
            <div>
                <span>Good: {good}</span>
                <span>Neutral: {neutral}</span>
                <span>Bad: {bad}</span>
                <span>Total feedback: {total} </span>
                <span>Positive feedback: {positivePercentage} % </span>
            </div>
            
    )
}


Statistics.propType = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.isRequired
}