import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Link, withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import User from './User'

class UserSelector extends Component {

    handleClick = (e) => {

        e.preventDefault()

        const { dispatch, user } = this.props

        dispatch(setAuthedUser(user.id))

        this.forceUpdate();
    };

    render() {

        return (
            <button className='tweet' onClick={this.handleClick}>
                <User user={this.props.user} />
            </button>
        )
    }
}

function mapStateToProps({users, authedUser}, props ) {

    const user = users[props.id]

       return {
         user
    }
}

export default withRouter(connect(mapStateToProps)(UserSelector))