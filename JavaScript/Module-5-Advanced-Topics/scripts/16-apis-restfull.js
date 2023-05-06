/*
APIs RESTFULL:

=> What's a API;
   - Application Programming Interface 
   - Refers to the set of definitions and protocols by which we can program our applications
   - It is a concept that has existed for a long time in programming, but today is used to refers to backend services in web
   - Examples: 
      - The DOM is a form of API, helping us to interact with the document elements
      - When we use a library or a framework, we can say that it has its own APIs, that is, the specific ways we use them to program our applications
      - APIs Rest provide us with patterns to create ways to communicate with a server
=> What's Rest and Restfull:
   - Representation State Transfer
   - It is a set of architectural constraints at organize the communication between client and server
   - A Restfull API is nothing more than a API that follows the Rest architecture
   - When a client makes a request using an Restfull API, it responses by transferring a state representation of the pattern that was requested
   - Main points for an API to be considered Restfull:
      - Client/Server Architecture
      - Communication through HTTP
      - Stateless communication, that is, all requests are separate and independent
      - Have a uniform interface and with information in a standard format
   - Since Restfull APIs work over the http protocol, it uses its methods for communication:
      - GET = obtain information
      - POST = send information
      - PUT/PATCH = request update information/correction
      - DELETE = request information deletion
*/