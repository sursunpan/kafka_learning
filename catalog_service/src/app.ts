import express from "express";
import cors from "cors";
import morgan from "morgan";
import catalogRouter from "./api/catalog.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/", catalogRouter);

export default app;
