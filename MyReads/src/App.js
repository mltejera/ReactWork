import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './Components/BookList'
import BookSearch from './Components/BookSearch'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    bookList: []
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((bookList) => {
        this.setState (() => ({
          bookList
        }))
      })
  }

  moveBook = (book, destinationShelf) => {
        BooksAPI.update(book, destinationShelf)
          .then((bookList) => {
            this.setState (() => ({
              bookList
            }))
          })
    }



  render() {
    return (
      <div className="app">
      <Route path='/search' component={BookSearch}/>
      <Route exact path='/' render={() => (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">              
                  <BookList listTitle='Currently Reading' 
                            books={this.state.bookList}
                            filterKey='currentlyReading'
                            onMoveBook={this.moveBook} />
              </div>
              <div className="bookshelf">
                <BookList listTitle='Want to read'
                          books={this.state.bookList}
                          filterKey='wantToRead'
                          onMoveBook={this.moveBook}/>
              </div>
              <div className="bookshelf">
                <BookList listTitle='Read'
                          filterKey='read'
                          books={this.state.bookList}
                          onMoveBook={this.moveBook} />
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'/>
          </div>
        </div>
      )}/>
      </div>
    )
  }
}

export default BooksApp
