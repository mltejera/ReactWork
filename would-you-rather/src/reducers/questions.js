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

                /// this checks out okay, why doesn't the rest?
                //console.log(state[action.questionId].optionOne.votes.concat(action.authedUser))

                let newState = state;

                newState[action.qid][action.answer].votes = newState[action.qid][action.answer].votes.concat(action.authedUser)
                                       
                return newState

        default :
            return state
    }
}

Array.prototype.pushIfNotExist = function(element) { 

    for(var i = 0; i < this.length; i++){
        if(this[i] === element){
            return 
        }
    }
    this.push(element)

};

Array.prototype.removeElement = function(element) {
    var index = this.indexOf(element)
    if(index > -1){
        this.splice(index, 1)
    }
}