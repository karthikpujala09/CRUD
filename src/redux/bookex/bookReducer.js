import { BUY_BOOK } from "./bookType";

const initialState = {
    numberOfBooks : 50
}

const bookReducer = (state = initialState, action) => {
    switch (action.type){
        case BUY_BOOK:
            return {
                numberOfBooks : state.numberOfBooks - 5
        }
        

        default: return state;
        
    }
}
export default bookReducer;