const http = require("http");

const server = http.createServer((req, res) => {

    console.log(req.url,req.method);
    
  if (req.url === "/") {
    res.write('<html><head><title>Form</title></head>');
    res.write(
        '<body><form method="POST" action="/process"><input name="message" /></form></body>'
    );
  } 
  else if (req.url === "/process" && req.method==='POST') {

    const body=[];

   req.on('data',(chunk)=>
   {
       body.push(chunk);
      
   });
   req.on('end',()=>
   {
       console.log('streams finished');

       const parseBody = Buffer.concat(body).toString();

       console.log(parseBody);

       

   })
   res.write("Thank Your For Sumbiting")
  } else {

    res.write('Not Found')
  }

  res.end();
});

server.listen(3000);

console.log("listening on port 3000");
