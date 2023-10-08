const key = "bXwLGQW7rRZXSxDgtoDRGZBb235AAlf8"

export const fetchData = async page => {
    const url = `https://api.nytimes.com/svc/topstories/v2/${page}.json?api-key=${key}`
    return await (await fetch(url)).json()
}