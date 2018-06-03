import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leader extends Component {
    render() {

        const { user, questions } = this.props

        var askCount = 0;

        for(var index in questions){
            if(questions[index].author === user.id){
                askCount += 1
            }
        }

        const answerCount = Object.keys(user.answers).length 

        return (
            <div className='tweet'>
                <div >
                    <img
                        src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className='avatar'
                    />
                </div>

                <div className='tweet-info'>
                    <div>
                        <span>{user.name}</span>
                    </div>
                    <div className='tweet-icons'>
                            <p>
                                Questions Answered: {answerCount}
                            <br/>
                                Questions Asked: {askCount}
                            </p>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions }, { id }) {
    const user = users[id]

    return {
        user: user,
        questions
    }
}

export default connect(mapStateToProps)(Leader)
