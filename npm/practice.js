const term = require('terminal-kit').terminal;
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/users', (resp)=>{

  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(data);
  });
  
}).on("error", (err) => {
    console.log("Error: " + err.message);
});


const prettyLog = function(){
	term.color(Math.round(Math.random()*2), this);
}

https.get('https://jsonplaceholder.typicode.com/users', res => {res.on('data', d=>{
	prettyLog.call(d)
});
});