// creating a new server usign express
const express = require("express");
const app = express();

const port = 3002;

app.listen(port, () => console.log(`The server run at ${port}`));

//middle ware

app.use("/post", (req, res, next) => {
  console.log("middle ware 1 called");
  next();
});
app.use("/user", (req, res, next) => {
  console.log("middle ware 2 called");
  next();
});
app.use((req, res, next) => {
  console.log("common middle ware called");
  next();
});

//user get put delet post method
//post API Routes

app.get("/post", (req, res, next) => {
  console.log("get method called");
  //   next();
});
app.put("/post", (req, res, next) => {
  console.log("put method called");
  //   next();
});
app.post("/post", (req, res, next) => {
  console.log("post method called");
  //   next();
});
app.delete("/post", (req, res, next) => {
  console.log("delete method called");
  //   next();
});
