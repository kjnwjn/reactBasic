import React from 'react';
import {connect} from 'react-redux'

class Home extends React.Component {
    handleDelete = (item) => {
       this.props.deleteUser(item)
    }

    handleAddItem = () =>{
        console.log('123')
       this.props.addNewUser()
    }
    render() {
        const listUser = this.props.dataRedux
        return (
            <>
                <div>Hello world</div>

                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item,index) => {
                            return(
                                <div key={item.id}>
                                    {index + 1} - {item.name} <soan onClick={() =>this.handleDelete(item)}>x</soan>
                                </div>
                            )
                        })
                    }
                    <button type='button' onClick={() => this.handleAddItem()}>add new</button>
                </div>
            </>
        )

    }
}

const mapStateToProps = (state) =>{
    return {
        dataRedux  : state.users
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        deleteUser : (userdelete) =>  dispatch({type : 'DELETE_USER',payload : userdelete}),
        addNewUser : () =>  dispatch({type : 'ADD_USER'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)