import { takeLatest, select, call, put, fork } from 'redux-saga/effects';
import {actionSetNews, actionSetIsGettingNews, actionSetNewsError, actionGetNews} from "./action";
import axios from "axios";

//Здесь описываем какие action будут вызываться и при их вызове сработает определенная saga 
export default function* rootWatcher(){
    yield takeLatest("GET_NEWS", getNewsWorker); //Передан action actionGetNews
    yield takeLatest("ADD_NEWS", addNewsWorker); //Передан action actionAddNews
    yield takeLatest("DELETE_NEWS", deleteNewsWorker); //Передан action actionDeleteNews
    yield takeLatest("UPDATE_NEWS", updateNewsWorker); //Передан action actionUpdateNews
}

//Данная saga сработает при вызове action 'actionGetNews' которая вызовит в свою очередь другие action и отправит сетевой запрос get к БД
//Метод put из saga - это команда для вызова action (тоже самое что и store.dispatch)
function* getNewsWorker(){
    yield put(actionSetIsGettingNews(true)); 
    const response = yield call(axios.get, "http://localhost:3012/news");
    if (response.status === 200) {
        yield put(actionSetNews(response.data)); //Положим полученные данные в state news 
        yield put(actionSetIsGettingNews(false));
    } else {
        yield put(actionSetNewsError("Error!"));
    }
}

//Данная saga сработает при вызове action actionAddNews и отправит сетевой запрос post к БД
//С помощью метода put вызовим action actionGetNews (который получает данные из БД по средствам вызова saga getNewsWorker)
function* addNewsWorker(action){
    const response = yield call(axios.post, "http://localhost:3012/news", action.payload);
    if (response.status >= 200 && response.status < 300) {
        yield put(actionGetNews());
    }
}

//Данная saga сработает при вызове action actionDeleteNews и отправит сетевой запрос delete к БД
//С помощью метода put вызовим action actionGetNews (который получает данные из БД по средствам вызова saga getNewsWorker)
function* deleteNewsWorker(action){
    const response = yield call(axios.delete, `http://localhost:3012/news/${action.payload}`);
    if (response.status >= 200 && response.status < 300) {
        yield put(actionGetNews());
    }
} 

//Данная saga сработает при вызове action actionUpdateNews и отправит сетевой запрос put к БД 
//С помощью метода put вызовим action actionGetNews (который получает данные из БД по средствам вызова saga getNewsWorker)
function* updateNewsWorker(action){
    const response = yield call(axios.put, `http://localhost:3012/news/${action.payload._id}`, action.payload);
    if (response.status >= 200 && response.status < 300) {
        yield put(actionGetNews());
    }
}