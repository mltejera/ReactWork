import React, { Component } from 'react'
import { connect } from 'react-redux'
import Leader from './Leader'

class Leaderboard extends Component {
    render() {
        const userIds = this.props.userIds
        return (
            <div>
                <h3 className='center'>Leaderboard</h3>
                <ul className='dashboard-list'>
                    {userIds.map((id) => (
                        <li key={id}>
                            <Leader id={id} />
                        </li>
                    ))}
                </ul>
            </div> 
        )
    }
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users)
            .sort((a,b) => calcScore(users[b]) - calcScore(users[a]))
    }
}

function calcScore(user){
    return user.questions.length + Object.keys(user.answers).length
}

export default connect(mapStateToProps)(Leaderboard)