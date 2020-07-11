const http = require('http');
http.createServer((req , res) =>{
    res.write('i hope one day you going to run ');
    res.end();
}).listen(5000,() => console.log ('Server running when it is your turn '));