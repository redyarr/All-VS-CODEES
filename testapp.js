const http = require('http');

const server =http.createServer((req,res)=>{
const url =req.url;
if(url==='/'){


    res.write("<title>HELLO</title>");
    
    res.write("<body><h1>HELLO</h1> <input type='text'><br><input type='submit'></body>");
    
    res.write("</body>");
}else if (url==='/users'){

    res.write("<title>userList</title>");
    res.write("<body><ul><li>redyar</li><li>ala</li><li>shexa</li><li>hastyar</li></ul>");
    res.write("</body>");
}




})
const PORT=3000;
server.listen(PORT);



