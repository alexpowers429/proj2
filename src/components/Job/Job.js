import React, { Component } from 'react';
import {Link } from 'react-router-dom'


class Job extends Component {
    render() {
        return (
					<div className='job'>
						<ol>
							<li> Title: {this.props.jobs.title}</li>
							<li>Posted on: {this.props.jobs.created_at}</li>
							<li>Company: {this.props.jobs.company}</li>
							<li>Location: {this.props.jobs.location}</li>
							<li>Employment Status: {this.props.jobs.type}</li>
						</ol>
						<Link className="btn" to={'/SeeMore/' + this.props.jobs.id}>See More</Link>
					</div>
				);
    }
}

export default Job;