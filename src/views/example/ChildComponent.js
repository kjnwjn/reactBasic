import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
        showJobs: !this.state.showJobs
    })
  }
  handleDelete = (job) => {
    console.log(job)
    this.props.deleteJob(job)
  }
  render() {
    let { name, jobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
      {!showJobs ?
        <div>
          <button onClick={() => this.handleShowHide()}>show</button>
        </div>
        :
          <>
            <div>
              {jobs.map((job) => {
                if (job.salary >= 500) {
                  return (
                    <div key={job.id}>
                      titleJob : {job.titleJob} - salary : {job.salary} <><span onClick={()=> this.handleDelete(job)}>x</span></>
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>hide</button>
            </div>
          </>
        }
      </>
    );
  }
}

export default ChildComponent;
