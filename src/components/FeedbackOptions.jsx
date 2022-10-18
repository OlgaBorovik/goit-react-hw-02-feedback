import React from "react";
import PropTypes from 'prop-types'

export const FeedbackOptions = () => {
    return (
        <div> 
            <button type='button' onClick={this.incrementGood}>Good</button>
            <button type='button' onClick={this.incrementNeutral} >Neutral</button>
            <button type='button' onClick={this.incrementBad}>Bad</button>
        </div>
    )
}