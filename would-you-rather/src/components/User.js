import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {

    render() {

        if (this.props.user !== null) {
            return (
                <div className='tweet'>
                    <img
                        src={this.props.user.avatarURL}
                        alt={`Avatar of ${this.props.user.name}`}
                        className='avatar'
                    />

                    <h2>{this.props.user.name}</h2>
                </div>
            )
        } else {
            return (
                    <div className='tweet'>
                        <img
                            src="../placeholder.png"
                            alt = "Placeholder Image"
                            className='avatar'
                        />
                    </div>
                    )
                }
        
        
            }
        }
        
        
export default connect()(User)