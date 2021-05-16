const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Programmer");
  } 
  else if (req.url === "/about") {
      
    res.write('About')
  } else {

    res.write('Not Found')
  }

  res.end();
});

server.listen(3000);

console.log("listening on port 3000");
