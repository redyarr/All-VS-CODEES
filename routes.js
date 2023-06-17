const fs = require('fs');
const requesthandler= (req,res)=>{
    const url = req.url;
    const method= req.method;
if(url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"> <input name="message" type="text"><button type="submit">send</button></form></body>');
    res.write('</html> ');

return res.end();
}

if(url==='/message' && method==='POST'){
const body=[];
req.on('data',(chunk)=>{
    console.log(chunk);
    body.push(chunk);
});
res.on('end',()=>{

    const parsedBody=Buffer.concat(body).toString();
    const message= parsedBody.split('=')[1];
        fs.writeFileSync('messagee.txt',message, (err)=>{})
res.writeHead(302,'location','/');
return res.end();
});

}
res.writeHead(200,{'Content-Type':'text/html'});
res.write('<html>');
res.write('<head><title>welcome Message</title></head>');
res.write('<body<h1>WELCOME TO THE PAGE</h1></body>');
res.write('</html> ');}


module.exports= requesthandler;

handler: requesthandler;