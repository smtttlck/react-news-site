import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import News from '../../components/news/News'
import Widget from '../../components/widget/Widget'
import Footer from '../../components/footer/Footer'
import BigCard from '../../components/bigCard/BigCard'
import * as api from '../../api/Api'

const Home = () => {

  const [news, setNews] = useState([])
  const [styleNews, setStyleNews] = useState([])
  const [artNews, setArtNews] = useState([])
  const [businessNews, setBusinessNews] = useState([])  

  useEffect(() => {
    const get = async () => {
      setNews(await api.fetchData("home"))
      setStyleNews(await api.fetchData("style"))
      setArtNews(await api.fetchData("arts"))
      setBusinessNews(await api.fetchData("business"))
    }
    get()
  }, [])  

  return (
    <div>
      <Navbar />
      <News news={news} />
      <BigCard news={news.results?.slice(22, 26)} />    
      <div className="d-flex justify-content-evenly m-2">
        <Widget title="Style" news={styleNews.results?.slice(0, 6)} />
        <Widget title="Art" news={artNews.results?.slice(0, 6)} />
        <Widget title="Business" news={businessNews.results?.slice(0, 6)} />
      </div>
      <Footer />
    </div>
  )
}

export default Home