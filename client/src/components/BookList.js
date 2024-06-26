import React from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../queries/queries';

//components
import BookDetails from './BookDetails';

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }

    displayBooks() {
        var data = this.props.data;
        if (data.loading) {
            return (<div>Loading books...</div>);
        } else {
            return data.books.map(book => {
                return (
                    <li key={book.id} onClick={ (e)=> {this.setState({ selected: book.id }) } }>{book.name}</li>
                );
            });
        }
    }

    render() {
        // console.log(this.props); // Logging props in the render method
        return (
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
                <BookDetails bookId={this.state.selected} />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);