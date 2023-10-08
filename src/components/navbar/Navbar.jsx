import React from "react"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-green2 w-100">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NEWS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex justify-content-evenly w-75 ms-5">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/special/sports">Sport</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/special/arts">Arts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/special/business">Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/special/politics">Politics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/special/technology">Technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/special/style">Style</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar