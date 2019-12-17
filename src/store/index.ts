import {createStore,compose,applyMiddleware} from 'redux'
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk'
import root from './models/roots'
import permission from './models/permission'
import ads from '../pages/ads/reducer'
import backstate from '../pages/backstate/reducer'
import comments from '../pages/comments/reducer'
import news from '../pages/news/reducer'
import rightsManager from '../pages/rightsManager/reducer'

const reducer = combineReducers({
    root,ads,backstate,comments,news,rightsManager,permission
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store;


