import React from "react";
import { useEffect, useState } from "react";

function BackToTop () {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        })
    });

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
    return (
        <div className="back-to-top">
            {visible && (<button onClick={scrollUp}></button>)}
        </div>
    );
};

export default BackToTop;