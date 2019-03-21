//Actions
export const actionUpdateNews = (index, isUpdatingNews) => {return {type: "Action_Uptade_News", index: index, payload: isUpdatingNews}};
export const actionAddNews = (isAddNews) => {return {type: "Action_Add_News", payload: isAddNews}};
export const actionDeleteNews = (index, isDeleteNews) => {return {type: "Action_Delete_News", index: index, payload: isDeleteNews}};

