                                               INSTRUCTIONS
 ## Instructions:
`This assignment is 2 day long assignment, deadline is 8th April 6pm`
`We will review this on 8th April 8pm`
`Refer to this questions and type down all answers in readme file and push it to masai-repo`

## Refer to questions below
# What is non-blocking vs blocking?
# Overview of Blocking vs Non-Blocking
# What is throughput?
# what is the difference between readFile and readFileSync
# How can you make a network request using http module?
 `https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/`
# How to create a web server without express?
# What is libuv?
# What are the different phases involved in event loop?
 • `The Node.js Event Loop, Timers, and process.nextTick()`
 • `Don't Block the Event Loop (or the Worker Pool)`
# What are timers in Node.js?
 •` Timers in Node.js`
# What is NVM? how do you use it?
# What is common.js? how is it different from es modules?
# How does the crypto module work?
# What are web sockets?
# What are microservices?
# Creating a CLI based app using Node.js and publish it
# How does express work?
# What are routes?
# What are Middlewares?
# What is MVC framework?
# How do you do validations?
# How do you do static routing?
# What are some templating engines?
# How do you manage sessions in express?
# How do you manage cookies with express?
# What are common libraries you work with express?
# What is CORS?
# What is testing?
# What is unit testing?
# What is functional testing?
# What is HTTPS? what is the difference between HTTP and HTTPS?
# What is SSL/TLS?
# What is OWASP?
# What is the difference between SQL and NoSQL databases?
# What are some common queries in SQL?
# How do you do joins in SQL?
# How do you use lookup in mongodb?
# What is CAP theorem?
# What is indexing?
# What is DB replication?
# What is PACELC?
# What is Normalization / Denormalization?
# What is Entity Relationship Model? ( ER Model )




 ### Solutions

 ## What is non-blocking vs blocking?
` Blocking refers to a situation where a program waits for a particular operation to complete before continuing to execute the next line of code. This means that the program is "blocked" and cannot perform any other operations until the current operation is completed. For example, if a program makes a request to a remote server and waits for a response, the program will be blocked until the response is received.`

`Non-blocking, on the other hand, refers to a situation where a program can continue to execute other operations while waiting for a particular operation to complete. This means that the program is not "blocked" and can perform other tasks in the meantime. For example, if a program makes a non-blocking request to a remote server and continues to execute other code while waiting for the response, the program will not be blocked and can perform other operations.`

`Non-blocking operations are often preferred over blocking operations in applications where responsiveness is critical. Blocking operations can cause delays and slow down the application's overall performance. In contrast, non-blocking operations allow the application to remain responsive and continue to perform other tasks while waiting for the completion of a particular operation.`
  
## What is throughput?  

` throughput refers to the amount of data that can be transmitted from one point to another over a network within a given period of time. It is the measure of the rate at which data can be transmitted over a communication channel or network.`

`Throughput is often expressed in bits per second (bps) or bytes per second (Bps), and it is an important metric to evaluate the performance of a network. The higher the throughput, the more data can be transmitted within a given time period.`

`Throughput can be affected by various factors, including the bandwidth of the communication channel, the distance between the sender and receiver, the amount of network traffic, the quality of the network infrastructure, and the protocol used for data transmission.`

`Throughput is important in many applications, such as video streaming, file transfer, online gaming, and cloud computing. A high throughput network is essential for these applications to function effectively and provide a smooth and seamless user experience.`

## what is the difference between readFile and readFileSync?

`readFile and readFileSync are both functions in Node.js used for reading files, but they differ in their execution and behavior.`

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

Choose a project idea: First, you need to decide on what kind of CLI-based app you want to build. It could be anything from a simple calculator to a more complex tool like a file manager or a chatbot.

Set up your development environment: Once you have decided on your project idea, you need to set up your development environment. You will need to install Node.js and a code editor of your choice (such as Visual Studio Code, Atom, or Sublime Text).

Create your Node.js project: Next, you will create a new Node.js project using the npm init command. This will create a package.json file for your project, which will allow you to manage your dependencies.

Install dependencies: Depending on your project requirements, you may need to install additional dependencies using the npm install command. For example, if you want to build a command-line interface, you may want to use a library like yargs or commander to help with parsing command-line arguments.

