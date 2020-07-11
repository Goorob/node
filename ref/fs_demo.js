const fs = require('fs');
const path = require('path');


//  folder : 
// fs.mkdir(path.join(__dirname , '/test'),{} , err =>{
//     if(err) throw err ;
//     console.log('folder created ...');
// });
//   file and write on it :
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'you should runnnnn !',
// err =>{
//     if (err) throw err ;
//     console.log('done ...');
// }

// );
// // to add things on file
// fs.appendFile ( path.join(__dirname , '/test','hello.txt'),
// 'Great stay here  :)',
// err =>{
//     if(err) throw err ;
//     console.log('done ..');
// }


// );
// //  read file 
// fs.readFile(path.join(__dirname , '/test' , 'hello.txt'),'utf8',(err , data)=>{
//     if (err) throw err ;
//     console.log(data);
// });
// rename 
fs.rename(
    path.join(__dirname , '/test' , 'hello.txt'), 
    path.join(__dirname,'/test', 'run.txt'),
    err=>{
        if(err) throw err ;
        console.log('renamed .. ');
    }
);