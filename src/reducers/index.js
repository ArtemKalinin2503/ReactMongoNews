import { combineReducers } from 'redux';

export const initState = {
  news: [
    {
        id: 1,
        description: 'новость 1 из Redux'
    }
  ]
};

const mainReducer = (state = initState, action) => {

    //С помощью конструкции switch case опишем каждый action
    switch(action.type) {
        case "Action_Add_News":
            let arrNews= [...state.news]
            arrNews.push({description: 'новая новость'});
        return {
            ...state,
            news: arrNews
        };  
        case "Action_Uptade_News":
            let arrEditNews = [...state.news];
            arrEditNews[action.index].description = action.payload;
            return {
                ...state,
               news: arrEditNews
            };  
        case "Action_Delete_News":
            let arrDeleteNews = [...state.news];
            arrDeleteNews.splice(action.index, 1);
            return {
                ...state,
               news: arrDeleteNews
            };                   
        default:
            return state;       
    }
};

export const todoApp = combineReducers ({
    mainReducer: mainReducer
});

export default todoApp;