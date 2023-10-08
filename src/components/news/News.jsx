import React from "react"
import './News.css'
import Slider from "../slider/Slider"

const News = ({ news }) => {

    return (
        <div className="d-flex justify-content-center">
            <div id="news" className="w-75 d-flex justify-content-center my-4 flex-wrap">
                {news.results?.slice(13, 16).map((value, index) => (
                    <a href={value.url} key={index}>
                        <div className="new-box m-2">
                            <img src={value.multimedia[0].url} alt="..." />
                            <div className="text bg-green3 h-100 text-white">
                                <h5 className="px-1">{value.title}</h5>
                            </div>
                        </div>
                    </a>
                ))}
                <Slider news={news} />
                {news.results?.slice(16, 22).map((value, index) => (
                    <a href={value.url} key={index}>
                        <div className="new-box m-2">
                            <img src={value.multimedia?.[0].url} alt="..." />
                            <div className="text bg-green3 h-100 text-white">
                                <h5 className="px-1">{value.title}</h5>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default News