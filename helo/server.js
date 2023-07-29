const http = require("http")

const server = http.createServer((req,res) => {
    res.statusCode = 301
    res.statusMessage = "Not Found"
    res.end('Bye');
})

const port = 4000

server.listen(port, () => {
    console.log(`Server is running`);
})