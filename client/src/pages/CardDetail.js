import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchBook } from '../actions/books';

import CardFullDetail from '../components/Card/CardFullDetail'



 class CardDetail extends Component {

     componentWillMount = () => {
         if (this.props.match.params._id) {

             if(!this.props.books.length > 0) {
                 this.props.fetchBook(this.props.match.params._id);
             }
         }

     }

    render() {

         const errorMessage = (
             <h1>Wait....</h1>
         )

         const bookData = (

                <div><CardFullDetail book={this.props.book} /></div>

         );

        return (
			<div className="CardDetail">

                { (console.log(this.props.books))}
                { this.props.books.length > 0 ?  bookData  : errorMessage }
			</div>
        );
    }
}



function mapStateToProps(state,props) {
    // console.log(state.books);
    // console.log(state.books.find(item => item._id === props.match.params._id))
    // return {book : {}};
    if(props.match.params._id) {
        return {
            book:state.books.find(item => item._id === props.match.params._id),
            books:state.books
        }

    }

}


export default connect(mapStateToProps , {fetchBook})(CardDetail)