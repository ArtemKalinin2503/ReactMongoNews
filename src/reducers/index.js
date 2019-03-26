import { combineReducers } from 'redux';

export const initState = {
  news: [
    {
        description: 'новость'
    }
  ],
  isGettingNews: false,
  error: ""
};

const mainReducer = (state = initState, action) => {

    //С помощью конструкции switch case опишем каждый action
    switch(action.type) {
        //Action который добавляет новость
        case "Action_Add_News":
            let arrNews= [...state.news]
            arrNews.push({description: 'новая новость'});
        return {
            ...state,
            news: arrNews
        };  
        //Action для изменения новости (принимает два аргумента action.index - это  id новости и action.payload - это value из input)
        case "Action_Uptade_News":
            let arrEditNews = [...state.news];
            arrEditNews[action.index].description = action.payload;
            return {
                ...state,
               news: arrEditNews
            };  
        //Action для удаления новости (принимает один аргумент action.index - это id новости)    
        case "Action_Delete_News":
            let arrDeleteNews = [...state.news];
            arrDeleteNews.splice(action.index, 1);
            return {
                ...state,
               news: arrDeleteNews
            };
        //Action который будет получать данные из БД (с помощью saga getNewsWorker)   
        case "SET_NEWS":
            return {
                ...state,
                news: action.payload
            };
        //Action 'флаг' который оповещает что начался сетевой запрос (пригодиться для Loader) 
        case "SET_IS_GETTING_NEWS":
            return {
                ...state,
                isGettingNews: action.payload
            };
        //Action для получения ошибок 
        case "SET_NEWS_ERORR":
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;       
    }
};

export const todoApp = combineReducers ({
    mainReducer: mainReducer
});

export default todoApp;