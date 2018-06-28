import {createStore, combineReducers} from 'redux';
import AssignmentOne from '../reducers/AssignmentOne';
import AssignmentTwo from '../reducers/AssignmentTwo';
import AssignmentThree from '../reducers/AssignmentThree';

const reducers = combineReducers({
    AssignmentOne,
    AssignmentTwo,
    AssignmentThree
})
const store = createStore(reducers);

export default store;