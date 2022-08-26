import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {withRouter} from 'react-router-dom'
import SearchBox from '../../components/SearchBox/SearchBox.component';

class User extends React.Component {
    state = {
        listuser : [],
        searchValue : '', 
    }
    async componentDidMount(){
        let res = await axios.get('https://reqres.in/api/users?page=1')
        const dataUser = res.data.data
        this.setState({listuser: dataUser ? dataUser : []})
    }
    handleNexpage = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    handleSearchBox = (e) => {
        this.setState({
            searchValue : e.target.value
        })
       
    }
    render(){
        let {searchValue} = this.state
        let {listuser} = this.state
        let a = listuser.filter((item)=> item.last_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        return (
            <>
                <div>User component</div>
                <SearchBox placeholder='Search' className='searchBox' handleSearchBox={this.handleSearchBox}/>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>STT</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        (a && a.length > 0) ?
                        a.map((userItem,index) =>{
                            return(
                                <tr key={userItem.id}>
                                    <td>{index + 1}</td>
                                    <td>{userItem.first_name}</td>
                                    <td>{userItem.last_name}</td>
                                    <td>{userItem.email}</td>
                                    <td><Button variant="outline-info" type='button' onClick={() => this.handleNexpage(userItem)}>Detail</Button></td>
                                </tr>
                       
                            )
                        })
                        :
                            <tr><td colSpan={5}>Don't have any people match</td></tr>
                    }
                        
                    </tbody>
                </Table>    
            </>
        )
    }
}

export default withRouter(User)