import { takeLatest, select, call, put, fork } from 'redux-saga/effects';
import {actionSetNews, actionSetIsGettingNews, actionSetNewsError, actionGetNews} from "./action";
import axios from "axios";

export default function* rootWatcher(){
    yield takeLatest("GET_NEWS", getNewsWorker);
    yield takeLatest("ADD_NEWS", addNewsWorker);
    yield takeLatest("DELETE_NEWS", deleteNewsWorker);
    yield takeLatest("UPDATE_NEWS", updateNewsWorker);
}

function* getNewsWorker(){
    yield put(actionSetIsGettingNews(true));
    const response = yield call(axios.get, "http://localhost:3012/news");
    if (response.status === 200) {
        yield put(actionSetNews(response.data));
        yield put(actionSetIsGettingNews(false));
    } else {
        yield put(actionSetNewsError("Error!"));
    }
}

function* addNewsWorker(action){
    const response = yield call(axios.post, "http://localhost:3012/news", action.payload);
    if (response.status >= 200 && response.status < 300) {
        yield put(actionGetNews());
    }
}

function* deleteNewsWorker(action){
    const response = yield call(axios.delete, `http://localhost:3012/news/${action.payload}`);
    if (response.status >= 200 && response.status < 300) {
        yield put(actionGetNews());
    }
} 

function* updateNewsWorker(action){
    const response = yield call(axios.put, `http://localhost:3012/news/${action.payload._id}`, action.payload);
    if (response.status >= 200 && response.status < 300) {
        yield put(actionGetNews());
    }
}