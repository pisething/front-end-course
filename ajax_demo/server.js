const http = require("http");
const fs = require("fs");

const host = 'localhost';
const port = 8000;

const requestListener = function(req, res) {
    res.writeHead(200);
    fs.readFile("index.html",function(error, data){
        if(error){
            res.writeHead(404);
            res.write("Error: file not found");
        }else{
            res.write(data);
        }
        res.end();
    });
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});