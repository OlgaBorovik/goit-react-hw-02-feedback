import React from "react"
import { Statistics } from "./Statistics"
import { FeedbackOptions } from "./FeedbackOptions"

class App extends React.Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        
    }

    // handleIncrement = (event) => {
    //     this.setState(prevState => ({
    //         good: 0,
    //     neutral: 0,
    //     bad: 0
    //     }))
    // }

    incrementGood = (event) => {
        this.setState(prevState => ({
            good: prevState.good + 1,
           
        }))
    }
    incrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
           
        }))
    }
    incrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
            
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
              {/* <FeedbackOptions
                options={ }
                onLeaveFeedback={ } /> */}
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
