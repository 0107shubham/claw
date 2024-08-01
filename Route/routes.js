import express from "express";
const route = express.Router();

// Import controller functions
import { signup } from "../controller/signup.js";
import { signin } from "../controller/signin.js";
import { createTodo } from "../controller/createTodo.js";
import { getTodo } from "../controller/getTodo.js";
import { updateTodo } from "../controller/updateTodo.js";

// User routes
route.post("/signup", signup);
route.post("/signin", signin);

// Todo routes
route.post("/todos", createTodo); // Create a new todo
route.get("/todos/:id", getTodo); // Get a todo by ID
route.put("/todos/:id", updateTodo); // Update a todo by ID

export default route;
