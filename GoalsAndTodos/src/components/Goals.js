import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
    handleAddGoal,
    handleDeleteGoal
} from '../actions/goals'


class Goals extends React.Component {
    addItem = (e) => {
            e.preventDefault()

            this.props.dispatch(handleAddGoal(
                this.input.value,
                () => this.input.value = ''
            ))
}

    removeItem = (goal) => {
        this.props.dispatch(handleDeleteGoal(goal))
    }

    render() {
        return (
            <div>
                <h1>Goals</h1>
                <input id='goal' type='text' 
                    placeholder="Add goal" 
                    ref={(input) => this.input = input }/>
                <button id='goalBtn'
                        onClick={this.addItem}>Add goal</button>
                <ul id='goals'></ul>

                <List items={this.props.goals}
                      remove={this.removeItem} />
            </div>
        )
    }
}

export default connect((state) => ({
      goals: state.goals
    }))(Goals) 