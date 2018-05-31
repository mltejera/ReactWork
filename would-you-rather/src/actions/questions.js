import {saveQuestionAnswer} from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function answerQuestion({authedUser, qid, answer}){
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function handleAnswerQuestion (info){
    return dispatch => {
        dispatch(answerQuestion(info))

    return saveQuestionAnswer(info)
        .catch((e) => {
            console.warn("Error in handleAnswerQuestion")
            dispatch(answerQuestion(info))
            alert('There was an error answering this question')
        })
    }
}