import React from  'react';

class InBasket extends React.Component {


    render() {

        const itemCount = Object.keys(this.props.basket) ? Object.keys(this.props.basket).length : 0

        return (

            <div>
                <button className="btn btn-secondar" type="button" id="cartButton"  data-toggle="modal" data-target="#cartModalCenter">
                    Basket({itemCount})
                </button>


            </div>

        )

    }

};

export default InBasket;// connect(null ,{ getAllItemFromBasket })(InBasket);