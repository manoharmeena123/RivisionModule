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
