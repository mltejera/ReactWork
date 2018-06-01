import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Nav from './Nav'
import NewQuestion from './NewQuestion'
// import QuestionPage from './QuestionPage'
import Leaderboard from './Leaderboard'
import UserSelector from './UserSelector'

class App extends Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }


  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            <Nav />
            {/* {this.props.isAuthed === true
              ? <UserSelector />
              
              : <div> */}
              <div>
                  <Route path='/' exact component={Dashboard} />
                  {/* <Route path='/question/:id' component={QuestionPage} /> */}
                  <Route path='/new' component={NewQuestion} />
                  <Route path='/leader' component={Leaderboard} />
                </div>}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}){
  return {
    isAuthed: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
