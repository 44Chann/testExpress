import NewsAPI from 'newsapi';
const newsapi = new NewsAPI('8d0ccc8b9174417aa93d627465cb0b3e');
let Articles = []

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
export const fu = () => {

    let data = newsapi.v2.topHeadlines({ country: 'us' }).then(response => response.articles)
    return data
    // console.log(Articles)

}
