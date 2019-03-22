import {createStore, applyMiddleware, compose} from 'redux'; //Встроеные методы для работы со store
import rootReducer from './reducers';
import {initState} from "./reducers"; //Передадим состояния 
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas.js'

const sagaMiddleware = createSagaMiddleware();

//Создадим store
export const store = createStore (
        rootReducer,
        initState,
        compose (
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );

    sagaMiddleware.run(rootSaga);

export default store;