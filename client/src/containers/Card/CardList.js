import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchAllBook } from 'redux/actions/bookAction'
import { getAllItemFromBasket} from 'redux/actions/basketAction'

import Card from 'components/Card/Card'

 class CardList extends React.Component {

    componentDidMount() {
        this.props.fetchAllBook();
        // this.props.getAllItemFromBasket();
    }

    render() {
        const {books} = this.props;
        const emptyMessage = ( <div className="d-flex flex-wrap m-auto" style={{width:"1200px"}}><p>There are no books yet .</p></div> );
        const booksList = (
            <div className="d-flex flex-wrap m-auto" style={{width:"1200px"}}>
                 {books.map((book,key)=> <Card key={key} book={book} inBasket={this.props.basket} /> )}
            </div>
        );

        return (
            <div id="CardListContainer">
                {books.length === 0 ? emptyMessage : booksList}
            </div>
        )

    }

}

function mapStateToProps(state) {

    return {
        books:state.books,
        basket:state.basket,
    }

}

export default connect(mapStateToProps ,{ fetchAllBook , getAllItemFromBasket})(CardList)