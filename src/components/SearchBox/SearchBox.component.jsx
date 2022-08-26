import { Component } from "react";

class SearchBox extends Component {
    render(){
        return(
            <div><input type="search" className="search-box" placeholder={this.props.placeholder} onChange={(e)=> this.props.handleSearchBox(e)}></input></div>
        )
    }
}

export default SearchBox