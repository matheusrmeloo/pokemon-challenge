import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

(new Challenge(app)).start();

const callBack = () => {
  return console.log(`server is listening on ${port}`);
};

app.listen(port, callBack);
