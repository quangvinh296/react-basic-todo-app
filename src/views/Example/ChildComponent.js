import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = (status) => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('>>>>> handleOnClickDelete: ', job)
        this.props.deleteAJob(job)
    }


    render() {
        console.log('>>>> call props: ', this.props)

        // let { arrJobs } = this.props;
        let arrJobs = this.props.arrJobs;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>>>>> check conditional: ', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className="btn-show"
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></>
                                            <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}$
//                                 </div>
//                             )
//                         }

//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;