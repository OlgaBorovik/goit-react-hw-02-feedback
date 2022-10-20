import React from "react";
import PropTypes from 'prop-types'

function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <ul> 
            {options.map((option) => (
                <button
                    key={option}
                    onClick={onLeaveFeedback}
                    data-active={option}
                    type='button'>{option}</button>
                )
            )}
        </ul>
    )
}

FeedbackOptions.propType = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
    
}


export default FeedbackOptions