import React, { Component } from 'react'
import PropTypes from 'prop-types';

class BookList extends React.Component {
    static propTypes = {
        listTitle: PropTypes.object.isRequired,
        onMoveBook: PropTypes.func.isRequired,
        books: PropTypes.object.isRequired,
        filterKey: PropTypes.object.isRequired
    }    


    handleChange(book){

        console.log(book);
    };

    filterList(books, filterKey){
        return books.filter(book => book.shelf.toUpperCase() === filterKey.toUpperCase())
    };

    render() {

        const bookList = this.filterList(this.props.books, this.props.filterKey);

        return <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.listTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookList.map((book) => (
                        <li key={book.id}>
                             <div className="book">
                                 <div className="book-top">
                                     <div   className="book-cover" 
                                            style={{ width: 128, 
                                                     height: 188, 
                                                     backgroundImage: `url(${book.backgroundPictureURL})`}}></div>
                                     <div className="book-shelf-changer">
                                         <select onChange={this.handleChange}>
                                             <option value="none" disabled>Move to...</option>
                                             <option value="currentlyReading">Currently Reading</option>
                                             <option value="wantToRead">Want to Read</option>
                                             <option value="read">Read</option>
                                             <option value="none">None</option>
                                         </select>
                                     </div>
                                 </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.author}</div>
                            </div>
                        </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    
    }
}



export default BookList