Write your app code: With your project set up and dependencies installed, you can now start writing the code for your CLI-based app. You can use the console object in Node.js to interact with the command-line interface.

Test your app: Once you have written your app code, you should test it thoroughly to make sure it works as expected. You can use tools like Mocha or Jest to write and run tests for your app.

Publish your app: Finally, you can publish your app to the npm registry so that others can use it. You will need to create an account on npmjs.com, and then use the npm publish command to publish your app. You should also make sure to update your README file with instructions on how to use your app.

Note: Before publishing your app, make sure to check the npm guidelines for naming and versioning your package.

That's a general overview of the steps involved in creating a CLI-based app using Node.js and publishing it. There are many resources available online that can help you with each step in more detail.


## How does express work?
`Express is a web application framework for Node.js that provides a set of tools and features to build web applications and APIs. Here is an overview of how Express works`

Routing: Express provides a routing system that allows you to define endpoints (URLs) for your application. You can use the app.get(), app.post(), app.put(), app.delete(), and other methods to define routes and associate them with callback functions.

Middleware: Express middleware functions are functions that have access to the request and response objects, and can modify them, execute any code, and even terminate the request-response cycle. Express provides a set of built-in middleware functions such as express.json(), express.urlencoded(), and express.static(), but you can also write your own middleware functions to add custom functionality to your application.

Request and response objects: Express provides a set of objects to interact with the request and response objects. For example, the req object represents the HTTP request and contains properties such as req.params for route parameters, req.query for query parameters, and req.body for the request body. The res object represents the HTTP response and provides methods such as res.send() to send a response to the client.

Views and templates: Express provides a way to render dynamic HTML views using templates such as ejs, pug, or handlebars. You can define a template engine using app.set() and render views using res.render().

Error handling: Express provides a built-in error handling middleware function to handle any errors that occur during the request-response cycle. You can also define your own error handling middleware functions to handle specific types of errors.

Serving static files: Express allows you to serve static files such as images, CSS, and JavaScript files using the express.static() middleware function. You can specify the directory containing the static files using app.use().

`Overall, Express provides a set of powerful tools and features to build web applications and APIs in Node.js. Its flexibility and simplicity make it a popular choice for building modern web applications.`

##  What are routes?
`Routes are an essential part of building web applications and APIs with Express, as they allow you to define the logic for how your application responds to requests from clients.`

In web development, routes refer to the URLs (Uniform Resource Locators) that clients use to access specific resources or functionality of a web application or website.

In the context of a web framework like Express, routes are defined by mapping specific URLs (routes) to specific actions that should be taken by the server in response to a request made by a client. This can include sending data to the client, modifying data on the server, or directing the client to another URL.

In Express, you can define routes using the app.get(), app.post(), app.put(), app.delete(), and other HTTP method functions. These functions take two arguments: the route path and the callback function that will be executed when a request is made to that route.

## What are Middlewares?

`Overall, middleware is a powerful feature of Express that allows developers to modularize their code and add functionality to their web applications in a flexible and extensible way.`

 the context of web development, middleware refers to functions that are executed in a web application's request-response cycle between the time that a client sends a request and the time that the server responds to that request.

In Express, middleware functions are functions that have access to the request (req) and response (res) objects, and can perform tasks such as modifying the request or response, logging information, and terminating the request-response cycle by sending a response to the client.

Middleware functions can be used for a wide variety of purposes, including:

Parsing request bodies: Express provides middleware functions such as express.json() and express.urlencoded() to parse JSON and URL-encoded request bodies, respectively.

Authenticating requests: Middleware can be used to authenticate requests by checking the user's credentials or validating tokens.

Logging requests: Middleware can log requests to help with debugging and monitoring.

Caching responses: Middleware can cache responses to reduce server load and improve performance.

Handling errors: Middleware can handle errors that occur during the request-response cycle by sending appropriate error messages to the client.

Middleware functions can be defined using the app.use() function or by using a specific HTTP method function such as app.get(). The order in which middleware functions are defined matters, as they are executed in the order in which they are defined.

For example, the following code defines a simple middleware function that logs information about the incoming request:

javascript

function logger(req, res, next) {
  console.log(`${req.method} request received for ${req.url}`);
  next();
}

app.use(logger);
This middleware function logs the HTTP method (req.method) and URL (req.url) of each incoming request, and then calls the next() function to pass control to the next middleware function in the chain.


