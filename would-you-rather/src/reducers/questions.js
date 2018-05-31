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
            if(action.isOptionOne){

                /// this checks out okay, why doesn't the rest?
                console.log(state[action.questionId].optionOne.votes.pushIfNotExist(action.authedUser))

                return {
                    ...state,
                    [action.questionId] : {
                        ...state[action.questionId],
                            optionOne: {
                                votes: state[action.questionID].optionOne.votes.pushIfNotExist(authedUser),
                                text: state[action.questionID].optionOne.text
                            }, 
                            optionTwo: {
                                votes: state[action.questionID].optionTwo.votes.removeElement(authedUser),
                                text: state[action.questionID].optionOne.text
                            }
                    }
                }
            }
            // } else {
            //     return {
            //         ...state,
            //         [action.questionId] : {
            //             ...state[action.questionId],
            //             optionOne: state[action.questionID].optionOne.votes.removeElement(authedUser),
            //             optionTwo: state[action.questionID].optionTwo.votes.pushIfNotExist(authedUser)
            //         }
            //     }
            // }

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

    console.log(this)
};

Array.prototype.removeElement = function(element) {
    var index = this.indexOf(element)
    if(index > -1){
        this.splice(index, 1)
    }
}