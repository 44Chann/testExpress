import express from "express";
import { fetchNews } from "./fetchHeadlines.mjs";
import { SearchNews } from "./search.mjs";
const app = express();
const port = process.env.PORT || 5000;



// archive data into db
const archiveInDb = () => {
    return null;
}


app.get('/headlines', (req, res) => {
    (
        async () => {
            const data = await fetchNews(req.query.country);
            console.log(data)
            res.json(data);
        }
    )()
    console.log(`development stared at ${port}`)
    console.log(req.query.country)

})


app.get('/search', (req, res) => {
    (
        async () => {
            const data = await SearchNews(req.query.value)
            res.json(data)
            console.log(data)
        }
    )
})


app.get('/archive', (req, res) => {
    (
        async () => {

        }
    )()
})

app.listen(port)