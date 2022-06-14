import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import {signInReducer} from '../reducers/ReducerSign'
import rootReducer from '.';

const enhancer = compose(
    applyMiddleware(
        thunk,
        createLogger({
          //  predicate: () => _DEV_,
        }),
    ),
);

const persistConfig = {
    key: 'root',
    timeout: 0,
    storage: AsyncStorage,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);