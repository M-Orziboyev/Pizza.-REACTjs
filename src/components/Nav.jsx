export default function Nav() {
    return(
        <nav className="navbar">
            <a className="navbar-brand" href="/">
                LA CARAVANA
            </a>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">
                       Home 
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                       About Us 
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                       Menu
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                       Contact 
                    </a>
                </li>
            </ul>
        </nav>
    )
}