import React from 'react'

class AddComponent extends React.Component {

    state = {
        titleJob : '',
        salary : ''
    }

    handleJobChange = (e) =>{
        this.setState({
            titleJob : e.target.value,
        })
    }
    handleSalaryChange = (e) =>{
        this.setState({
            salary : e.target.value
        })
    }
    handleSumitBtn = (e) =>{
        e.preventDefault()
        console.log('>>>> state: ', this.state)
        if(!this.state.titleJob || ! this.state.salary){
            alert('you must provide all the required ')
            return ;
        }
        this.props.addNewJob({
            id : Math.floor(Math.random() * 100001),
            titleJob : this.state.titleJob,
            salary : this.state.salary,
        })

        this.setState({
            titleJob : '',
            salary: ''
        })


    }
    render(){
    
        return(

            <>

                <form >
                    <label htmlFor="fname">Job's title:</label><br/>
                    <input type="text" value={this.state.titleJob} onChange={(e) => this.handleJobChange(e)}/><br/>
                    <label htmlFor="lname">Salary:</label><br/>
                    <input type="text" value={this.state.salary} onChange={(e) => this.handleSalaryChange(e)}/><br/><br/>
                    <input type="submit" onClick={(e)=> this.handleSumitBtn(e)}/>
                </form> 
            </>
        )
    }
}

export default AddComponent