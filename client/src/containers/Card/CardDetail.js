import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CardDetailImg from 'components/Card/CardDetailImg';
import CardDetailInfo from 'components/Card/CardDetailInfo';

import  { fetchBookById } from 'redux/actions/bookAction';

class CardDetail extends React.Component {

    componentDidMount() {
        const {match} = this.props.parentProps;

        if(!this.props.books === true) {
            this.props.fetchBookById(match.params._id);
        }

    }

    render() {

        const emptyMessage = (<p>Wait....</p>)
        const books = (
            <div className="d-flex flex-wrap m-auto" style={{width:"1200px"}}>
                <CardDetailImg book={this.props.books} />
                <CardDetailInfo book={this.props.books} inBasket={this.props.basket}/>
            </div>
        )
        return (
            <div id="CardDetailContainer">

                    {this.props.books  ? books : emptyMessage}

            </div>
        )

    }

}

function mapStateToProps(state,props) {
    const {match} = props.parentProps;

    return {
        books:state.books.find((item , index)=> item._id === match.params._id),
        basket:state.basket
    }

}

export default connect(mapStateToProps ,{ fetchBookById })(CardDetail)