import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialData = [];
const reducer = (state = initialData, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD":
            return [...state, payload];
        case "REMOVE":
            return state.filter((val) => {
                return (
                    val.name !== payload.name
                )
            }

            )
        default:
            return state;
    }
}

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;