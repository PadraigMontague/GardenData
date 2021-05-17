import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import LoginReducer from './loginReducer';
import ReminderReducer from './reminderReducer';
import DeviceReducer from './deviceReducer';
import PlantReducer from './plantReducer';
import DeviceDataReducer from './deviceDataReducer';

const allReducers = combineReducers({
    users: UserReducer,
    login: LoginReducer,
    reminders: ReminderReducer,
    device: DeviceReducer,
    plant: PlantReducer,
    deviceData: DeviceDataReducer
});

export default allReducers;