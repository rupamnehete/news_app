import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
    bgColor = 'dark'
    render() {
        return (
            <>
                <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.bgColor} bg-${this.bgColor}`} >
                    <div className="container-fluid my-6">
                        <Link className="navbar-brand" href="/">Sunshine News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                {/* <li className="nav-item"><Link className="nav-link" to="/">General</Link></li> */}
                                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>                            </ul>
                        </div>
                    </div>
                </nav >
            </>
        )
    }
}

export default Navbar
