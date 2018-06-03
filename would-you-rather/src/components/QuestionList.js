import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component{
    render() {

        const { users, authedUser, questionIds, questions } = this.props

        console.log(this.props)

        var listOfAllQuestionIds = Object.keys(questions) 

        var questionsIdsUserHasAnswered = Object.keys(users[authedUser.id].answers)
        var questionIdsUserHasNOTAnswered = [];

        for(var i = 0; i < listOfAllQuestionIds.length; i++){
            var questionId = listOfAllQuestionIds[i];

            if(!questionsIdsUserHasAnswered.includes(questionId)){
                questionIdsUserHasNOTAnswered.push(questionId)
            }
        }

        if(this.props.showAnswered){
            return (
                <div>
                    <h3 className='center'>Answered Questions</h3>
    
                    <ul className='dashboard-list'>
                        {questionsIdsUserHasAnswered.map ((id) => (
                            <li key={id}>
                                <Question id={id} />
                            </li>
                        ))}
    
                    </ul>
                </div>
                )
        } else {
            return (
                <div>
                    <h3 className='center'>Un-Answered Questions</h3>
    
                    <ul className='dashboard-list'>
                        {questionIdsUserHasNOTAnswered.map ((id) => (
                            <li key={id}>
                                <Question id={id} />
                            </li>
                        ))}
    
                    </ul>
                </div>
                )
        }
        

    }
}

function mapStateToProps ({ questions, users, authedUser }){
    return {
        users,
        authedUser,
        questions,
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionList)