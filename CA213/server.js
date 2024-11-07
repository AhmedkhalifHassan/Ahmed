const http = require("http");

// Create a server instance
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Welcome to the server! " + req.method);
      break;
    case "/login":
      res.end("Do you want to login?");
      break;
    case "/register":
      res.end("Do you want to register?");
      break;
    default:
        res.end('Page not found')
      break;
  }
});

// List on a specific port
server.listen(5000, "localhost", () => {
  console.log("Listening on port 5000");
});
