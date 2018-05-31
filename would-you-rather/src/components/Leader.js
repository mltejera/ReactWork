import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leader extends Component {
    render() {

        const user = this.props.user

        const score = Object.keys(user.answers).length + user.questions.length

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
                        <h5>Score: {score}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    const user = users[id]
    return {
        user: user
    }
}

export default connect(mapStateToProps)(Leader)
