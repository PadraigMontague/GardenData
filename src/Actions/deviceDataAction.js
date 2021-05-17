export const DeviceDataAction = (data) => {
    console.log('Action Called');
    return {
        type: 'DEVICE_DATA',
        payload: 'get device data',
    }
};
