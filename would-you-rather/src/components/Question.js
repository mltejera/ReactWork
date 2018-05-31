import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { handleAnswerQuestion } from '../actions/questions'

class Question extends Component {
    handleOptionOneVote = (e) => {
        e.preventDefault()

        const { dispatch, question, authedUser } = this.props
           
        dispatch(handleAnswerQuestion({
            authedUser: authedUser,
            qid: question.id,
            answer: "optionOne",
        }))
      }

      handleOptionTwoVote = (e) => {
        e.preventDefault()

        const { dispatch, question, authedUser } = this.props
    
        dispatch(handleAnswerQuestion({
            authedUser: authedUser,
            qid: question.id,
            answer: "optionTwo",
        }))
      }

    render() {
        const { question } = this.props

        if(question === null) {
            return <p>This question doesn't exist yet</p>
        }

        const {
            author, timestamp, optionOneText, optionTwoText, optionOneVoteCount, optionTwoVoteCount
        } = question

        

        return (
            <div className='tweet'>
                <div className='tweet-info'>
                <span>{author}</span> 
                <div>{formatDate(timestamp)}</div>
                    <button onClick={this.handleOptionOneVote}>{optionOneText} {optionOneVoteCount}</button>
                    <button onClick={this.handleOptionTwoVote}>{optionTwoText} {optionTwoVoteCount}</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, { id }){
    const question = questions[id]
    
    return { 
        authedUser,
        users,
        question: question
            ? formatQuestion(question)
            : null
    }
}

export default connect(mapStateToProps)(Question)