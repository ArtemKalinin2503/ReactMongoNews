import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import './App.css';
import NewsComponent from './components/News';
import { actionAddNews } from './action';
import store from "./store";

//Основной компонент 
class App extends Component {

  //Функция которая будет добавлять Новость
  addNews = () => {
    store.dispatch(actionAddNews())
  };

  render() {

  	const listNews = this.props.news.map((item, index) => { 
			return <NewsComponent
                item={item}
				        key={item.index} 
                index={index}
				        item-id={item._id} 
                description={item.description}   
             />;
		});

		return <div className="wrapper-component-app">
              <div className="wrapper-component-news">
                  <button className="btn-add-news" onClick={this.addNews}>Добавить новость</button>
                  {listNews} {/*вывод данных*/}
              </div>    

           </div>       
	}
};

const mapStateToProps= (state,ownProps={})=>({
  news: state.mainReducer.news,
});

const MainApp = connect(
  mapStateToProps
)(App)

ReactDOM.render(
  <Provider store={store}>
      <MainApp />
  </Provider>,
  document.getElementById('root')
);

