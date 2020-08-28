const fs = require('fs');
const http = require('http');
const url = require('url');

// read the file 
// blocking, synchronous way
//const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
//console.log(textInput);

//const textOut = `This is what we know about avocado: ${textInput}. Created date ${Date.now()}`;
// generate a writable file in the dir
//fs.writeFileSync('./txt/output.txt', textOut);
//console.log('File has written');

// // non-blocking, asynchronous
// fs.readFile('./txt/stsart.txt', 'utf-8', (err, data1) => {
//     if(err) return console.error('file not found');

//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`, 'utf-8', (err) => {
//                 console.log('your file has been written!')
//             })
//         })
//     })

// })
 
// console.log('will read file!');

//console.log(http)

// create a server
const server = http.createServer((req, res) => {
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview') {
        res.end('this is the overview page')
    } else if (pathName === '/product') {
        res.end('this is the product page')
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            
        });
        res.end('<h1>this page is not found</h1>')
    }
})

server.listen(4000, () => console.log(`server listen to port:4000`))


