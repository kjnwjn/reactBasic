import axios from 'axios';
import {Component} from 'react';
import SearchBoxForMonster from '../../components/SearchBox/SearchBoxForMonster.component';
import CardList from '../../components/CardList/CardList.component';
class ListMonster extends Component {
    state = {
        monsters: [],
        searchValue:''
    }
    async componentDidMount(){
        let listMonster = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({monsters : listMonster && listMonster.data ? listMonster.data : []})
    }
    handleSearchBoxMonster = (e)=>{
        this.setState({
            searchValue : e.target.value
        })
    }

    render(){
        let {monsters} = this.state
        let {searchValue} =this.state
        let copyMonsters = monsters.filter((item) =>  item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        return (
            <div>
                <h1 className='title-monster'>MONSTER ROLEX</h1>
                <SearchBoxForMonster placeholder="Search" handleSearchBoxMonster={this.handleSearchBoxMonster}/>
                <CardList copyMonsters={copyMonsters}/>
            </div>
        )
    }
}
export default ListMonster