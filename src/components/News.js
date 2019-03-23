import React, { Component } from 'react';
import { connect } from 'react-redux'; //connect нужен для связи компонента со store
import {actionUpdateNews, actionDeleteNews, actionGetNews} from '../action';
import { store } from '../store';
class News extends Component {

    constructor(props) {
        super(props)
        this.state={
            edit: false //Состояние для отслеживания (редактируем ли мы запись или нет)
        }
    };

    componentDidMount(){
        this.props.getNews();
    }
    //Кнопка Редактировать
    handleEditNews = () => {
        this.setState({
            edit: !this.state.edit //Вернем противоположное значение состояния edit (если true тогда изменим классы для элементов в новости)
        });
    };

    //Кнопка Сохранить
    handleSaveNews = () => {
        let inputEditNews = this.refs.newEditNews.value; 
        let index = this.props.index;
        this.setState({
            edit: !this.state.edit
        });     
        store.dispatch(actionUpdateNews({
            _id: this.props.item._id,
            description: inputEditNews
        }));
    };

    //Кнопка Удалить
    handleDeleteNews= () => {
        let index = this.props.item;
        store.dispatch(actionDeleteNews(index._id));
    };

    render() {
        return (
            <div className="wrapper-news">
                  <p className="news-text">{this.props.description}</p>
                  <button onClick={this.handleEditNews} className={this.state.edit ? 'btn-news-edit edit-active': 'btn-edit btn-news-edit'}>Редактировать</button>
                  <button onClick={this.handleDeleteNews}  className={this.state.edit ? 'btn-news-delete edit-active': 'btn-news btn-news-delete'}>Удалить</button>
                  <textarea ref="newEditNews" className={this.state.edit ? 'active-edit-news input-edit-news': 'no-active-edit-news input-edit-news'} placeholder="Изменить новость"></textarea>
                  <button onClick={this.handleSaveNews} className={this.state.edit ? 'active-edit-news btn-save': 'no-active-edit-news btn-save'}>Сохранить</button>
            </div>
        )
    }
};

const mapStateToProps= (state,ownProps={})=>({
    news: state.mainReducer.news,
});
const mapDispatchToProps = {
    getNews: actionGetNews
}

const NewsComponent = connect(
    mapStateToProps, mapDispatchToProps
)(News)

export default NewsComponent;