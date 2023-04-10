                                             Instructions:

# This assignment is 2 day long assignment, deadline is 8th April 6pm
# We will review this on 8th April 8pm
# Refer to this question bank and type down all answers in readme file and push it to masai-repo
 `Questions`
# What are Models?
# What is Authentication?
# What is Authorization?
# How do you do role-based authentication?
# What is hashing?
# What is encryption?
# How is hashing and encryption different?
# What is salt?
# What is JWT?
# How is JWT different and list the pros and cons of using JWT tokens?
# What are the different ways to manage authentication?
# What is cookie-based auth?
# What is session management?
# What is OAuth
# What is REST api?
# Explain why mongoose does not return a promise but has a .then
# What are aggregation pipelines with mongoose?
# I'm using an arrow function for a virtual, middleware, getter/setter, or method and the value of this is wrong. Why?
# Should I create/destroy a new connection for each database operation?
# My query/update seems to execute twice. Why is this happening?
# How do you create indexes with mongoose
# What are pre and post hooks?
# What is gRPC?
# What is GraphQL?
# What is HTTP
# What is a web socket?
# What is Caching?
# What are ways to cache on the backend?
# What is LRU cache?
# What is Redis? Why do we use it?
# How can we implement caching on frontend?
# What is a CDN?
# What is DNS?
# How does the internet work?
# How do Browsers work?
# What is a stateless backend?
# What is the client server model?
# What is HTTP vs HTTPS?
# What is throughput?
# What is availability?
# What is latency?
# What is rate-limiting?
# What are the different ways to do rate limits?
# What is a load balancer?
# Describe how you design an API?
# What is a horizontal and vertical scaling?
# How do you build a system which is reliable?\



## Solutions

# What are Models?
`A model is a representation of a real-world object or concept in a computer program. In software engineering, models are used to design, analyze, and simulate complex systems. In the context of database systems, a model is used to define the structure and behavior of data. In the context of web development with frameworks such as Node.js and Express, models are often used to represent data structures and define the relationships between them. Models are typically defined using a schema, which specifies the fields and properties of the model, as well as any validation rules or other constraints. The schema is then used to create instances of the model, which can be manipulated and persisted to a database or other storage medium.`

# Explain why mongoose does not return a promise but has a .then
`Mongoose is a Node.js library that provides a schema-based solution to model application data and interact with MongoDB databases. Mongoose does return promises in certain situations, such as when using findOneAndUpdate() or save(). However, in many cases, Mongoose functions do not return promises by default.`

`The reason for this is that Mongoose uses a query builder pattern that allows you to chain together a series of methods to build up a complex query before executing it. The final method in the chain typically performs the actual database operation and returns a Query object. The Query object is not a promise, but it does have a .then() method, which allows you to attach a callback to be executed when the operation completes.`

`In essence, the .then() method is a convenience method that allows you to work with the results of a query in a promise-like manner, even though the underlying object is not actually a promise. This pattern is common in many Node.js libraries and is known as the "callback-style" or "error-first" pattern.`

# What is Authentication?

`Authentication is the process of verifying the identity of a user or system. In the context of computer security, authentication is used to ensure that only authorized users or systems can access sensitive information or perform certain actions.`

`Authentication typically involves a combination of factors, including something the user knows (such as a password), something the user has (such as a physical token or smart card), or something the user is (such as a biometric characteristic like a fingerprint or iris pattern).`

`In web applications, authentication is often used to control access to protected resources such as user accounts, sensitive data, or restricted functionality. When a user attempts to access a protected resource, the application will prompt the user to provide some form of identification, such as a username and password. The application will then verify the credentials provided by the user against a database of authorized users, and grant access if the credentials are valid.`

`Authentication is a critical component of any secure system, and is often paired with authorization, which determines what actions a user is allowed to perform once they have been authenticated. Together, authentication and authorization help to ensure the security and integrity of sensitive information and systems.`


# What is Authorization?
`Authorization is the process of determining what actions an authenticated user is allowed to perform within a system or application. In other words, while authentication establishes the identity of a user or system, authorization determines what that user or system is allowed to do.`

`Authorization is typically implemented through a set of rules or permissions that are associated with specific users or roles. For example, a user with an "admin" role may be authorized to perform actions such as adding or deleting content, while a user with a "member" role may only be authorized to view or edit their own profile information.`

`Authorization is an important component of access control, which helps to ensure the security and integrity of a system or application by limiting access to sensitive resources or functionality. By controlling what actions users are allowed to perform, authorization can help to prevent unauthorized access, data loss, and other security breaches.`


# How do you do role-based authentication?

`Role-based authentication is a common approach to managing authorization in web applications. With role-based authentication, access to specific resources or functionality within an application is determined by a user's role or group membership.`

`Here are the general steps to implement role-based authentication in a web application:`

`Define the roles: Identify the different roles or groups that will be used to control access to resources and functionality within the application. Examples of roles might include "admin", "member", or "guest".`

`Assign roles to users: Assign each user to one or more roles based on their needs and permissions. This can be done manually or through an automated process.`

`Implement role-based access control: Implement role-based access control (RBAC) within the application to restrict access to resources and functionality based on a user's assigned roles. This can be done using a variety of techniques, such as middleware, database permissions, or conditional rendering of UI components.`

`Test and refine: Test the role-based authentication system thoroughly to ensure that it is working correctly and efficiently. Refine the system as needed based on user feedback and testing results.`

`Role-based authentication is a powerful tool for managing access to sensitive resources and functionality within a web application. By using roles to define access permissions, developers can ensure that only authorized users are able to perform specific actions, while also providing a flexible and scalable approach to managing authorization.`


