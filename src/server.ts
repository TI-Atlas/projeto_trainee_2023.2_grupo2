import "reflect-metadata";
import express from "express";
import './database';
import { routes } from "../src/routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log('server running on port 3333'));