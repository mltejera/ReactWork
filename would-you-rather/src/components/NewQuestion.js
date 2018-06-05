import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }

  handleOptionOneChange = (e) => {
    const optionOneText = e.target.value

    this.setState(() => ({
      optionOneText
    }))
  }

  handleOptionTwoChange = (e) => {
    const optionTwoText = e.target.value

    this.setState(() => ({
      optionTwoText
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props


    dispatch(handleAddQuestion({optionOneText, optionTwoText }))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    }))
  }
  render() {
    const { optionOneText, optionTwoText, toHome } = this.state

    if (toHome === true) {
        return <Redirect to='/'/>
    }

    const optionOneLeft = 120 - optionOneText.length
    const optionTwoLeft = 120 - optionTwoText.length

    return (
      <div>
        <h3 className='center'>Compose new question</h3>

        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's your first option?"
            value={optionOneText}
            onChange={this.handleOptionOneChange}
            className='textarea'
            maxLength={120}
          />
          {optionOneLeft <= 100 && (
            <div className='tweet-length'>
              {optionOneLeft}
            </div>
          )}
          
          <textarea
            placeholder="And your second option?"
            value={optionTwoText}
            onChange={this.handleOptionTwoChange}
            className='textarea'
            maxLength={120}
          />
          {optionTwoLeft <= 100 && (
            <div className='tweet-length'>
              {optionTwoLeft}
            </div>
          )}

          <button
            className='btn'
            type='submit'
            disabled={optionOneText === '' || optionTwoText === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)