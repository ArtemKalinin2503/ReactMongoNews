//Actions
export const actionUpdateNews = (updatedNews) => {return {type: "UPDATE_NEWS", payload: updatedNews}};
export const actionAddNews = (addedNews) => {return {type: "ADD_NEWS", payload: addedNews}};
export const actionDeleteNews = (id) => {return {type: "DELETE_NEWS", payload: id}};
export const actionGetNews = () => {return {type: "GET_NEWS"}}

export const actionSetNews = (news) => {return {type: "SET_NEWS", payload: news}};
export const actionSetIsGettingNews = (isGettingNews) => {return {type: "SET_IS_GETTING_NEWS", payload: isGettingNews}};
export const actionSetNewsError = (erorr) => {return {type: "SET_NEWS_ERORR", payload: erorr}};
