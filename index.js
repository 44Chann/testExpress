import express from "express"
const app = express();
import bodyParser from "body-parser";
import cors from "cors"
const port = 3001;
import { fu } from "./fetch.mjs"
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})


app.get("/", async (req, res) => {
    let data = await fu()
    console.log(data)
    res.send(data)
    console.log("data sent")
})


app.listen(port, () => console.log(`hello world listning on port ${port}`))