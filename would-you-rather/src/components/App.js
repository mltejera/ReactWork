import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Nav from './Nav'
import NewQuestion from './NewQuestion'
// import QuestionPage from './QuestionPage'
import Leaderboard from './Leaderboard'

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
            {this.props.loading === true
              ? null
              : <div>
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
    loading: authedUser === null
  }
}

export default connect()(App);
