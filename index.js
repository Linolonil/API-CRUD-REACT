import express from "express";
import useRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.use("/", useRoutes);

app.listen(8800);