## What is MVC framework?
MVC stands for Model-View-Controller, which is a software architectural pattern commonly used in web application development. It is a way to organize the code of an application into three interconnected components: the model, the view, and the controller.

Model: The model represents the data and logic of the application. It is responsible for interacting with the database, performing business logic, and providing data to the controller and the view.

View: The view is responsible for rendering the data from the model to the user interface. It presents the data in a user-friendly way and handles user input.

Controller: The controller acts as an intermediary between the model and the view. It receives input from the user via the view and interacts with the model to update data and retrieve information. It then sends the updated data to the view for rendering.

The MVC framework separates concerns and improves maintainability and scalability of web applications. It also enables multiple developers to work on different parts of the application without interfering with each other's work.

Express, which is a popular Node.js web application framework, is an unopinionated framework, meaning it does not enforce a strict MVC architecture. However, it provides flexibility to developers to organize their code in an MVC pattern if desired.

Other popular MVC frameworks include Ruby on Rails, Laravel (PHP), Django (Python), and ASP.NET (C#).

## How do you do validations?
`Validations are an important part of web application development, as they help ensure that user input is correct and meets certain criteria before being processed by the application. In Express, there are several ways to perform validations on user input`

1.Built-in Validators: Express provides a set of built-in validators through the express-validator middleware that can be used to validate various types of input, such as strings, numbers, and dates. For example, to validate a string input to ensure that it is not empty and has at least 3 characters, you can use the notEmpty() and isLength() 
2.Custom Validators: You can also create your own custom validators to perform more complex validations. This involves creating a function that takes the input to be validated and returns either true or false based on whether the input is valid or not. For example, to create a custom validator that ensures that an email address is in a valid format,


## How do you do static routing?
`In Express, static routing is used to serve static files such as images, stylesheets, and JavaScript files to the client. This is done using the express.static() middleware.`

Here's an example of how to use express.static() to serve static files:

`javascript`

const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
})
`In this example, we are using the express.static() middleware to serve files from the "public" directory. This means that any files stored in the "public" directory (such as "public/style.css" or "public/image.jpg") can be accessed by the client by visiting the corresponding URL (e.g. "http://localhost:3000/style.css" or "http://localhost:3000/image.jpg")`

`By default, Express will look for files in the specified directory using the file path requested by the client. For example, if the client requests "/style.css", Express will look for a file named "style.css" in the "public" directory. If the file exists, it will be served to the client with the appropriate content type (e.g. "text/css" for a stylesheet)`

`You can also specify a different URL prefix to use for serving static files, like this:`

// Serve static files from the "public" directory with a URL prefix of "/static"
`app.use('/static', express.static('public'));`
`In this case, the static files will be served with a URL prefix of "/static". For example, if the client requests "/static/style.css", Express will look for a file named "style.css" in the "public" directory and serve it with the appropriate content type`

`Static routing is a simple but important feature of web applications, as it allows you to serve files efficiently and without the need for additional server-side processing.`

##  What are some templating engines?

`A templating engine is a software tool that allows you to generate dynamic output by combining templates with data. Here are some popular templating engines`

`Jinja2: Jinja2 is a powerful and flexible templating engine for Python that is widely used in web development frameworks like Flask, Django, and Pyramid.`

`andlebars: Handlebars is a popular templating engine that is compatible with many programming languages, including JavaScript, Java, Ruby, and .NET.`

`Mustache: Mustache is a logic-less templating engine that can be used with many programming languages, including JavaScript, Ruby, Python, and Java.`

`EJS: EJS (Embedded JavaScript) is a simple templating engine that lets you generate HTML markup with plain JavaScript`

`Pug: Pug (formerly known as Jade) is a templating engine for Node.js and can be used with Express.js, Hapi.js, and other Node.js frameworks.`

`Liquid: Liquid is a templating engine that is used by Shopify, GitHub Pages, and many other applications.`

`Twig: Twig is a flexible, fast, and secure templating engine for PHP that is used by popular PHP frameworks like Symfony and Laravel.`

`Smarty: Smarty is a popular PHP templating engine that has been around for over 10 years and is used by many websites, including Yahoo! and NASA.`

`Velocity: Velocity is a Java-based templating engine that is used by many Java web development frameworks.`

