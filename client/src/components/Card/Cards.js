import React, { Component } from 'react';

import { connect } from 'react-redux';

import CardsList from './CardsList';

import { fetchBooks } from '../../actions/books';

class Card extends Component {

    componentDidMount() {
	    this.props.fetchBooks();
    }

    render() {

        return (
            <div className="p-5">
                <div>

		            <CardsList books={this.props.books} />

                </div>

            </div>
        )

    }

}

function mapStateToProps(state) {

    return {
        books:state.books
    }

}

export default connect(mapStateToProps ,{fetchBooks} )(Card);