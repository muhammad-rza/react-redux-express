import React from 'react';


export default class BasketModal extends React.Component {

    render() {

        const { basket } = this.props;
        const emptyBasket =(<p>Basket is empty</p>)
        const basketItems =(

            <ul className="list-group">

                {Object.values(basket).map((item,index)=> <li key={index} className="list-group-item d-flex justify-content-between">
                    <p>{item.title}</p> <p>Price: {item.price} AZN</p>
                </li>)}

            </ul>

        )

        return (

            <div className="modal fade" id="cartModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title d-flex justify-content-between" id="exampleModalLongTitle">
                                <p>Basket</p>
                                <p>Total Price: {Object.values(basket).reduce((acc,curr)=>acc+=curr.price,0).toFixed(2)} AZN</p>
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {Object.keys(basket).length > 0 ? basketItems : emptyBasket }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}