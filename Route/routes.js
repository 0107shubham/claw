import express from "express";
const route = express.Router();

import { signup } from "../controller/signup.js";
import { signin } from "../controller/signin.js";

route.post("/signup", signup);
route.post("/signin", signin);

export default route;
