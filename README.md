# **Films Library**

Web application for storing movie information

## **Technologies**

_Backend_

* Node.js
* Express
* MongoDB
* Swagger (Documentation API)

_Frontend_

* React
* Redux
* Material UI

## **Install**

You don`t need a local database, since it is located in the [MongoDB Atlas Сloud](https://cloud.mongodb.com), the server will automatically connect to the database at startup.

To start server and client, you need to install dependencies via npm or yarn, for this you need to install the [_Node.js_](https://nodejs.org/) on your computer.

You need to install packages 3 times, separately for the server, client, as well as a package in the root directory to simultaneously start server and client.

In root directory:

```cmd
npm install
or
yarn install
```

For client:

```cmd
cd client
```

```cmd
npm install
or
yarn install
```

For server

```cmd
cd server
```

```cmd
npm install
or
yarn install
```

You need to duplicate _.env.example_ file with name _.env_, and register in it parameters for connecting to database and port for start server.

```env
PORT=paste your port to this (exp.: 8080)

DB_HOST=projectsviewer-i36ga.azure.mongodb.net
DB_NAME=filmslibrary
DB_USERNAME=dbProjectAdmin
DB_PASSWORD=qwerty123456
```

For start, use command in root directory:

```cmd
npm run build
or
yarn build
```

## **Bug tracker**

Have a bug or a feature request? [Please open a new issue.](https://github.com/taruuuch/films-library/issues/new)

## **License**

[MIT](https://opensource.org/licenses/MIT)
