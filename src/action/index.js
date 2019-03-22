//Actions
export const actionUpdateNews = (index, isUpdatingNews) => {return {type: "Action_Uptade_News", index: index, payload: isUpdatingNews}};
export const actionAddNews = (isAddNews) => {return {type: "Action_Add_News", payload: isAddNews}};
export const actionDeleteNews = (index, isDeleteNews) => {return {type: "Action_Delete_News", index: index, payload: isDeleteNews}};
//Actions для сетевого запроса
export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const fetchNewsRequest = () => ({
    type: FETCH_NEWS_REQUEST
});

export const fetchNewsSuccess = payload => ({
    type: FETCH_NEWS_SUCCESS,
    payload
});

export const fetchNewsFailure = () => ({
    type: FETCH_NEWS_FAILURE
});
