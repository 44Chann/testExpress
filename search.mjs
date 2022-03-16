import fetch from "node-fetch";

export const SearchNews = async (q) => {
    let url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data
}