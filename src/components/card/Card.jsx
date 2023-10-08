import React from "react"

const Card = ({ news }) => {

    const leftNews = news?.slice(0, 5)
    const rightNews = news?.slice(5, 10)

    return (
        <div className="cards d-lg-flex">
            <div className="left-cards w-75">
                {leftNews?.map((value, index) => (
                    <a href={value.url} key={"left"+index}>
                        <div className="left-card d-lg-flex justify-content-evenly border">
                            <div className="text col-lg-3">
                                <h5>{value.title}</h5>
                                <p className="text-grey">{value.abstract}</p>
                            </div>
                            <div className="image overflow-hidden">
                                <img src={value.multimedia[0].url} alt="..."
                                    style={{ width: "600px", height: "350px"}} />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <div className="right-cards w-25">
                {rightNews?.map((value, index) => (
                    <a href={value.url} key={"right"+index}>
                        <div className="right-card border-left border-bottom text-center mb-2 p-1 overflow-hidden">
                            <img src={value.multimedia[0].url} alt="..."
                                style={{ width: "300px", height: "250px" }} />
                            <h5>{value.title}</h5>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Card