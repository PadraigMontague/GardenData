export const LoginAction = (data) => {
    console.log('Action Called');
    return {
        type: 'USER_LOGIN',
        payload: data,
    }
};
