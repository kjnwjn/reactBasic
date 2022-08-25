import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {withRouter} from 'react-router-dom'

class User extends React.Component {
    state = {
        listuser : []
    }
    async componentDidMount(){
        let res = await axios.get('https://reqres.in/api/users?page=1')
        const dataUser = res.data.data
        this.setState({listuser: dataUser ? dataUser : []})
    }
    handleNexpage = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render(){
        let {listuser} = this.state
        return (
            <>
                <div>User component</div>
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
                        (listuser && listuser.length > 0) && 
                        listuser.map((userItem,index) =>{
                            return(
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{userItem.first_name}</td>
                                    <td>{userItem.last_name}</td>
                                    <td>{userItem.email}</td>
                                    <td><Button variant="outline-info" type='button' onClick={() => this.handleNexpage(userItem)}>Detail</Button></td>
                                </tr>
                       
                            )
                        })
                    }
                        
                    </tbody>
                </Table>    
            </>
        )
    }
}

export default withRouter(User)