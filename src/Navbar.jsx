import { Link, NavLink } from "react-router-dom"
import { useState } from "react";
import "./Navbar.css"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return <div>
        <nav>
            <Link to="/" className="title">ALLEN</Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/Exams">Exams</NavLink>
                </li>
                <li>
                    <NavLink to="/Programs">Programs</NavLink>
                </li>
                <li>
                    <NavLink to="/Scholarships">Scholarships</NavLink>
                </li>
                <li>
                    <NavLink to="/Test-Series">Test Series</NavLink>
                </li>
                
            </ul>
        </nav>
    </div>
    
}

export default Navbar