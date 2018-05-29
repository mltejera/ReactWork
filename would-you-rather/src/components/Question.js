import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

class Question extends Component {
    render() {
        const { question } = this.props

        if(question === null) {
            return <p>This question doesn't exist yet</p>
        }

        const {
            id, author, timestamp, optionOneText, optionTwoText, optionOneVoteCount, optionTwoVoteCount
        } = question

        

        return (
            <div className='tweet'>
                <div className='tweet-info'>
                <span>{author}</span> 
                <div>{formatDate(timestamp)}</div>
                    <button>{optionOneText} {optionOneVoteCount}</button>
                    <button>{optionTwoText} {optionOneVoteCount}</button>
                </div>
                

            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, { id }){
    const question = questions[id]
    
    return { 
        authedUser,
        question: question
            ? formatQuestion(question)
            : null
    }
}

export default connect(mapStateToProps)(Question)