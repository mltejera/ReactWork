import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'

class App extends Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }


  render() {
    return (
      <div className="App">
      {this.props.oading === true
        ? null
        :
          <Dashboard />
      }
      </div> 
    );
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect()(App);
