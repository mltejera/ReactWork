import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Grid from '@material-ui/core/Grid'

class QuestionList extends Component {

    constructor(props) {
        super(props)

        const { users, authedUser, questionIds, questions } = props

        var listOfAllQuestionIds = Object.keys(questions)

        var questionsIdsUserHasAnswered = Object.keys(users[authedUser.id].answers)
        var questionIdsUserHasNOTAnswered = [];

        for (var i = 0; i < listOfAllQuestionIds.length; i++) {
            var questionId = listOfAllQuestionIds[i];

            if (!questionsIdsUserHasAnswered.includes(questionId)) {
                questionIdsUserHasNOTAnswered.push(questionId)
            }
        }

        this.state = ({
            questionsIdsUserHasAnswered: questionsIdsUserHasAnswered,
            questionIdsUserHasNOTAnswered: questionIdsUserHasNOTAnswered,
        })
      }

    render() {
        if (this.props.showAnswered) {
            return (
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={16}>
                            {this.state.questionsIdsUserHasAnswered.map((id) => (
                                <Grid item key={id}>
                                    <Question id={id} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            )
        } else {
            return (
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={16}>
                            {this.state.questionIdsUserHasNOTAnswered.map((id) => (
                                <Grid item key={id}>
                                    <Question id={id} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            )
        }
    }
}

function mapStateToProps({ questions, users, authedUser }) {

    return {
        users,
        authedUser,
        questions,
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionList)