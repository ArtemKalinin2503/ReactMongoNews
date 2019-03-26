Простое приложение которое добавляет/выводит/изменяет/удаляет данные из БД

Технологии:

 - React/Redux/Saga/Axios/MongoDB/ExpressServer/Mongoose

Так как  в данном приложение используеться сервер запуск осуществляеться так:

- Открываем три окна Терминала (запуск React App - запуск mongoDB - запуск express server)

- mongod (для старта базы данных)

- Выполнить команду sudo lsof -i tcp:27017 (покажет есть ли процесс занятый mongo)

- выполнить команду kill -9 395 (где 395 это номер процесса) - если база данных не запускаеться

- перейти в папку express - npm install

- в папке express после установки зависимостей выполнить старт сервера командой node server.js

- npm install (в папке с проектом ReactNewsMongoNews)

- npm start (в папке с проектом ReactNewsMongoNews)

- Обратить внимание: запуск сервера должен быть только после запуска mongoDB (процесс mongod должен висеть в выполняемых)

- Ссылка в помощь если проблемы с Mongo - https://github.com/ArtemKalinin2503/ExpressMongoDB

В данном приложение используется связка технологий:

- React/Redux/Saga/MongoDB/Express(node server)/Mongoose(для конекта с MongoDB)

- Работа С БД на начальном этапе с помощью программы Postman (ссылка в помощь: https://github.com/ArtemKalinin2503/ExpressMongoDB) 

Подробнее:

- Данные приходят из MongoDB используя Redux-Saga и Axios 

- Saga работает следующем образом:
  - Saga вызвается когда происходит вызов (store.dispatch) action как только вызвался необходимый action, saga вызвается и происходит сетевой запрос к БД (какая saga вызовиться при вызове action - описывается в rootWatcher)
  - В saga описан сетевой запрос с помощью axios
  - В saga возможен вызов сразу нескольких action (вызов action в saga осуществляется с помощью команды yeld put)
