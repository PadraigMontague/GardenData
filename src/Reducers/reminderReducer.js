const defaultState = ['Sow 2nd batch of loose leaf lettuce', 'Sow 1st batch of carrots', 'Water tomatoes', 'Harvest 1st earily potatoes', 'Feed tomatoes with liquid seaweed'];

export default function reminderReducer(state = defaultState, action) {
    switch (action.type) {
        case 'GET_REMINDERS': {
            return state
        }
        default:
            return state;
    }
}