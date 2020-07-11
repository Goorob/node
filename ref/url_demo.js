const url = require('url');
const myUrl = new URL('http://run.com/hello.html?id=9');
console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.host) ; //host and i will get the port if there's one 
console.log(myUrl.hostname); //will not get port 
console.log(myUrl.pathname);
console.log(myUrl.search); // query 
console.log(myUrl.searchParams); // params object 
myUrl.searchParams.append('run' , '>>>');
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value, name)=> console.log(`${name} : ${value}`));

