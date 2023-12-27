This is middleware written to handle communication to a MongoDB database and the Easy Post API. This application uses Node.js, Express, and Mongoose. 

## Compilation Instructions

This application was written in Spring of 2022 and since then all of the modules I used have since updated or become deprecated. To get this running all dependencies will need to be reinstalled:

```
npm install
```


In my case, this installation resulted in a long list of vulnerabilities, so it may be necessary to run an audit:

```
npm audit fix
```


Run the application with this command.

```
npm start
```

To connect a MongoDB database, the address in line 10 of server.js will need to be updated. I removed my credentials for security reasons. 

This web server is meant to run in tandem with my Comprint Order System, a React front end web application:
https://github.com/diotte-am/WebDevFinalProject

