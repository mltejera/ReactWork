import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import NewQuestion from './NewQuestion'

class QuestionPage extends Component {
    render() {
        // const { id, replies } = this.props
        // console.log(this.props)

        return (
            <div>
                {/* <Question id={id}/>

                <NewQuestion id={id}/>  */}

                {/* {replies.length !== 0 && <h3 className='center'>Replies</h3>}

                <ul>
                    {replies.map((replyId) => (
                        <li key={replyId}>
                            <Question id={replyId}/>
                        </li>
                    ))}
                </ul> */}

                Question Page
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, props){
    const { id } = props.match.params

    return {
        // todo
        // id,
        // replies: !tweets[id]
        // ? []
        // : tweets[id].replies.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionPage)