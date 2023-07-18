// declare http lib
const http = require("http")
// declare server properties
const host = "127.69.69.69";    
const port = process.env.PORT ||3000;
// declare server
const server = http.createServer((request, response) => {
  response.write("<h1>Haloo</h1>")
  response.write(
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/_FuuYSM7yOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  );
  response.end()
});

// start server, let server listen to the port
server.listen(port,() => {
    console.log("Server is running at: http://" + host + ":" + port)
})
