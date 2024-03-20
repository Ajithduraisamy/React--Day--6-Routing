import { Link } from "react-router-dom";
import './App.css'

function Navbar() {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link">ALL</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/fullstackdevelopment"} className="nav-link">FULL STACK DEVELOPEMENT</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/datascience"} className="nav-link">DATA SCIENCE</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/cybersecurity"} className="nav-link">CYBER SECURITY</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/career"} className="nav-link">CAREER</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar