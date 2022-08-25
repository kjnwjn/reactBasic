import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class UserDetail extends React.Component {

    state = {
        UserDetail : {} 
    }
    async componentDidMount(){
        const id = this.props.match.params.id
        let res = await axios.get(`https://reqres.in/api/users/${id}`)
        this.setState({ 
            UserDetail : res.data && res.data.data ? res.data.data : {}
        })
    }

    handlePrevPage = () => {
        this.props.history.goBack();
    }
    render(){
        const {UserDetail} = this.state;
        return(
            <>
                <div>
                    User Detail
                </div>
                <div>First Name  : {UserDetail.first_name}</div>
                <div>Last Name  : {UserDetail.last_name}</div>
                <img src={UserDetail.avatar}></img>
                <div>
                    <Button variant="outline-info" onClick={this.handlePrevPage}>Prev</Button>
                </div>
            </>
        )
    }
}

export default withRouter(UserDetail);