import React , { Component } from 'react';

import { connect } from 'react-redux';

 class AddToCartBtn extends Component {

     constructor() {
         super();

         //Wrong way
         this.state = {basket:this.checkLocalStorage()};

     }




    addToCart = () => {
        // console.log(this.props.book);
        let myBasket = {};
        let bookId = this.props.book._id.toString();//JSON.stringify();
        let newBookItem;

        myBasket[bookId] = this.props.book;

        if(localStorage.getItem("__basket")==null) {

            localStorage.setItem("__basket" , JSON.stringify(myBasket));
            //create
        }else {
            // append if parse error create one
            try {

                let oldBasket = JSON.parse(localStorage.getItem("__basket"));

                myBasket={...myBasket , ...oldBasket}
                localStorage.setItem("__basket" , JSON.stringify(myBasket));

                console.log(oldBasket)
            }catch(e) {
                localStorage.setItem("__basket" , JSON.stringify(myBasket));
            }


        }

        this.setState({basket:myBasket})


    }
    checkLocalStorage = () => {

        try {

            let checkItem = JSON.parse(localStorage.getItem("__basket"));

            if(!checkItem)
                return null;
            else
                return checkItem;





        }catch(e) {
            return null;
        }
    }
    inCart = () => {

        // let checkItem = JSON.parse(localStorage.getItem("__basket"));
            if(this.checkLocalStorage()) {
                if(this.state.basket[this.props.book._id])
                    return true
                else
                    return false
            }



    }

    removeFromCart =() => {
        let checkItem ={};
        try {
            checkItem = JSON.parse(localStorage.getItem("__basket"));
            delete checkItem[this.props.book._id];
            localStorage.setItem("__basket" , JSON.stringify(checkItem));
            this.setState({basket:checkItem})
        }catch(e) {
            alert('2')
            this.setState({basket:checkItem});
            localStorage.setItem("__basket" , JSON.stringify(checkItem));
        }

    }

    render() {

        const add = (<button type="button" className="btn btn-primary" onClick={this.addToCart}>Add to cart</button>)
        const remove =(<button href="#" className="btn btn-danger" onClick={this.removeFromCart}>Remove from cart</button>)
        return (


           <div>
               { this.inCart() ? remove : add }
           </div>

        )
    }
}


function mapStateToProps(state) {

    return {
        books:state.books
    }

}

export default connect(mapStateToProps )(AddToCartBtn);