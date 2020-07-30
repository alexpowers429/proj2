import React, { Component } from 'react';
import Header from '../Header/Header'
import App from '../App/App'
import Job from '../Job/Job'

class SeeMore extends Component {
    render() {
        const jobId = this.props.match.params.jobtitle
        const thisJob = this.props.jobs.find(job => job.id=== jobId)  
        return (
            <div>
              <h1>{thisJob.title}</h1>
              <h2>{thisJob.description}</h2>
            </div>
        );
    }
}

export default SeeMore;