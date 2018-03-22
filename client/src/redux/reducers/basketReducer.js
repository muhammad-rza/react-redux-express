export default function basket(state={} , action={} ) {


    switch(action.type) {

        case 'GET_BASKET':
            return {
                state
            };

        case 'SET_BASKET':
            return action.basket;

        case 'ADD_TO_BASKET':
            return state;

        case 'REMOVE_FROM_BASKET':
            return state;



        default:
            return state;

    }


}