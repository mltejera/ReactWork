import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { handleAnswerQuestion } from '../actions/questions'
import { handleUpdateUserAnswer} from '../actions/users'
import { handleQuestionVote} from '../actions/shared'
import User from './User'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

class QuestionUnAnswered extends Component {
    handleOptionOneVote = (e) => {
        e.preventDefault()
        const { dispatch, question, authedUser, author } = this.props
           
        dispatch(handleQuestionVote({
            authedUser: authedUser,
            qid: question.id,
            answer: "optionOne",
        }))
        
        this.navToQuestion()
      }

      handleOptionTwoVote = (e) => {
        e.preventDefault()

        const { dispatch, question, authedUser } = this.props
    
        dispatch(handleQuestionVote({
            authedUser: authedUser,
            qid: question.id,
            answer: "optionTwo",
        }))

        this.navToQuestion()
      }

      navToQuestion () {
        this.props.history.push(`/question/${this.props.question.id}`) 
      }

    render() {
        const { question, author, } = this.props
        
        return (
            <Paper>
                <div className='questionCard'>
                    <Typography variant="title" classname="center">Would you rather?</Typography>                        
                    
                    <Typography variant="subheading">{question.optionOne.text}</Typography>
                        <Button variant="contained" onClick={this.handleOptionOneVote}>Vote</Button>

                    <Typography variant="subheading">{question.optionTwo.text}</Typography>
                        <Button variant="contained" onClick={this.handleOptionTwoVote}>Vote</Button>
                    

                    <Typography variant="body2">
                     Asked By:
                    </Typography>
                    <User user={author}/>

                </div>
            </Paper>
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

export default withRouter(connect(mapStateToProps)(QuestionUnAnswered))