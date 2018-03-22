import React from  'react';
import { connect } from 'react-redux';
import {addItemToBasket ,removeItemFromBasket } from 'redux/actions/basketAction';


class AddToBasket extends React.Component {
    /**
     * @param {object} book
     * @param {object} inBasket
     */

    addToCart = ()=> { this.props.addItemToBasket(this.props) }
    removeFromCart = ()=> { this.props.removeItemFromBasket(this.props) }
    _inBasket = () => {
        if(this.props.inBasket && this.props.inBasket[this.props.book._id])
            return true
        else
            return false;

    }
    render() {

        const {book , inBasket} = this.props;

        const add = (<button type="button" className="btn btn-primary" onClick={this.addToCart}>Add to cart</button>)
        const remove =(<button href="#" className="btn btn-danger" onClick={this.removeFromCart}>Remove from cart</button>)

        return (

            <div>
                {this._inBasket() ? remove : add}



            </div>



        )

    }

};




export default connect(null ,{ addItemToBasket , removeItemFromBasket })(AddToBasket)