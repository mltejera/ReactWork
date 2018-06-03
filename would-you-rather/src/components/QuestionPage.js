import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {
    render() {

        const {questions} = this.props

        var questionIds = Object.keys(questions)
        var questionId = this.props.questionId.id

        console.log(questionIds)

        

        if(questionIds.includes(questionId)){
            return (    
                <div>
                    <Question id={questionId}/>
                </div>
            )
        } else {
            console.log("404")
            return <div>404, question not found</div>
        }


    }
}

function mapStateToProps({questions}, props){

    const questionId = props.match.params
    return {
        questionId,
        questions

    }
}

export default connect(mapStateToProps)(QuestionPage)