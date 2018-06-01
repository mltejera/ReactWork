import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Link, withRouter } from 'react-router-dom'

class User extends Component {
    handleClick = (e) => {

        e.preventDefault()

        console.log(this.props)
        const { dispatch, authedUser } = this.props.id
        
        dispatch(setAuthedUser({ authedUser }))
    };

    render() {

        const user = this.props.user

        return (
            <button className='tweet' onClick={this.handleClick}>
                    <img
                        src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className='avatar'
                    />
                    
                    <h2>{user.name}</h2>

            </button>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    const user = users[id]
    return {
        user: user
    }
}

export default withRouter(connect(mapStateToProps)(User))