`There are many other templating engines available, each with its own set of features and benefits. The choice of which one to use often depends on the specific needs of your project and the programming language or framework you are using.`



## How do you manage sessions in express?

`In Express, sessions are typically managed using a middleware called express-session. This middleware provides a simple way to store session data on the server and associate it with a particular user.`

`Here are the basic steps for managing sessions in Express using express-session:`

`Install the express-session middleware using npm:`


`npm install express-session`
`Import the express-session module into your app:`


const session = require('express-session');
Configure the middleware with your desired options, including a secret for signing the session ID:

ph

app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true
}))
Use the req.session object to store and access session data:


app.get('/', (req, res) => {
  req.session.username = 'johndoe';
  res.send(`Hello, ${req.session.username}!`);
});

`In this example, the session data is stored on the req.session object and associated with the user's browser session. The username property is set to 'johndoe', and can be accessed on subsequent requests.`

`To destroy a session, use the req.session.destroy() method:`

javascript

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});
`This will remove the session data from the server and end the user's session.`

`These are the basic steps for managing sessions in Express using express-session. There are many additional options and features available, including support for different session stores and cookie options. Be sure to read the documentation for express-session for more information.`

##  How do you manage cookies with express?
`In Express, cookies can be managed using the cookie-parser middleware. This middleware parses cookie headers and makes cookie data available on the req.cookies object. Here are the basic steps for managing cookies in Express using cookie-parser:`

`These are the basic steps for managing cookies in Express using cookie-parser. There are many additional options and features available, including support for signed cookies and setting cookie options. Be sure to read the documentation for cookie-parser for more information.`

##  What are common libraries you work with express?
`Express is a popular web application framework for Node.js, and there are many libraries and modules that work well with it. Here are some of the most common libraries you may work with when building an Express application:`

body-parser:` A middleware for parsing HTTP request bodies. It supports parsing JSON, URL-encoded, and multipart form data.`

cors: `A middleware for enabling Cross-Origin Resource Sharing (CORS) in your application. It allows you to control access to your application from different domains.`

helmet:` A middleware for adding extra security headers to your application's HTTP responses. It helps protect against common web application security vulnerabilities.`

mongoose: `A popular MongoDB ODM (Object Document Mapper) for Node.js. It provides a simple way to interact with MongoDB from your Express application.`

passport:` A middleware for authentication in your application. It provides a flexible and modular authentication framework that supports many authentication strategies, including local username/password, social authentication (Facebook, Twitter, etc.), and more.`

socket.io:` A library for real-time, bidirectional communication between client and server. It provides a simple way to build real-time web applications, such as chat rooms or online games `

jsonwebtoken:` A library for generating and verifying JSON Web Tokens (JWTs). JWTs are a popular way to handle authentication and authorization in modern web applications.`

compression:` A middleware for compressing HTTP responses. It can significantly reduce the size of the response data and improve the performance of your application.`

morgan: `A middleware for logging HTTP requests and responses. It provides detailed information about each request, such as the HTTP method, URL, and response status.`

`These are just a few examples of the many libraries and modules that work well with Express. Depending on your application's requirements, you may also work with other libraries such as Sequelize for ORM (Object Relational Mapping), Winston for logging, and many others.`




##  What is CORS?

`CORS stands for Cross-Origin Resource Sharing. It is a mechanism used by modern web browsers to allow web applications to make cross-origin requests to servers outside of their domain.`

`When a web page loaded in one domain (origin) tries to access a resource from a server located in a different domain, the browser may block the request for security reasons. This is known as the same-origin policy. CORS provides a way to relax this policy and enable cross-domain requests, but in a controlled and secure manner.`

`CORS is implemented as a set of HTTP headers that are exchanged between the client (web browser) and the server during the request-response cycle. The headers inform the browser whether the server allows cross-origin requests and what kind of requests are permitted.`

`For example, if a website hosted on "www.example.com" wants to make a cross-origin request to a server located at "api.example.net", the server must include the appropriate CORS headers in its response. The headers can specify which origins are allowed to access the resource, which HTTP methods are allowed, and whether cookies and authentication credentials can be sent with the request`

`If the server does not include the appropriate CORS headers in its response, the browser will block the request and the web page will not be able to access the requested resource.`

