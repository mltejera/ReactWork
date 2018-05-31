import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/questions'
import authedUser from './authedUser';

export default function questions (state = {}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS :
            return {
                ...state, 
                ...action.questions
            }
        case ANSWER_QUESTION :
                let newState = {...state};

                if(!isInArray(newState[action.qid][action.answer].votes, action.authedUser)){
                    newState[action.qid][action.answer].votes = newState[action.qid][action.answer].votes.concat(action.authedUser)
                }
                 
                return newState

        default :
            return state
    }
}

function isInArray(array, value){
    for(var i = 0; i < array.length; i++){
        if(value === array[i]){
            return true;
        }
    }

    return false
}