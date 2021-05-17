const defaultState = [];

export default function deviceReducer(state = defaultState, action) {
    switch (action.type) {
        case 'CONNECTED_DEVICES': {
            return state
        }
        default:
            return state;
    }
}