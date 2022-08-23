import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {
  state = {
    title : ''
  }

  handleAddBtn(){
    if(!this.state.title){
      toast.error("Please enter your title")
      return
    }
    this.props.handleAddToDo({
      id : 'todo' + Math.floor(Math.random() * 100001),
      title : this.state.title
    })
    toast.success("Add todo success!")
    this.setState({
      title : ''
    })
  }
  handleInputChange = (e) => {
    this.setState({ title: e.target.value })
  }
 
  render() {
    return (
      <div className="to-do-Add">
        <input type="text" value={this.state.title} onChange={(e) => this.handleInputChange(e)}/>
        <button type="button" onClick={() => this.handleAddBtn()}>Add</button>

        
      </div>
    );
  }
}

export default  AddToDo
