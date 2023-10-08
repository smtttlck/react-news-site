import React from "react"
import './BigCard.css'

const BigCard = ({ news }) => {

    const dateConverter = time => {
        var date = String(time).split("T")[0]
        date = date.split("-")
        date = date[1] + "/" + date[2] + "/" + date[0]
        return date
    }

    return (
        <div className="big-cards">
            {news?.map((value, index) => (
                <div className="big-card" key={index}>
                    <a href={value.url}>
                        <img src={value.multimedia[0].url} alt="..." />
                        <div className="title">
                            <b>{value.title}</b>
                        </div>
                        <p className="text-grey">{value.abstract}</p>
                        <em>{dateConverter(value.updated_date)}</em>
                    </a>
                </div>

            ))}
        </div>
    )
}

export default BigCard