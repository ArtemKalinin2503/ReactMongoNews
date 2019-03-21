//Подключим mongoose для работы с MongoDb (npm install mongoose --save)
var mongoose = require('mongoose');
//Подключим express
var express = require('express');  //npm i express (сервер)
var cors = require('cors'); //npm i cors (для кроссдоменных запросов)
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

{/*Работа с Mongoose*/}

//Вызов сервера express
var app = express();
//Используем cors для кроссдоменных запросов
app.use(cors());

//Установим соединение с БД
setUpConnection();

//Преобразуем данные из БД в Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Создадим схему данных
const Schema = mongoose.Schema; 

//Опишем схему данных (это как будет выглядить запись в БД в данном случае тэто только данные в поле description)
const NewsSchema = new Schema({
    description: {type: String}
});

//Создадим модель данных и передадим туда схему
const News = mongoose.model('News', NewsSchema);

//Передадим модель
const NewsModel = mongoose.model('News');

//Создадим подключение к БД (news - имя БД)
function setUpConnection() {
    mongoose.connect('mongodb://localhost/news', {useNewUrlParser:true}, function (err) {
        if (err) throw err;
        console.log ('Successfully connected!!!');
    });
};

{/*--Опишем методы для работы с БД--*/}

//Создадим метод к БД (метод find выведит все данные из БД)
function listNews() {
    return NewsModel.find();
};

//Создадим метод который будет создавать новую заметку (именно в данные состояния description будут приходить данные)
function createNews(data) {
    const news = new News({
        description: data.description
    });
    return news.save();
};

//Создадим метод который будет удалять записи из БД
function deleteNews(id) {
    return NewsModel.findById(id).remove();
};

{/*--Опишем основные запросы к БД--*/}

//Метод post будет создавать записи в БД
app.post('/news', (req, res) => {
    //Вызовим запрос createNews
    createNews(req.body).then(data => res.send(data));  
});

//Метод get будет вывводить данные из БД
app.get('/news', (req, res) => {
    //Вызовим запрос listNews
    listNews().then(data => res.send(data));
});

//Метод delete будет удалять данные из БД
app.delete('/news/:id', (req, res) => {
    //Вызовим звпрос deleteeNews
    deleteNews(req.params.id).then(data => res.send(data));
});

//Подключим mongodb где news - это имя БД
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) {
        return console.log(err);
    }
    db = client.db("news");
    //Старт сервера только после запуска базы данных
    app.listen(3012, function() {
        console.log('Api app started')
    });
});

//Команда для запуска mongodb mongod (в отдельной вкладке после запуска сервера)
//Команда для запуска сервера node server.js
//Ссылка на проект http://localhost:3012/news