`CORS is an important security mechanism that helps prevent unauthorized access to sensitive resources. However, it can also be a source of confusion and frustration for web developers who are not familiar with it. Therefore, it is important for web developers to understand how CORS works and how to configure their servers to support it properly.`







## What is testing?

`esting is the process of evaluating a system or application to determine if it meets the specified requirements and functions correctly. In software development, testing is a crucial part of the software development life cycle (SDLC) and involves verifying that the software meets the expected quality, reliability, and performance standards.`

`The main goal of testing is to identify defects or issues in the system and ensure that they are fixed before the software is released to the end-users. Testing can be performed at various stages of the SDLC, including unit testing, integration testing, system testing, and acceptance testing.`

`Unit testing involves testing individual software components or modules to ensure that they perform as expected. Integration testing involves testing the interaction between different components or modules to ensure that they work together as expected. System testing involves testing the entire system as a whole to ensure that it meets the specified requirements. Acceptance testing involves testing the software with real users or stakeholders to ensure that it meets their needs and expectations.`

`Testing can be performed manually or using automated testing tools. Automated testing tools can help reduce the time and effort required for testing, improve the accuracy of testing, and enable testing to be performed more frequently.`

`Overall, testing plays a critical role in ensuring the quality and reliability of software and is essential for delivering software that meets the needs and expectations of the end-users.`




## What is unit testing?
`Unit testing is a software testing technique that involves testing individual units or components of a software application in isolation from the rest of the system. The purpose of unit testing is to ensure that each unit or component of the software works as expected and meets its design specifications.`

`In unit testing, a developer writes test cases to verify the functionality of a specific unit or component of the code, such as a single function or method. These test cases typically include input values and expected output values, and the test is considered successful if the actual output matches the expected output.`

`Unit testing can help identify and fix defects early in the software development process, reducing the risk of bugs and errors in the final product. It can also help improve code quality, as developers are forced to write code that is modular, maintainable, and testable. Overall, unit testing is a key practice in ensuring the reliability, maintainability, and quality of software applications.`



##  What is HTTPS? what is the difference between HTTP and HTTPS?
`HTTPS stands for Hypertext Transfer Protocol Secure. It is a secure version of the HTTP protocol used for secure communication over the internet. The primary difference between HTTP and HTTPS is that HTTPS uses encryption to protect the communication between the web server and the client's browser.`

`In HTTP, the data sent between the web server and the client's browser is transmitted in plain text, which means that anyone who intercepts the data can read it. This makes it vulnerable to various attacks, including eavesdropping, data tampering, and man-in-the-middle attacks.`

`In contrast, HTTPS uses SSL/TLS encryption to protect the communication between the web server and the client's browser. This encryption ensures that the data is transmitted securely and cannot be intercepted or tampered with by anyone who does not have the encryption key.`

`To use HTTPS, a website needs to have an SSL/TLS certificate installed on the server. This certificate verifies the identity of the website and provides encryption for the communication between the server and the client's browser.`

`Overall, HTTPS provides a higher level of security for online communication and is essential for protecting sensitive information such as passwords, credit card details, and other personal information.`




## What is SSL/TLS?
`SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols that are used to provide security and privacy for online communication, such as web browsing, email, and instant messaging.`

`The primary function of SSL/TLS is to establish an encrypted connection between two parties, such as a web server and a client's browser, so that any data transmitted between them is protected from eavesdropping, tampering, and forgery. SSL/TLS uses a combination of public key and symmetric key encryption to achieve this.`

`When a client connects to a server using SSL/TLS, the server sends its SSL/TLS certificate to the client, which contains the server's public key. The client then uses this key to encrypt a symmetric key that is used for the rest of the communication. This ensures that only the server and client can read the messages exchanged between them, and any intercepted messages will be unreadable to any third-party.`

`SSL/TLS is used extensively in web browsing, where it is commonly known as HTTPS. It is also used in other applications where secure communication is essential, such as email encryption and secure messaging apps.`

`Overall, SSL/TLS is a crucial component of online security, providing privacy and integrity for sensitive information transmitted over the internet.`



## What is OWASP?
`OWASP (Open Web Application Security Project) is a non-profit organization that is dedicated to improving the security of software applications. It provides resources, tools, and knowledge to help software developers, security professionals, and organizations develop and maintain secure applications.`

