import React, { Component } from 'react';
import Job from '../Job/Job';

class JobList extends Component {
	render() {
		const renderJob = this.props.jobs.map((jobs) => {
			return <Job key={jobs.title} jobs={jobs} />;
		});

		return <div className='job-list'>{renderJob}</div>;
	}
}

export default JobList;
