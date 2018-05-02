import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Book from './Book'

class BookList extends React.Component {
    static propTypes = {
        listTitle: PropTypes.string.isRequired,
        onMoveBook: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired,
        filterKey: PropTypes.string.isRequired
    }    

    filterList(books, filterKey){
        return books.filter(book => book.shelf.toUpperCase() === filterKey.toUpperCase())
    };

    render() {
        const bookList = this.filterList(this.props.books, this.props.filterKey);

        return  <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.listTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookList.map((bookInstance) => (
                        <Book book={bookInstance}
                              onMoveBook={this.props.onMoveBook}/>
                        ))
                    }
                </ol>
            </div>
        </div>
    
    }
}



export default BookList