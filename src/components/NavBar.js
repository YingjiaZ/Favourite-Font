import React from "react";
import FontCards from "./FontCards";

const options = [
    '24px', '32px', '40px', '44px'
  ];

const contentDefault = 'Then came the night of the first falling star.'

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          input: contentDefault, // display content, set as property of fontcards
          fontFilter: '',
          fontSize: options[0]
        }
        this.changeContent = this.changeContent.bind(this);
        this.searchFonts = this.searchFonts.bind(this);
        this.changeFontSize = this.changeFontSize.bind(this);
        this.reset = this.reset.bind(this);
    }
    changeContent (event) {
        this.setState({
            input: event.target.value === '' ? contentDefault : event.target.value  // if empty display default
        })
    }
    searchFonts (event) {
        this.setState({
            fontFilter: event.target.value
        })
    }
    changeFontSize (event) {
        this.setState({
            fontSize: event.target.value
        })
    }
    reset () {
        this.setState({
            input: contentDefault, // display content, set as property of fontcards
            fontFilter: '',
            fontSize: options[0]
        })
        document.getElementById('inputFont').value = '';
        document.getElementById('inputContent').value = '';
        document.getElementById('inputFontSize').value = options[0];
    }
    render() {
        return (
            <div>
                <div className="NavBar-container">
                    <form className="NavBar">
                        <input className="search-font" id="inputFont" type="text" placeholder="Search font" onChange={this.searchFonts}/>

                        <input className="type-something" id="inputContent" type="text" placeholder="Type something" onChange={this.changeContent}/>

                        <select className="font-selector" id="inputFontSize" onChange={this.changeFontSize}>{options.map(item => {
                            return <option key={item}>{item}</option>
                        })}</select>

                        <button className="reset-button" type="button" onClick={this.reset}></button>
                    </form>
                </div>
                <FontCards input={this.state.input} fontFilter={this.state.fontFilter} fontSize={this.state.fontSize}/>
            </div>
        )
    }
}

export default NavBar