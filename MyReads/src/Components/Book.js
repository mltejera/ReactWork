import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Book extends React.Component {
    static propTypes = {
        onMoveBook: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    }

    handleChange = (event) => {
        if (this.props.onMoveBook) {
            this.props.onMoveBook(this.props.book, event.target.value);
        }
    };

    render() {
        return <li key={this.props.book.id}>
            <div className="book">
                <div className="book-top">
                    {this.props.book.hasOwnProperty('imageLinks') &&
                        <div className="book-cover"
                            style={{
                                width: 128,
                                height: 188,
                                backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})`
                            }}></div>
                    }
                    <div className="book-shelf-changer">
                        <select onChange={this.handleChange} value={this.props.book.shelf}>
                            <option value="none">None</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.author}</div>
            </div>
        </li>

    }
}



export default Book