const defaultState = [{type: "Temp", value: 15, metric: "Celcius" }, {type: "Next Feed", value: 5, metric: "Days" }, {type: "Water", value: 140, metric: "Liters" }];

export default function deviceDataReducer(state = defaultState, action) {
    switch (action.type) {
        case 'DEVICE_DATA': {
            return state
        }
        default:
            return state;
    }
}