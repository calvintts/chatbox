import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'

const MessagesReducer = (state=[],action) => {
    switch(action.type){
        case "FETCH_MESSAGES":
            return action.payload
        default:
            return state
    }
}

export default combineReducers(
    {
        messages: MessagesReducer,
        form:formReducer
    }
)
