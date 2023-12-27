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


If the <a ref="https://github.com/diotte-am/WebDevFinalProjectServer"> web server</a> isn't running already running at this point, you'll get a network error, but you'll still be able to navigate the website.
