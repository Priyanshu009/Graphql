import React from 'react';
import { graphql } from 'react-apollo';

import { getBookQuery } from '../queries/queries';

class BookDetails extends React.Component {
    displayBookDetails() {
        const { book } = this.props.data;
        if (book) {
            return (
                <div>
                    <p>book name: {book.name}</p>
                    <p>book genre: {book.genre}</p>
                    <p>book Author: {book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {book.author.books.map(item => {
                            return <li key={item.id}>{item.name}</li>
                        })}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>No book selected...</div>
            );
        }
    }

    render() {
        // console.log(this.props); // Logging props in the render method
        return (
            <div id="book-details">
                <h2>book details go here</h2>
                {this.displayBookDetails()}
            </div>
        );
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);