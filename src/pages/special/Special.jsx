import React, { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Module from '../../components/module/Module'
import * as api from '../../api/Api'
import Card from "../../components/card/Card"
import { useParams } from "react-router-dom"

const Special = () => {

    const [news, setNews] = useState()

    const { theme } = useParams()

    useEffect(() => {
        const get = async () => setNews(await api.fetchData(theme))
        get()
    }, [])

    const urlConverter = value => {
        let url
        switch (value) {
            case "sports":
                url = "https://cdn.pixabay.com/photo/2014/10/14/20/24/football-488714_1280.jpg"
                break
            case "arts":
                url = "https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039_1280.jpg"
                break
            case "business":
                url = "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg"
                break
            case "politics":
                url = "https://cdn.pixabay.com/photo/2019/05/26/08/00/handshake-4229703_1280.jpg"
                break
            case "technology":
                url = "https://cdn.pixabay.com/photo/2014/09/20/13/52/board-453758_1280.jpg"
                break
            case "style":
                url = "https://cdn.pixabay.com/photo/2016/03/27/22/05/necktie-1284463_1280.jpg"
                break
            
        }
        return url
    }

    return (
        <div>
            <Navbar />
            <Module
                title = {theme}
                news = {news?.results.slice(0, 3)}
                imageUrl = {urlConverter(theme)}
            />
            <Card news = {news?.results.slice(3, 13)} />
            <Footer />
        </div>
    )
}

export default Special