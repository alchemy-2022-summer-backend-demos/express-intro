// app.js
const { response } = require("express");
const express = require("express");

const app = express();

// Built in middleware
app.use(express.json());

// app.use("/dogs/:id", (req, res) => {
//   console.log(req.params.id);
//   res.json({ name: "Benny", age: 7 });
// });

// app.use("/dogs", (req, res) => {
//   res.json([
//     { name: "Benny", age: 7 },
//     { name: "Jeep", age: 4 },
//   ]);
// });

app.use("/api/v1/dogs", require("./lib/controllers/dogs.js"));

app.listen(3000, () => {
  console.log(`🚀  Server started on Port 3000`);
});
