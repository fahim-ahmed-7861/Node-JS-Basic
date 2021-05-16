const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {

  const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`,'utf8');

   ourReadStream.pipe(res);
});

server.listen(3000);

console.log("listening on port 3000");


/*const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);


  ourReadStream.on('data',(chunk)=>
  {
      ourWriteStream.write(chunk);
  });

  
  ourReadStream.pipe(ourWriteStream)
*/
  