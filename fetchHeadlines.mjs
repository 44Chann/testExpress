import fetch from 'node-fetch';

let API_KEY = "8d0ccc8b9174417aa93d627465cb0b3e"


export const fetchNews = async (country = "us") => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data
}