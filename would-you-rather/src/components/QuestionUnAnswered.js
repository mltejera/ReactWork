import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { handleAnswerQuestion } from '../actions/questions'
import { handleUpdateUserAnswer} from '../actions/users'
import { handleQuestionVote} from '../actions/shared'
import User from './User'

class QuestionUnAnswered extends Component {
    handleOptionOneVote = (e) => {
        e.preventDefault()

        const { dispatch, question, authedUser, author } = this.props
           
        dispatch(handleQuestionVote({
            authedUser: authedUser,
            qid: question.id,
            answer: "optionOne",
        }))
      }

      handleOptionTwoVote = (e) => {
        e.preventDefault()

        const { dispatch, question, authedUser } = this.props
    
        dispatch(handleQuestionVote({
            authedUser: authedUser,
            qid: question.id,
            answer: "optionTwo",
        }))
      }

    render() {
        const { question, author, } = this.props

        console.log(question.optionOne.text)
        
        return (
            <div className='tweet'>
                <p>Would you rather?</p>
                    
                <ul>
                    <li>{question.optionOne.text}<button onClick={this.handleOptionOneVote}>Vote</button></li>
                    <li>{question.optionTwo.text}<button onClick={this.handleOptionTwoVote}>Vote</button></li>
                </ul>

                <span>Asked By:</span>
                <User user={author}/>

            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, { id }){
    const question = questions[id]
    const author = users[question.author]
    
    return { 
        authedUser,
        users,
        author,
        question
    }
}

export default connect(mapStateToProps)(QuestionUnAnswered)