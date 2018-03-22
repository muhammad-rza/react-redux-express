export function  setBasket(basket) {
    return  {

        type:'SET_BASKET',
        basket,

    }
}


export function getAllItemFromBasket() {

    let basket ={};
    try {

        basket = JSON.parse(localStorage.getItem("__basket"));

    }catch(e) {

        basket ={};
    }

    return dispatch => {

        dispatch(setBasket(basket))

    }

}

export function addItemToBasket(props) {

    let myBasket = {};
    let bookId = props.book._id.toString();//JSON.stringify();
    let newBookItem;

    myBasket[bookId] = props.book;

    if(localStorage.getItem("__basket")==null) {

        localStorage.setItem("__basket" , JSON.stringify(myBasket));
        //create
    }else {
        // append if parse error create one
        try {

            let oldBasket = JSON.parse(localStorage.getItem("__basket"));

            myBasket={...myBasket , ...oldBasket}
            localStorage.setItem("__basket" , JSON.stringify(myBasket));



            // console.log(oldBasket)
        }catch(e) {
            localStorage.setItem("__basket" , JSON.stringify(myBasket));
        }


    }

    return dispatch => {

        dispatch(setBasket(myBasket))

    }


}

export function removeItemFromBasket(props) {

    let myBasket ={};
    try {
        myBasket = JSON.parse(localStorage.getItem("__basket"));
        delete myBasket[props.book._id];
        localStorage.setItem("__basket" , JSON.stringify(myBasket));
    }catch(e) {
        alert('Cannot add to basket ')
        localStorage.setItem("__basket" , JSON.stringify(myBasket));

    }

    return dispatch => {

        dispatch(setBasket(myBasket))

    }

}