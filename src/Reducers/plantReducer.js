const defaultState = [];

export default function plantReducer(state = defaultState, action) {
    switch (action.type) {
        case 'PLANT_SOWING': {
            return state
        }
        case 'PLANT_PLANTING': {
            return state
        }
        case 'PLANT_HARVESTING': {
            return state
        }
        default:
            return state;
    }
}