# **Films Library**

Веб-приложение для хранения информации о фильмах

## **Функционал**

- [x] Добавить фильм
- [x] Удалить фильм
- [x] Показать информацию о фильме
    * Уникальный идентификатор
    * Название фильма
    * Год выпуска
    * Формат (VHS, DVD, Blu-Ray)
    * Список актеров (“Имя и фамилия актера”)
- [x] Показать список фильмов отсортированных по названию в алфавитном порядке (Список выводиться отсортированным)
- [x] Найти фильм по названию. (Ищет фильмы по названи которые включают в себя введенное слово)
- [x] Найти фильм по имени актера.
- [x] Импорт фильмов с текстового файла (пример файла прилагается “sample_movies.txt”).
- [x] Файл должен загружаться через веб-интерфейс.

## **Технологии**

*Backend*

* API
  * Node.js
  * Express
  * Security:
    * rate-limit
    * cors
    * helmet
  * Mongoose
  * Morgan (logger)
* Database
  * MongoDB

*Frontend*

* React
* Redux
* Redux-thunk
* React Router
* [Semantic UI](https://react.semantic-ui.com/)

## **Архитектура**

![Архитектура](https://i.ibb.co/HGzmktD/image.png)

*Сервер:*

* **config** - хранять конфиги: дефолтный и для базы данных
* **routes** - роутинг api
  * [*GET*] /api/v1/films - вывод фильмов + поиск через Query Params + пагинация (10 на странице)
  * [*POST*] /api/v1/films - добавление фильма с формы
  * [*POST*] /api/v1/films/import - импорт фильмов с файла
  * [*GET*] /api/v1/films/:filmId - информация про фильм по ID
  * [*PATCH*] /api/v1/films/:filmId - обновления информации про фильм по ID (не реализовано на клиенте, но работает на API). PATCH что бы можна было обновить только требующую для обновления информацию, а не весь объект, так как PUT обновляет весь объект.
  * [*DELETE*] /api/v1/films/:filmId - удаление фильма по ID
* **controllers** - логика (из роутов вызываеться методы контроллера)
* **models** - модели для MongoDB
* **middlewares** - промежуточные обработчики
  * Валидаторы
  * Настройки multer для получения файла с клиета
* **utils** - воспомагательные компоненты
  * database - методы для коннекта к базе
  * parseFile - функция парсина данных с файла
  * routes - устанощик роутов, для того что бы не забывать логику app.js, в нём только вызов setupRoutes(app)

*Клиент:*

* **components** - глупые компоненты, требуються для отображения даных на екране
  * CreateFilm - форма создания фильма
  * FilmDetail - компонент отображения информации про фильм
  * Film - компоненты для списка фильмов
    * List - список
    * Item - вид фильма
    * Pagination - пагинация
  * Search - форма для поиска
  * Loader - лоадер
  * Navbar - навигация
* **config** - конфиги
  * default - стандартный конфиг
* **helpers** - воспомагательные компоненты
  * history - создание истории для роутинга
* **pages** - контейнеры страниц
  * Films - контейнер с логикой для работы со списком фильмамов
  * FilmDetail - контейнер с логикой для работы с информацией про фильм
  * CreateFilm - контейнер с логикой для создания фильма
* **providers**
  * api - создание экземпляра axios с конфигурацией
  * film - екземпляр класса с методами работы с API
* **redux** - состояние приложения (стор)
  * film - настройка стора для фильма, имеет: типы, экшены и редьюсер
  * films - настройка стора для фильмов, имеет: типы, экшены и редьюсер
  * reduces - комбинирует разные редьюсеры в один rootReducer
  * store - создание стора и подключение middleware redux-thunk для работы с асинхронными методами в экшенах
* **style** - стили
* *routes.js* - настройка роутинга приложения
* **App.js** - главный компонент App
* **index.js** - создание app, с подключением роутинга и стора

## **Установка и запуск**

Вам не понадобиться локальная база данных, так как она находится в облаке [MongoDB Atlas Сloud](https://cloud.mongodb.com), сервер автоматически подключится к базе данных при запуске.

Чтобы запустить сервер и клиент, вам необходимо установить зависимости через _npm_ или _yarn_, для этого у вас на компьютере должен быть установлен [_Node.js_](https://nodejs.org/).

Вам необходимо установить пакеты 3 раза, отдельно для сервера, клиента, а также пакет в корневом каталоге, чтобы одновременно запустить сервер и клиент.

В корневом каталоге запустите команду _npm install_ или _yarn install_, и дождитесь установки зависимостей.

Для клиента, перейдите в папку, командой в консоле _cd client_, после этого запустите команду _npm install_ или _yarn install_, и дождитесь установки зависимостей.

Для сервера, перейдите в папку, командой в консоле из корневого каталога _cd server_, после этого запустите команду _npm install_ или _yarn install_, и дождитесь установки зависимостей.

Вам необходимо продублировать файл _.env.example_ с именем _.env_, в каталоге с сервером и проприсать в нем параметры для подключения к базе данных и порт для запуска сервера, что прописывать указано ниже:

```env
PORT=paste your port to this (exp.: 8080)

// Remote MongoDB
DB_HOST=projectsviewer-i36ga.azure.mongodb.net
DB_NAME=filmslibrary
DB_USERNAME=dbProjectAdmin
DB_PASSWORD=qwerty123456
```

Так же вам необходимо продублировать файл _.env.example_ с именем _.env_, в каталоге с клиентом и проприсать в нем параметры для подключения к серверу, что прописывать указано ниже:

```env
REACT_APP_SERVER_HOST=localhost
REACT_APP_SERVER_PORT=порт какой вы указали серверу
```

Для запуска используйте консольную команду в корневом каталоге:

```cmd
npm run start
или
yarn start
```

## **Bug tracker**

Нашли ошибку или нужна новая функция? [Пожалуйста, откройте новуй issue.](https://github.com/taruuuch/films-library/issues/new)

## **Лицензия**

Copyright (c) 2020 [Artemchuk Dmytro](https://github.com/taruuuch)

[The MIT License](https://opensource.org/licenses/MIT)
