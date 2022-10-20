// import { render } from "@testing-library/react";
import React from "react";
// import PropTypes from 'prop-types'

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


export default FeedbackOptions