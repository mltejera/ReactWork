import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isInArray, formatDate } from '../utils/helpers'
import { handleAnswerQuestion } from '../actions/questions'
import { handleUpdateUserAnswer } from '../actions/users'
import { handleQuestionVote } from '../actions/shared'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

class QuestionAnswered extends Component {

    render() {
        const { question, author, userAnswer } = this.props

        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

        var optionOnePercent = convertToPercentageString(question.optionOne.votes.length, totalVotes)
        var optionTwoPercent = convertToPercentageString(question.optionTwo.votes.length, totalVotes)

        return (
            <Paper className='answeredQuestionPaper'>
                    <Typography variant="title" className='center'>Asked at: {formatDate(question.timestamp)}</Typography>
                        
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell className="gridRowText">Answer Description</TableCell>
                                <TableCell numeric>Votes</TableCell>
                                <TableCell numeric>Percent</TableCell>
                                <TableCell numeric>Your vote</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row" variant="body">{question.optionOne.text}</TableCell>
                                <TableCell numeric>{question.optionOne.votes.length}</TableCell>
                                <TableCell numeric>{optionOnePercent}</TableCell>
                                <TableCell numeric> {userAnswer === "optionOne" ? <img className="checkMark" src="./green-check-mark-md.png" /> : null}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">{question.optionTwo.text}</TableCell>
                                <TableCell numeric>{question.optionTwo.votes.length}</TableCell>
                                <TableCell numeric>{optionTwoPercent}</TableCell>
                                <TableCell numeric> {userAnswer === "optionTwo" ? <img className="checkMark" src="./green-check-mark-md.png" /> : null}</TableCell>
                            </TableRow>
                    </TableBody>
                    </Table>
            </Paper>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    var userAnswer = '';

    if (isInArray(question.optionOne.votes, authedUser.id)) {
        userAnswer = "optionOne"
    } else if (isInArray(question.optionTwo.votes, authedUser.id)) {
        userAnswer = "optionTwo"
    }

    return {
        question,
        userAnswer
    }
}

function convertToPercentageString(numerator, total) {

    var decimal = (numerator / total) * 100
    var rounded = Math.round(decimal)
    var string = rounded.toString() + "%"

    return string
}

export default connect(mapStateToProps)(QuestionAnswered)

