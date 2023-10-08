import React from 'react'
import { useNavigate } from 'react-router-dom'

const Widget = ({ title, news }) => {

    const navigate = useNavigate()
    
    return (
        <div className="widget w-25 bg-white my-2">
            <div className="heading bg-green1 p-2 text-white d-md-flex justify-content-between">
                <h4>{title}</h4>
                <button className="bg-white h-25" onClick={() => navigate(`/special/${title}`)}>
                    Visit {title}
                </button>
            </div>
            <a href={news?.[0].url}>
                <div className="first-new d-flex align-items-end position-relative">
                    <img className="w-100" style={{height: "250px"}} 
                        src={news?.[0].multimedia?.[0].url} alt="..." />
                    <h5 className="position-absolute text-white px-2 text-shadow">
                        {news?.[0].title}
                    </h5>
                </div>
            </a>
            <div className="others">
                <ul className="list-group">
                    {news?.map((value, index) => (
                        (index != 0) ? (
                            <li className="py-2 list-group-item border" key={index}>
                                <a href={value.url}>
                                    <p className="w-100">{value.title}</p>
                                </a>
                            </li>
                        ) : ("")
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Widget