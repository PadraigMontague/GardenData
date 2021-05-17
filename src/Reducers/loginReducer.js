export default function (state = null, action) {
    switch (action.type) {
        case "USER_LOGIN":
            let user_data = action.payload;
            console.log({ ...state, user_data });
            return { ...state, user_data };
            break;
        default:
            console.log('This is the default');
    }
    return state;
}