`The primary mission of OWASP is to make software security visible so that individuals and organizations can make informed decisions about software security risks. To achieve this, OWASP provides various resources, including the OWASP Top Ten, which is a list of the most critical web application security risks.`

`The OWASP Top Ten is updated every few years to reflect changes in the security landscape and provide guidance on how to mitigate these risks. Some of the risks listed in the OWASP Top Ten include injection attacks, cross-site scripting (XSS), broken authentication and session management, and insufficient logging and monitoring.`

`OWASP also provides various resources and tools to help developers and security professionals understand and mitigate these risks. This includes the OWASP Testing Guide, which provides guidance on how to test for security vulnerabilities, and the OWASP ZAP (Zed Attack Proxy), which is an open-source tool for identifying and mitigating web application security risks.`

`Overall, OWASP plays a crucial role in improving the security of software applications and raising awareness of software security risks. Its resources and tools are widely used by developers and security professionals to ensure that software applications are secure and free from vulnerabilities.`



## What is the difference between SQL and NoSQL databases?
`SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database systems with different data models and characteristics.`

`SQL databases are relational databases that store data in tables with pre-defined schemas, and use SQL for querying and manipulating the data. SQL databases are characterized by their support for ACID (Atomicity, Consistency, Isolation, Durability) transactions, which ensure that data is consistent and accurate.`

`On the other hand, NoSQL databases are non-relational databases that store data in a variety of formats, such as key-value pairs, document-oriented, graph, or column-oriented data. NoSQL databases are characterized by their ability to scale horizontally, handle large amounts of unstructured or semi-structured data, and support flexible data models.`

`Some of the key differences between SQL and NoSQL databases are:`

`Data model: SQL databases use a pre-defined schema, while NoSQL databases use dynamic schemas or schemaless models.`

`Query language: SQL databases use SQL for querying and manipulating data, while NoSQL databases use various query languages, such as MongoDB's query language, Cassandra Query Language (CQL), or Apache Spark SQL.`

`Scalability: SQL databases are vertically scalable, meaning that they can be scaled up by adding more resources to a single server, while NoSQL databases are horizontally scalable, meaning that they can be scaled out by adding more servers to the cluster.`

`Flexibility: NoSQL databases are more flexible than SQL databases, as they can handle different types of data and allow for changes to the data model without the need to modify the schema.`

`Overall, the choice between SQL and NoSQL databases depends on the specific requirements of the application and the nature of the data being stored. SQL databases are suitable for applications that require strong consistency, ACID transactions, and complex joins, while NoSQL databases are suitable for applications that require high scalability, flexible data models, and handling large amounts of unstructured data.`



## What are some common queries in SQL?
`SQL (Structured Query Language) is used for managing relational databases and performing various operations such as querying, inserting, updating, and deleting data. Here are some common types of queries that can be performed using SQL:`

`SELECT query: This is the most commonly used query in SQL, used to retrieve data from a table. It is used with the SELECT keyword, and can be used to filter, sort, and aggregate data.`
`Example: SELECT * FROM table_name;`

`WHERE clause: This is used to filter data based on a specified condition. It is used in conjunction with the SELECT query to retrieve only the desired data.`
`Example: SELECT * FROM table_name WHERE column_name = 'value';`

`JOIN query: This is used to combine data from two or more tables based on a common column. There are several types of joins, such as INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN`
`Example: SELECT * FROM table1 JOIN table2 ON table1.column_name = table2.column_name`

`GROUP BY query: This is used to group data based on a specified column and aggregate the data using a function such as COUNT, SUM, AVG, MAX, or MIN.`
`Example: SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name;`

`ORDER BY query: This is used to sort data based on a specified column in either ascending or descending order.`
`Example: SELECT * FROM table_name ORDER BY column_name DESC;`

`INSERT query: This is used to insert new data into a table.`
`Example: INSERT INTO table_name (column1, column2, column3) VALUES (value1, value2, value3);`

`UPDATE query: This is used to update existing data in a table.`
`Example: UPDATE table_name SET column_name = 'new_value' WHERE column_name = 'old_value';`

`DELETE query: This is used to delete data from a table.`
`Example: DELETE FROM table_name WHERE column_name = 'value';`

`These are just a few examples of the types of queries that can be performed using SQL. There are many other SQL commands and functions that can be used to manipulate and analyze data stored in a relational database.`\



##  How do you do joins in SQL?

