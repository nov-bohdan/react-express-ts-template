import dotenv from "dotenv";
import express, { Express, Response, Request } from "express";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