# What is hashing?

`Hashing is a process of converting a message or data into a fixed-length string of characters or digits. The resulting string is often referred to as a hash or message digest. Hashing is a one-way function, meaning that it is easy to compute the hash value from the original message or data, but it is very difficult (if not impossible) to reverse the process and compute the original message or data from the hash value.`

`Hashing is often used in computer security to provide a secure way to store and transmit sensitive data such as passwords, credit card numbers, or other private information. By storing only the hash of a password, for example, an application can verify that a user has entered the correct password without storing the actual password itself. This can help to prevent unauthorized access to sensitive data in the event of a security breach.`

`There are many different hashing algorithms that can be used to create a hash value from a message or data. Some common hashing algorithms include SHA-1, SHA-256, and MD5. Each algorithm has its own strengths and weaknesses, and the choice of algorithm will depend on the specific use case and security requirements of the application.`

# What is encryption?
`Encryption is the process of encoding a message or data in such a way that only authorized parties can read it. Encryption involves using an encryption algorithm and a secret key to convert the original data into a cipher text that is unintelligible to anyone who does not have the key to decrypt it.`

`Encryption is commonly used in computer security to protect sensitive data such as passwords, credit card numbers, and other personal information. Encryption can also be used to protect communications between two parties, such as email or instant messaging. By encrypting the communication, unauthorized parties are prevented from intercepting and reading the message.`

`There are many different encryption algorithms that can be used to encrypt data. Some common encryption algorithms include Advanced Encryption Standard (AES), RSA, and Blowfish. Each algorithm has its own strengths and weaknesses, and the choice of algorithm will depend on the specific use case and security requirements of the application.`


# How is hashing and encryption different?

`Hashing and encryption are both techniques used to protect data, but they serve different purposes and have different characteristics.`

`Hashing is a one-way process of transforming data into a fixed-length string of characters, called a hash or message digest. The hash is generated by running the data through a hash function, which produces a unique output for each input. Hashing is primarily used to verify the integrity of data and ensure that it has not been tampered with. Hashing is irreversible, meaning that it is not possible to obtain the original data from the hash.`

`Encryption, on the other hand, is a two-way process of transforming data into a ciphertext that can only be decrypted with a secret key. Encryption is used to protect data confidentiality by ensuring that only authorized parties can access the original data. Encryption is reversible, meaning that it is possible to obtain the original data from the ciphertext by using the correct key.`

`In summary, hashing is a one-way process used to verify the integrity of data, while encryption is a two-way process used to protect data confidentiality.`


# What is salt?

`Salt is a random data added to a password or other sensitive data before it is hashed. The purpose of adding a salt is to prevent attackers from using precomputed hash tables (rainbow tables) to crack passwords by guessing the original password based on the hash value.`

`When a salt is added to a password, the resulting hash will be unique, even if the same password is used by multiple users. This makes it much more difficult for an attacker to crack passwords using brute-force or dictionary attacks.`

`Salting is a common technique used in password storage and authentication systems to improve their security. The salt is usually stored alongside the hashed password in the database, and both the salt and the password are used to verify the user's identity during login.`



# What is JWT?

`JWT stands for JSON Web Token. It is a standard for securely transmitting information between parties as a JSON object. JWT is often used for authentication and authorization purposes in web applications.`

`A JWT consists of three parts: a header, a payload, and a signature. The header contains information about the type of token and the algorithm used to sign the token. The payload contains the information that needs to be transmitted, such as user details or authorization data. The signature is a hash of the header, payload, and a secret key, which is used to verify the integrity of the token.`

`JWT is often used in modern web applications as a replacement for traditional session-based authentication. Unlike sessions, which are stored on the server, JWT is a stateless mechanism that stores authentication information in the client-side cookie or local storage. This makes it easier to scale web applications and allows for more flexible authentication workflows.`

`JWT has gained popularity because of its simplicity, flexibility, and ease of use. It is widely supported by many programming languages and frameworks and can be easily integrated into existing web applications. However, it is important to use JWT correctly and securely, as an improperly implemented JWT can introduce security vulnerabilities into an application.`

# How is JWT different and list the pros and cons of using JWT tokens?

`JWT (JSON Web Tokens) is a popular mechanism for securely transmitting information between parties as a JSON object. Unlike traditional session-based authentication, JWT is stateless and stores authentication information in the client-side cookie or local storage. Here are some of the key differences between JWT and traditional session-based authentication:`

`Pros of using JWT:`

`Stateless: Since JWT is stateless, it is easy to scale web applications and allows for more flexible authentication workflows.`

`Cross-domain support: JWT can be used across different domains and can be easily integrated with Single Sign-On (SSO) systems.`

`Compact and efficient: JWT is compact and efficient, making it easier to transmit data over networks.`

`Flexibility: JWT can be used for various purposes, including authentication, authorization, and data exchange.`

`Cons of using JWT:`

`Security: If JWT is not used properly, it can introduce security vulnerabilities into an application. For example, JWT can be susceptible to Cross-Site Scripting (XSS) attacks if not properly validated on the client-side.`

`Complexity: JWT can be more complex to implement than traditional session-based authentication, especially when it comes to handling token expiration and revocation.`

`Lack of standardization: While JWT is a standard, there are many variations and implementations, which can lead to interoperability issues.`

`Token size: Depending on the amount of data being transmitted, JWT tokens can be relatively large, which can impact network performance.`

`Overall, JWT is a popular choice for modern web applications due to its flexibility and ease of use. However, it is important to use JWT securely and properly, and to understand the potential drawbacks and limitations of the technology.`



