import React, { Component } from 'react'
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

  componentDidMount() {
    BooksAPI.getAll()
      .then((bookList) => {
        this.setState(() => ({
          bookList
        }))
      })
  };

  moveBook = (book, destinationShelf) => {
    BooksAPI.update(book, destinationShelf)
      .then((bookList) => {
        let result = 
          this.state.bookList.filter((b) => bookList.currentlyReading.indexOf(b.id) >= 0).concat(
          this.state.bookList.filter((b) => bookList.wantToRead.indexOf(b.id) >= 0).concat(
          this.state.bookList.filter((b) => bookList.read.indexOf(b.id) >= 0)))

          for (let b of this.state.bookList) {
            if (b.id === book.id) {
              b.shelf = destinationShelf
              break
            }
          }

          this.setState({bookList: result})
      }
    )
  };


  render() {

    const currentlyReading = this.state.bookList.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = this.state.bookList.filter(book => book.shelf === 'wantToRead');
    const read = this.state.bookList.filter(book => book.shelf === 'read');

    return (
      <div className="app">
        <Route path='/search' component={() => 
          <BookSearch onMoveBook={this.moveBook}/>
        }/>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <BookList listTitle='Currently Reading'
                    books={currentlyReading}
                    onMoveBook={this.moveBook} />
                </div>
                <div className="bookshelf">
                  <BookList listTitle='Want to read'
                    books={wantToRead}
                    onMoveBook={this.moveBook} />
                </div>
                <div className="bookshelf">
                  <BookList listTitle='Read'
                    books={read}
                    onMoveBook={this.moveBook} />
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' />
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
