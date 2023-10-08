import React from 'react'
import './Module.css'

const Module = ({ title, news, imageUrl }) => {
    return (
        <div className="module p-1" style={{ background: `url(${imageUrl})` }}>
            <div className="heading text-white p-3">
                <h1>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
            </div>
            <div className="d-flex justify-content-evenly">
                {news?.map((value, index) => (
                    <div className="big-box w-25" key={index}>
                        <a href={value.url}>
                            <img className="d-block m-auto w-100" src={value.multimedia[0].url} alt="..." />
                            <div className="text bg-white h-100">
                                <h5 className="p-1">{value.title}</h5>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Module