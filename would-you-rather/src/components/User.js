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
            console.log("NULL USER")

            return (
                    <div className='tweet'>
                        <img
                            src="../assets/placeholder.png"
                            alt = "Placeholder Image"
                            className='avatar'
                        />

                        <h2>Please Select a user</h2>
                    </div>
                    )
                }
        
        
            }
        }
        
        
export default connect()(User)