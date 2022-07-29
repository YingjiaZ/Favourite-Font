import React from "react";
import { MinorNavItems } from "./MinorNavItems";
import { Link } from 'react-router-dom'

class MinorNav extends React.Component {
    render() {
        return (
            <nav className="MinorNavItems">
                <h1><Link className="MinorNav-logo" to={"/"}>GoogleFonts</Link></h1>
                <ul>
                    {MinorNavItems.map(item => {
                        return (
                            <li key={item.title}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default MinorNav