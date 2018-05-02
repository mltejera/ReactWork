import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './Components/BookList'
import BookSearch from './Components/BookSearch'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    bookList: [],



    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
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
        {this.state.showSearchPage ? (
          <BookSearch />
        ) : (
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
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
