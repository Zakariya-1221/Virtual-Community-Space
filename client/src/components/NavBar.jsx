import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><h1>Sporting Events</h1></li>
            </ul>
            <ul>
                <li><Link to='/'>All Events</Link></li>
                <li><Link to='/platform/Basketball'>Basketball</Link></li>
                <li><Link to='/platform/Soccer'>Soccer</Link></li>
                <li><Link to='/platform/Football'>Football</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