`Joining tables is a common operation in SQL that allows you to combine data from two or more tables based on a common column. There are several types of joins in SQL, including INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN. Here are some examples of how to perform joins in SQL:`

`INNER JOIN: This returns only the rows that have matching values in both tables.`
`Example: SELECT * FROM table1 INNER JOIN table2 ON table1.column_name = table2.column_name;`

`LEFT JOIN: This returns all the rows from the left table and the matching rows from the right table. If there is no matching row in the right table, the result will be NULL.`
`Example: SELECT * FROM table1 LEFT JOIN table2 ON table1.column_name = table2.column_name;`

`RIGHT JOIN: This returns all the rows from the right table and the matching rows from the left table. If there is no matching row in the left table, the result will be NULL.`
`Example: SELECT * FROM table1 RIGHT JOIN table2 ON table1.column_name = table2.column_name;`

`FULL OUTER JOIN: This returns all the rows from both tables, including those that have no matching values in the other table.`
`Example: SELECT * FROM table1 FULL OUTER JOIN table2 ON table1.column_name = table2.column_name;`

`In each of these examples, table1 and table2 are the names of the tables being joined, and column_name is the name of the column that is used to match the rows between the tables. The SELECT statement is used to specify the columns that you want to retrieve from the joined tables. You can also use additional clauses, such as WHERE and ORDER BY, to filter and sort the data in the result set.`





## How do you use lookup in mongodb?

`In MongoDB, the $lookup operator is used to perform a left outer join between two collections. It allows you to match documents in one collection with documents in another collection based on a specified condition.`

`Here's an example of how to use the $lookup operator in MongoDB:`

`Suppose you have two collections, orders and products, and you want to retrieve all the orders along with the details of the products that were ordered. To do this, you can use the $lookup operator to join the orders collection with the products collection based on the productId field:`

`EXAMPLE :`
db.orders.aggregate([
   {
      $lookup:
         {
           from: "products",
           localField: "productId",
           foreignField: "_id",
           as: "productDetails"
         }
   }
])

`In this example, from specifies the name of the collection you want to join with, localField specifies the field in the orders collection to match with the foreignField in the products collection, and as specifies the name of the field to store the matched documents from the products collection.`

`The result of this operation will be a list of all the orders, with an additional productDetails field containing the details of the matching products. If there is no match for a particular order in the products collection, the productDetails field will be an empty array.`

`Note that the $lookup operator can be used with other aggregation operators to perform more complex queries and transformations on the joined data.`



## What is CAP theorem?

`The CAP theorem, also known as Brewer's theorem, is a fundamental principle in distributed systems that states that it is impossible for a distributed data system to simultaneously provide consistency, availability, and partition tolerance.`

`Consistency refers to the guarantee that all nodes in a distributed system see the same data at the same time. Availability refers to the guarantee that every request made to a non-failing node in the system will receive a response, without guaranteeing that it is the most recent version of the data. Partition tolerance refers to the guarantee that the system will continue to function even if there is a loss of communication or network partition between nodes in the system.`

`According to the CAP theorem, any distributed system can only provide two of the three guarantees at the same time. In other words, a system can be consistent and partition-tolerant, but not highly available; or it can be highly available and partition-tolerant, but not fully consistent.`

`This means that in designing a distributed system, you have to make trade-offs between these three guarantees based on the specific requirements of the system and the use case. For example, a system that prioritizes consistency over availability may be suitable for banking transactions, while a system that prioritizes availability over consistency may be suitable for social media platforms where occasional inconsistencies in data are acceptable.`



## What is indexing?

`Indexing is the process of creating a data structure that allows for efficient retrieval of data from a database. In a database, an index is a data structure that organizes the data in a specific way to improve the speed of data retrieval operations.`

`Indexes are created on one or more columns of a table, and they provide a way to quickly find data based on the values in those columns. When a query is executed against a table with an index, the database engine uses the index to locate the rows that match the query criteria, rather than scanning the entire table.`

`Indexes can significantly improve the performance of database operations, especially for large tables with many rows. However, they also require storage space and additional processing time to maintain, so they should be used judiciously.`

`In addition to improving the performance of data retrieval operations, indexes can also enforce constraints on the data in a table, such as unique constraints or foreign key constraints. This can help ensure data integrity and prevent data inconsistencies.`

