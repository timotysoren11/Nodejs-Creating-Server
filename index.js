/**
 * To build a server we need built in package called 'http'
 */

const http = require("http");
const fs = require("fs");
/**
 * whenever there is request comes then the callback function runs 
 */
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New Req Recieved\n`
  fs.appendFile("log.text", log, (err, data) =>{
    
    /**Using switch Case */
    switch(req.url){
      case '/': res.end("Home Page");
      break
      case '/about': res.end("I am Timoty Soren");
      break
      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(8080, () => console.log("Server Started"));
