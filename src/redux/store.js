import { createStore } from 'redux';
import chordsReducer from './reducer';

const store = createStore(chordsReducer);

export {store};