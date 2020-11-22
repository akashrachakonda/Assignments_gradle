import { create } from 'json-server';
import {createStore} from 'redux';
import reducer from '../reducers/reducer';

const store=createStore(reducer);

export default store;