`There are different types of indexes, including clustered indexes, non-clustered indexes, composite indexes, and full-text indexes, each with their own benefits and limitations. The choice of index type depends on the specific requirements of the database and the use case.`



## What is DB replication?
`Database replication is the process of creating and maintaining multiple copies of a database across multiple servers or instances. The purpose of database replication is to improve data availability, increase data durability, and improve overall system performance.`

`In a typical replication scenario, one database server (the "master") is designated as the source of truth, and any changes made to the data on the master are propagated to one or more "slave" servers. The slaves maintain a copy of the master database, and they receive updates from the master in real-time or near-real-time.`

`There are several different types of database replication, including master-slave replication, master-master replication, and multi-master replication. The type of replication used will depend on the specific requirements of the application and the underlying database technology being used.`



## What is PACELC?

`PACELC is a theoretical model that describes the trade-offs between consistency and availability in distributed computer systems. It was proposed by Eric Brewer, who is also known for formulating the CAP theorem.`

`The PACELC model extends the CAP theorem by considering additional factors that may affect the behavior of a distributed system. PACELC stands for:`

`P (Partition tolerance): The ability of a distributed system to continue operating even if network partitions occur, which means that communication between some nodes in the system is temporarily lost.`

`A (Availability): The ability of a distributed system to continue providing its services to users, even if some nodes in the system fail or become unresponsive.`

`C (Consistency): The degree to which all nodes in a distributed system agree on the current state of the data they are managing.`

`E (Eventual consistency): The condition that a distributed system will become consistent over time, assuming that no new updates are made to the data.`

`L (Latency): The time delay between an operation being requested and its completion.`

`C (Causality): The preservation of the causal relationship between events in a distributed system, meaning that events that are causally related should be observed in the same order by all nodes.`

`In summary, the PACELC model provides a framework for understanding the trade-offs that must be made when designing and operating distributed computer systems. By considering the factors of partition tolerance, availability, consistency, eventual consistency, latency, and causality, system architects can make informed decisions about how to optimize their systems for performance and reliability.`

## What is Normalization / Denormalization?

`Normalization and denormalization are two techniques used in database design to improve the efficiency and effectiveness of data storage and retrieval.`

`Normalization is the process of organizing data in a database to minimize redundancy and dependency. It involves breaking down larger tables into smaller, more focused tables, each with a unique primary key. The goal of normalization is to eliminate data redundancy and inconsistencies, which can lead to data anomalies and errors. Normalization typically results in a more structured and efficient database schema, but it can also make certain types of queries more complex.`

`Denormalization, on the other hand, is the process of adding redundant data to a database to improve query performance. By duplicating data across multiple tables, denormalization can reduce the need for complex joins and increase the speed of queries. However, denormalization can also increase data redundancy and inconsistency, which can lead to data anomalies and errors if not properly managed.`

`In general, normalization is a good practice for most database designs because it promotes data consistency and reduces data redundancy. However, in certain situations where query performance is a critical concern, denormalization may be a viable solution. It is important for database designers to carefully consider the trade-offs between normalization and denormalization in order to create an efficient and effective database schema that meets the needs of their application.`


## What is Entity Relationship Model? ( ER Model )

`The Entity Relationship (ER) model is a conceptual data modeling technique used to describe the relationships between entities in a database. It is commonly used in software engineering and database design.`

`In the ER model, entities are represented as rectangles, and relationships between entities are represented as diamonds. Each entity has attributes, which are represented as ovals. Entities are connected to relationships through lines that represent the cardinality or multiplicity of the relationship (e.g., one-to-one, one-to-many, many-to-many).`

`The ER model is used to create a visual representation of the data model, which can be used to help stakeholders understand the structure of the database and how data is organized. It can also be used as a tool for communication between different teams involved in the database design process.`

`There are three main types of relationships in the ER model: one-to-one, one-to-many, and many-to-many. A one-to-one relationship means that each entity is related to only one other entity. A one-to-many relationship means that one entity can be related to multiple other entities, but each of those other entities can only be related to one entity. A many-to-many relationship means that each entity can be related to multiple other entities, and each of those other entities can be related to multiple entities.`

`Overall, the ER model is a powerful and widely used tool for data modeling and database design, as it provides a clear and concise way to represent the relationships between entities in a database.`