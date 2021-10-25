import { GET_DATA_FROM_SERVER } from "../constants";

const meteoReducer = (state, action) => {
    switch (action.type) {

        case GET_DATA_FROM_SERVER:

            return {
                weather: action.payload
            };

        default: return state;
    }
}

export default meteoReducer;