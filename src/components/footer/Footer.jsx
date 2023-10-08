import React from 'react'

function Footer() {
    return (
        <div id="footer" className="w-100 bg-green3 text-white p-3">
            <a href="#"><h3>NEWS</h3></a>
            <div className="links d-flex">
                <ul className="list-unstyled d-flex justify-content-evenly w-75 ms-5 text-decoration-none">
                    <li><a href="/">Home</a></li>
                    <li><a href="/special/sports">Sport</a></li>
                    <li><a href="/special/arts">Arts</a></li>
                    <li><a href="/special/business">Business</a></li>
                    <li><a href="/special/politics">Politics</a></li>
                    <li><a href="/special/technology">Technology</a></li>
                    <li><a href="/special/style">Style</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer