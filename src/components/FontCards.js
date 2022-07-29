import React from "react";
import raw from "../api.txt"

var url = '';
fetch(raw)
  .then(r => r.text())
  .then(text => {
    url = text;
    // console.log('text decoded:', text);
});

class FontCards extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          fonts: [],
        }
    }
    // fetch json file using google fonts developer API
    componentDidMount()
    {
        fetch(url)
        .then((response) => response.json())
        .then((findresponse)=>{
            console.log(findresponse.items)
            this.setState({
                fonts:findresponse.items,
            })
        })
    }
    render() {
        return (
            <div className="cards-container">
                {this.state.fonts.filter(item => {
                    if (this.props.fontFilter === '') {
                        return item
                    } else if (item.family.toLowerCase().includes(this.props.fontFilter.toLowerCase())) {
                        return item
                    }
                }).map(item => {
                    return (
                        <div className="card" key={item.family}>
                            <link rel={"stylesheet"} href={"https://fonts.googleapis.com/css?family=" + item.family}></link>
                            {/* <article > */}
                                <div className="font-title">{item.family}</div>
                                <p className="content" style={{fontFamily: item.family, fontSize: this.props.fontSize}}>{this.props.input}</p>
                            {/* </article> */}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FontCards