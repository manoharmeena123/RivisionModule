                                               INSTRUCTIONS
 ## Instructions:
This assignment is 2 day long assignment, deadline is 8th April 6pm
We will review this on 8th April 8pm
Refer to this questions and type down all answers in readme file and push it to masai-repo

## Refer to questions below
 What is non-blocking vs blocking?
 Overview of Blocking vs Non-Blocking
 What is throughput?
 what is the difference between readFile and readFileSync
 How can you make a network request using http module?
 https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
 How to create a web server without express?
 What is libuv?
 What are the different phases involved in event loop?
 • The Node.js Event Loop, Timers, and process.nextTick()
 • Don't Block the Event Loop (or the Worker Pool)
 What are timers in Node.js?
 • Timers in Node.js
 What is NVM? how do you use it?
 What is common.js? how is it different from es modules?
 How does the crypto module work?
 What are web sockets?
 What are microservices?
 Creating a CLI based app using Node.js and publish it
 How does express work?
 What are routes?
 What are Middlewares?
 What is MVC framework?
 How do you do validations?
 How do you do static routing?
 What are some templating engines?
 How do you manage sessions in express?
 How do you manage cookies with express?
 What are common libraries you work with express?
 What is CORS?
 What is testing?
 What is unit testing?
 What is functional testing?
 What is HTTPS? what is the difference between HTTP and HTTPS?
 What is SSL/TLS?
 What is CORS?
 What is OWASP?
 What is the difference between SQL and NoSQL databases?
 What are some common queries in SQL?
 How do you do joins in SQL?
 How do you use lookup in mongodb?
 What is CAP theorem?
 What is indexing?
 What is DB replication?
 What is PACELC?
 What is Normalization / Denormalization?
 What is Entity Relationship Model? ( ER Model )




 ### Solutions

 ## What is non-blocking vs blocking?
 - Blocking refers to a situation where a program waits for a particular operation to complete before continuing to execute the next line of code. This means that the program is "blocked" and cannot perform any other operations until the current operation is completed. For example, if a program makes a request to a remote server and waits for a response, the program will be blocked until the response is received.

Non-blocking, on the other hand, refers to a situation where a program can continue to execute other operations while waiting for a particular operation to complete. This means that the program is not "blocked" and can perform other tasks in the meantime. For example, if a program makes a non-blocking request to a remote server and continues to execute other code while waiting for the response, the program will not be blocked and can perform other operations.

Non-blocking operations are often preferred over blocking operations in applications where responsiveness is critical. Blocking operations can cause delays and slow down the application's overall performance. In contrast, non-blocking operations allow the application to remain responsive and continue to perform other tasks while waiting for the completion of a particular operation.
  
## What is throughput?  

 throughput refers to the amount of data that can be transmitted from one point to another over a network within a given period of time. It is the measure of the rate at which data can be transmitted over a communication channel or network.

Throughput is often expressed in bits per second (bps) or bytes per second (Bps), and it is an important metric to evaluate the performance of a network. The higher the throughput, the more data can be transmitted within a given time period.

Throughput can be affected by various factors, including the bandwidth of the communication channel, the distance between the sender and receiver, the amount of network traffic, the quality of the network infrastructure, and the protocol used for data transmission.

Throughput is important in many applications, such as video streaming, file transfer, online gaming, and cloud computing. A high throughput network is essential for these applications to function effectively and provide a smooth and seamless user experience.

## what is the difference between readFile and readFileSync?

readFile and readFileSync are both functions in Node.js used for reading files, but they differ in their execution and behavior.

 - `readFile` => readFile is an asynchronous function that reads the contents of a file and returns them via a callback function. It takes three arguments: the path to the file to be read, an optional encoding type (default is utf8), and a callback function that is called when the file has been read or when an error occurs. readFile does not block the execution of the rest of your program while the file is being read, which means that other operations can be performed while the file is being read.

`Exapmle `
        const fs = require('fs');

      fs.readFile('file.txt', 'utf8', function (err, data) {
         if (err) throw err;
           console.log(data);
       });


`readFileSync`, on the other hand, is a synchronous function that reads the contents of a file and returns them as a string or a buffer. It takes two arguments: the path to the file to be read and an optional encoding type (default is utf8). readFileSync blocks the execution of the rest of your program until the file has been read, which means that other operations cannot be performed while the file is being read.     

`Example`   
                 const fs = require('fs');

           try {
                 const data = fs.readFileSync('file.txt', 'utf8');
                 console.log(data);
            } catch (err) {
              console.error(err);
            }

##  How can you make a network request using http module? 

To make a network request using the http module in Node.js, you can use the http.request() method. This method creates a new HTTP request object, sends it to the specified URL, and then returns a http.ClientRequest object that you can use to interact with the request.

 `Example` const http = require('http');

const options = {
  hostname: 'www.example.com',
  port: 80,
  path: '/',
  method: 'GET'
};

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();


In this example, we first create an options object that specifies the details of the request, such as the hostname, port, path, and HTTP method. We then use http.request() to create a new request object, passing in the options object and a callback function that will be called when a response is received.

Inside the callback function, we log the response status code and use res.on('data', ...) to listen for data events on the response object. When data is received, we write it to the standard output stream.

Finally, we use the req.on('error', ...) method to listen for errors that may occur during the request, and then call req.end() to signal the end of the request.

## How to create a web server without express?,

  `Example`       const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


In the code above, we first require the built-in Node.js http module, which provides the basic functionality needed to create a web server.

We then create a new server instance using the http.createServer() method, which takes a callback function that is executed for every incoming HTTP request. This function takes two arguments: the req (request) object, which contains information about the incoming request, and the res (response) object, which is used to send the response back to the client.

In this example, we simply set the response status code to 200, set the content type header to text/plain, and send the string "Hello World!" as the response body using the res.end() method.

Finally, we tell the server to listen on port 8000 using the server.listen() method, and log a message to the console to indicate that the server is running.

Note that this is a very basic example and doesn't handle things like routing or middleware. For more complex web applications, you may want to use a framework like Express, which provides additional features and makes it easier to handle more complex use cases.



## What is libuv?