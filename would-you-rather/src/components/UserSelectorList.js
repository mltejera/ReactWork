import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserSelector from './UserSelector'

class UserSelectorList extends Component {
    render() {

        const userIds = this.props.userIds

        return (
            <div>
                <h3 className='center'>Select a user</h3>
                <ul className='dashboard-list'>
                    {userIds.map((id) => (
                        <li key={id} >
                            <UserSelector id={id} />
                        </li>
                    ))}
                </ul>
            </div> 
        )
    }
}

function mapStateToProps({users}) {

    return {
        userIds: Object.keys(users)
    }
}


export default connect(mapStateToProps)(UserSelectorList)