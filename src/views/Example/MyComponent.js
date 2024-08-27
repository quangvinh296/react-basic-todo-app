import { render } from "@testing-library/react";
import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        // let currentJob = this.state.arrJobs
        // currentJob.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJob
        })
    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    /**
     * JSX
     * React.Fragment
     * 
     */

    render() {
        console.log('>>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;