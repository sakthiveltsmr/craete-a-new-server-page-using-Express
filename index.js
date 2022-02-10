const http = require("http");
const port = 3001;
const user = [
  {
    id: 1,
    name: "sakthi",
    title: "webdeveloper",
  },
  {
    id: 2,
    name: "sadheesh",
    title: "system admin",
  },
  {
    id: 3,
    name: "thiru",
    title: "software Engineer",
  },
];
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/user" && req.method === "GET") {
    res.write(JSON.stringify(user));
    res.end();
  }
});
server.listen(port);
console.log(`server running at ${port}`);
