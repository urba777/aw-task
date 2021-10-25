import { ADD_URL, REMOVE_URL } from "../constants";

//ADDS URL TO REDUX STATE
export function addUrl(payload) {
    return {
        type: ADD_URL,
        payload
    }
}

//REMOVES LATEST URL FROM REDUX STATE
export function removeUrl() {
    return {
        type: REMOVE_URL
    }
}