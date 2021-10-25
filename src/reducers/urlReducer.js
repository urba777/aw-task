import { ADD_URL, REMOVE_URL } from "../constants";

//default first state is home page
const initState = { urls: [{ url: '/', timestamp: Date.now() }] };



const urlReducer = (state = initState, action) => {

    //after user click on any url, this one push it to initState
    if (action.type === ADD_URL) {

        return {
            urls: state.urls.concat(action.payload)
        }
    }

    //after user click on back button, last element got deleted in initState
    if (action.type === REMOVE_URL) {
        return {
            urls: state.urls.slice(0, -1)
        }
    }

    return state;

}

export default urlReducer;