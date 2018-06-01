import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class UserSelector extends Component {
    render() {
        const userIds = this.props.userIds
        return (
            <div>
                <h3 className='center'>Select a user</h3>
                <ul className='dashboard-list'>
                    {userIds.map((id) => (
                        <li key={id} >
                            <button onClick={this.handleClick}>
                                <User id={id} />
                            </button>
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
    }
}


export default connect(mapStateToProps)(UserSelector)