import React from "react"

const Slider = ({ news }) => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide w-100" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {news.results?.slice(0, 13).map((x, index) => (
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index}
                        className={(index == 0) ? "active" : ""} aria-current={(index == 0) ? "true" : "false"}
                        aria-label={`Slide${index + 1}`} key={index}>
                    </button>

                ))}
            </div>
            <div className="carousel-inner">
                {news.results?.slice(0, 13).map((x, index) => (
                    <div className={(index == 0) ? "carousel-item active" : "carousel-item"} key={index}>
                        <a href={x.url}>
                            <img src={x.multimedia[0].url} className="d-block w-100 m-auto" alt="..."
                                style={{height: "550px"}} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{x.title}</h5>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div >
    )
}

export default Slider