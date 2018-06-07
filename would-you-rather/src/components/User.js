import React, { Component } from 'react'


import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

class User extends Component {

    render() {

        if (this.props !== null && this.props.user !== null) {
            return (
                <Chip
                clickable={this.props.isClickable}
                    avatar={<Avatar src={this.props.user.avatarURL} />}
                    label={this.props.user.name}
                />
            )
        }
    }
}


export default User