/*
HTTP REQUESTS:

=> HyperText Transfer Protocol
=> Communication Protocol
=> CLient-Server Architecture:
   - A client (usually a browser) send requesta to a server
   - Server (usually a machine accessible over the internet) receives the request, processes it and sends it back to the client
=> HTTP Characteristics:
   - Simple, easy to understand and use
   - Extensible, allows to add new functionalities easily
   - Stateless, or no state (but with section)
=> Messages Structure:
   - Requests:
      - Method: defines the type of operation to be performed (GET, POST, OPTIONS, HEAD, etc)
      - Path: the resource path to be obtained, basically the resource URL without the initial part (protocol, domain and port)
      - Versions: It's necessary to define the version being used
      - Header: additional information about client and server
      - Body: message content, using, per example, when sending data via post (it's not mandatory)
   - Responses:
      - Code and status messages
         - A code and a short description that indicate if a request was successful or not (and the reason)
         - Popular Examples: 
            - 200 = success
            - 301 = redirection (motive permanently)
            - 404 = not founded
            - 500 = internal server error
      - Version: protocol version, as in requests
      - Header: additional information about client and server, as in requests
      - Body:  optionally can own a body, that is the message content (as a html page or a json document)
=> Examples:
   - When we type a website address into a browser we are sending a request that will receive the response with an html document
   - When we request information to a API Restfull we send a request that will receive a response containing a json document
*/