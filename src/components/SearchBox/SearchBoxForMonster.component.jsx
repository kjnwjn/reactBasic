import { Component } from "react";
import  '../../components/SearchBox/SearchBoxForMonster.style.scss';

class SearchBoxForMonster extends Component {
    render(){
        return(
            <div><input type="search" className="search-box" placeholder={this.props.placeholder} onChange={(e)=> this.props.handleSearchBoxMonster(e)}></input></div>
        )
    }
}

export default SearchBoxForMonster