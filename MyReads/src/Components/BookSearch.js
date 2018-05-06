import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookList from './BookList'
import PropTypes from 'prop-types';

class BookSearch extends Component {

    static propTypes = {
        onMoveBook: PropTypes.func.isRequired
    }

    state = {
        returnedBooks: []
    }

    handleSearch = (searchTerm) => {
        if (searchTerm.length > 0) {
            BooksAPI.search(searchTerm).then((booksBack) => {
                BooksAPI.getAll().then((myCurrentBooks) => {
                    for (var i = 0; i < booksBack.length; i++) {
                        booksBack[i].shelf = "none"; // default every book to none

                        // assign any book on our shelves the correct shelf
                        for (var j = 0; j < myCurrentBooks.length; j++) {
                            if (booksBack[i].id === myCurrentBooks[j].id) {
                                booksBack[i].shelf = myCurrentBooks[j].shelf;
                            }
                        }
                    }

                    this.setState(() => ({ returnedBooks: booksBack }))
                })
            })
     
        } else {
            this.setState(() => ({ returnedBooks: [] }))
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search"
                        to='/' />
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.handleSearch(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookList books={this.state.returnedBooks}
                        listTitle="Found Books"
                        onMoveBook={this.props.onMoveBook} />
                </div>
            </div>

        )
    }
}

export default BookSearch