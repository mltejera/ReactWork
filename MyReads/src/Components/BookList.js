import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Book from './Book'

class BookList extends React.Component {
    static propTypes = {
        listTitle: PropTypes.string.isRequired,
        onMoveBook: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
    }

    render() {
        return  <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.listTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.length > 0 &&
                        this.props.books.map((bookInstance) => (
                        <Book book={bookInstance}
                              key={bookInstance.id}
                              onMoveBook={this.props.onMoveBook}/>
                        ))
                    }
                </ol>
            </div>
        </div>
    }
}

export default BookList