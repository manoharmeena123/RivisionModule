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

libuv is a multi-platform support library with a focus on asynchronous I/O. It was originally developed for Node.js to provide a consistent, cross-platform interface for I/O operations such as network sockets and file access.

libuv abstracts the differences between operating systems and provides a single, consistent API for applications to use. It provides a number of features that make it well-suited for building high-performance, scalable network servers and other I/O-intensive applications.

Some of the key features of libuv include:

Asynchronous I/O: libuv provides a consistent interface for performing asynchronous I/O operations, such as reading and writing to network sockets, files, and other types of I/O resources.

Event loop: libuv includes an event loop implementation that allows applications to perform I/O operations without blocking the main thread of execution. This allows applications to handle large numbers of concurrent connections efficiently.

Cross-platform support: libuv supports multiple operating systems, including Linux, macOS, Windows, and various Unix-like systems.

Thread pool: libuv includes a thread pool that can be used to perform computationally intensive tasks without blocking the event loop.

Timers and idle handlers: libuv provides facilities for scheduling timers and idle handlers, which can be used to perform periodic tasks or to wait for some period of time before performing an action.

`Conclusion :` Overall, libuv provides a powerful set of tools for building high-performance, scalable network applications that can run on a wide range of platforms. It is used by many popular projects, including Node.js, the Atom text editor, and the Julia programming language, among others.

## What are the different phases involved in event loop?

`the event loop is designed to handle asynchronous programming and ensure that code execution is efficient and non-blocking`.
The event loop is a core component of many programming languages and frameworks, including JavaScript, Python, and Node.js. It is responsible for managing the execution of code and handling events and callbacks. The exact phases of the event loop can vary depending on the language and framework being used, but here is a general overview of the phases involved in a typical event loop:

Polling for events: The event loop starts by polling for any events that are waiting to be processed, such as user input or network requests.

Event queue: Any events that are detected during the polling phase are added to an event queue, which is a data structure that stores the events in the order they were received.

Processing events: The event loop then processes each event in the queue one by one. This typically involves executing any associated callback functions or handlers.

Timers and intervals: During event processing, the event loop also checks for any timers or intervals that are scheduled to run, and executes them if they are ready.

I/O operations: If any I/O operations are required during event processing, such as reading or writing to a file, the event loop will delegate these tasks to separate threads or processes to avoid blocking the main thread.

Yielding control: Once all the events in the queue have been processed and all timers and intervals have been executed, the event loop yields control back to the operating system to allow other tasks to run.

Repeating the cycle: The event loop then goes back to the first phase and starts polling for events again, repeating the cycle indefinitely until the program is stopped or an error occurs.

##  What are timers in Node.js?
   # Timers in Node.
   
 Timers in Node.js are a core feature that allow you to schedule the execution of a function or code block at a specific time in the future or at recurring intervals. Timers are used extensively in Node.js applications for a variety of purposes, such as scheduling periodic data updates, triggering backups or cleanups, or delaying the execution of time-consuming operations.

There are two types of timers in Node.js: setTimeout() and setInterval(). The setTimeout() function allows you to schedule a function to run once after a specified delay, while the setInterval() function allows you to schedule a function to run repeatedly at a specified interval.

Here is an example of using set  

setTimeout(() => {
  console.log('This function will run after a 5 second delay.');
}, 5000)


setInterval(() => {
  console.log('This function will run every 2 seconds.');
}, 2000);

`Note that timers are non-blocking, which means that while a timer is waiting to execute its associated function, the event loop can continue to process other events and tasks. However, if the event loop is blocked by a long-running operation, the timer may be delayed.`


##  What is NVM? how do you use it?
NVM stands for Node Version Manager, it's a command-line tool that allows you to easily switch between different versions of Node.js on your computer. It's useful if you're working on multiple projects that require different versions of Node.js, or if you need to test your application against different versions of Node.js.
`That's a basic overview of how to use NVM. It's a powerful tool that can save you a lot of time and hassle when working with Node.js projects that require different versions of Node.js.`


##  What is common.js? how is it different from es modules?
CommonJS is a module specification for JavaScript that was originally developed for use in server-side applications, particularly in the Node.js runtime environment. CommonJS modules use a require() function to import other modules and an exports object to export functions, objects, or values from a module.
`Overall, while CommonJS and ES Modules have some similarities, they are two different module systems with different syntax and semantics. ES Modules are becoming more widely adopted and are the recommended way of working with modules in modern JavaScript applications.`


##  How does the crypto module work?
he crypto module in Node.js provides a way to work with cryptographic functionality in JavaScript. It includes various cryptographic algorithms for creating secure hash functions, encrypting and decrypting data, and generating random numbers and strings.

Here's a basic overview of how the crypto module works:
1.Generating random numbers and strings: The crypto.randomBytes() method can be used to generate a buffer of cryptographically secure random bytes. This can be converted to a string or number for use in generating random keys or salts.
2.Creating hash functions: The crypto.createHash() method can be used to create a hash object, which can then be used to hash data using various algorithms, such as SHA256 or MD5.
3.Encrypting and decrypting data: The crypto.createCipher() and crypto.createDecipher() methods can be used to create cipher and decipher objects, which can then be used to encrypt and decrypt data using various algorithms, such as AES.

`These are just some basic examples of how the crypto module works. There are many other methods and options available for working with cryptographic functions in Node.js. It's important to use these functions carefully and appropriately to ensure the security of your applications.`

##  What are web sockets?

WebSockets are a communication protocol that provides real-time, bidirectional communication between a client (such as a web browser) and a server. Unlike the traditional request-response model of HTTP, which requires the client to send a request to the server for each interaction, WebSockets allow the server to push data to the client at any time, without the need for the client to request it.

WebSockets are especially useful for web applications that require real-time data updates, such as chat applications, online games, and stock tickers. With WebSockets, these applications can update data on the client side as soon as it becomes available on the server side, without the need for the client to repeatedly poll the server for updates.

WebSockets use a persistent connection between the client and the server, which allows for faster and more efficient communication than the traditional HTTP request-response model. The protocol is implemented using the WebSocket API in web browsers and WebSocket server libraries on the server side.

## What are microservices?
Microservices are an architectural style in which a large application is broken down into small, independent services that can be developed, deployed, and scaled independently. Each microservice is focused on a specific business capability and can be developed and maintained by a small, cross-functional team.

In a microservices architecture, each service communicates with other services through well-defined APIs, typically using lightweight protocols such as HTTP or message queues. This allows services to be developed and deployed independently, without requiring coordination with other teams or services.

Microservices offer a number of benefits over traditional monolithic architectures, including:

Scalability: Services can be scaled independently, allowing for better resource utilization and improved performance.
Flexibility: Changes can be made to individual services without affecting the rest of the application, making it easier to introduce new features and respond to changing business requirements.
Resilience: Services can be designed to handle failures and degraded performance, improving the overall reliability of the application.
Technology diversity: Different services can be built using different technologies and programming languages, allowing teams to choose the best tool for the job.
However, microservices also introduce additional complexity, such as the need for service discovery, load balancing, and fault tolerance. Effective management of microservices requires a robust infrastructure and well-defined processes for deployment, monitoring, and maintenance.

##  Creating a CLI based app using Node.js and publish it