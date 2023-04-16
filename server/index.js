import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import Connection from "./database/db.js";                                                      
import router from "./routes/user.route.js";                                                    

dotenv.config();

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", router);
const port = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

await Connection(USERNAME, PASSWORD);

app.listen(port, () => {
  console.log(`Server is Running Successfully on port ${port}`);
});
