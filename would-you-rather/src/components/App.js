import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import QuestionList from './QuestionList'
import Nav from './Nav'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Leaderboard from './Leaderboard'
import UserSelectorList from './UserSelectorList'
import User from './User'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log(this.props.isAuthed)
    return (
      <Router>
        <Fragment>
          <div className='container'>
            {this.props.isAuthed
              ?
              <div>
                <Nav />
                  <div>
                    <Route path='/' exact component={QuestionList} />
                    <Route path='/question/:id' component={QuestionPage} />
                    <Route path='/new' component={NewQuestion} />
                    <Route path='/leader' component={Leaderboard} />
                    <Route path='/changeUser' component={UserSelectorList} />
                  </div>
              </div>
               : <UserSelectorList />
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthed: (state.authedUser !== null && state.authedUser.id !== null),
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(App);
