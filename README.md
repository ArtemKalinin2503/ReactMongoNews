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
