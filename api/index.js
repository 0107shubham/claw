import express from "express";
import route from "../Route/routes.js"; // Updated import statement
const app = express();
import cors from "cors";

const port = process.env.PORT || 3000;
app.use(cors());
console.log("woking id");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("woking id");
app.get("/", (req, res) => {
  res.send("Hello, World for shbham!");
});
app.get("/status", (req, res) => {
  res.send("Hello, World for status!");
});

app.get("/status/:name", (req, res) => {
  console.log("woking id");
  const { name } = req.params;

  res.send(`name, ${name}!`);
});
// app.post("/user", (req, res) => {
//   const { user, password } = req.body;

//   res.json({ message: "woking", data: { user, password } });
//   console.log(user, "username");
// });

app.use("/", route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;

// jgGveqcnm7rbWicH
