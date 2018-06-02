import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isInArray, formatDate } from '../utils/helpers'
import { handleAnswerQuestion } from '../actions/questions'
import { handleUpdateUserAnswer } from '../actions/users'
import { handleQuestionVote } from '../actions/shared'

class QuestionAnswered extends Component {

    render() {
        const { question, author, userAnswer } = this.props

        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

        var optionOnePercent = convertToPercentageString(question.optionOne.votes.length, totalVotes)
        var optionTwoPercent = convertToPercentageString(question.optionTwo.votes.length, totalVotes)

        return (
            <div className='tweet'>
                <div className='tweet-info'>

                    <div>{formatDate(question.timestamp)}</div>

                        <p>{question.optionOne.text} : Votes {question.optionOne.votes.length} : { optionOnePercent } { userAnswer === "optionOne" ? <img className="checkMark" src="./green-check-mark-md.png"/> : null }</p> 
                        <p>{question.optionTwo.text} : Votes {question.optionTwo.votes.length} : { optionOnePercent } { userAnswer === "optionTwo" ? <img className="checkMark" src="./green-check-mark-md.png"/> : null }</p> 

                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    var userAnswer = '';

    if(isInArray(question.optionOne.votes, authedUser.id)){
        userAnswer = "optionOne"
    } else if (isInArray(question.optionTwo.votes, authedUser.id)){
        userAnswer = "optionTwo"
    }

    return {
        question,
        userAnswer
    }
}

function convertToPercentageString(numerator, total){

    var decimal = (numerator / total) * 100
    var rounded = Math.round(decimal)
    var string = rounded.toString() + "%"

    return string
}

export default connect(mapStateToProps)(QuestionAnswered)

