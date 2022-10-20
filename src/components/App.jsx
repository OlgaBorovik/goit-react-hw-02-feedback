import React from "react"
import { Statistics } from "./Statistics"
import  FeedbackOptions  from "./FeedbackOptions"

class App extends React.Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        
    }

    onLeaveFeedback = (event) => {
        const activeBtn = event.target.dataset.active
        this.setState(prevState => ({
            [activeBtn]: prevState[activeBtn] + 1,
        }))
    }

    countTotalFeedback = ({good, neutral, bad} = this.state) => {
        return good + neutral + bad
}
   
    countPositiveFeedbackPercentage = (total) => {
        return Math.round((this.state.good * 100) / total)
    }
    
    render() {
        const totalFeedback = this.countTotalFeedback()
        const positiveFeedback = this.countPositiveFeedbackPercentage(totalFeedback)
        return (
            <div>
                <div>
                    <h2>Please leave feedback</h2>
                <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback = {this.onLeaveFeedback}
                />
                </div>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            />
            </div>
        )
    }

 
}

export default App
