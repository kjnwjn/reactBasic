import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs : [
            {
                id : '123sadnas', titleJob : 'worker', salary : '500' 
            },
            {
                id : '943912221', titleJob : 'assistant', salary : '500' 
            },
            {
                id : '7421jksaj', titleJob : 'engineer', salary : '400' 
            },
        ]
    }
    
    addNewJob = (job) => {
        this.setState({
            arrJobs : [...this.state.arrJobs, job]
        })
    }
    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id) 
        this.setState({
            arrJobs : currentJobs
        })
    }
   
    render(){

        return (
            <>
                <div>
                    <h1>Hello world HTML FORM</h1>
                </div>
                <AddComponent addNewJob = {this.addNewJob}/>

              

                <ChildComponent 
                    jobs={this.state.arrJobs}

                    deleteJob = {this.deleteJob}
                />
            </>
        );
    } 
}

export default MyComponent
