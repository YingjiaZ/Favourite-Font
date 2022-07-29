import React from "react";
import { MinorNavItems } from "./MinorNavItems";

class MinorNav extends React.Component {
    render() {
        return (
            <nav className="MinorNavItems">
                <h1><a href="/" className="MinorNav-logo">GoogleFonts</a></h1>
                <ul>
                    {MinorNavItems.map(item => {
                        return (
                            <li key={item.title}>
                                {/* use nav link normally */}
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default MinorNav