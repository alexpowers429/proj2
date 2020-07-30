import React, { Component } from 'react';
import Header from '../Header/Header'
import App from '../App/App'
import Job from '../Job/Job'

class SeeMore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            job: {
                title: "",
                description: "",
                how_to_apply: "",

            }
        }
    }
    componentDidMount() {
        const jobId = this.props.match.params.id
        // const this.state.job = this.props.jobs.find(job => job.id=== jobId)  
        fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${jobId}.json`)
        .then((res) => res.json())
        .then((json)=> this.setState({job:json}))
        .catch(console.error)
    }
   createMarkup = (html) => {
    
  return {__html: html};
}


    render() {
        return (
					<div>
						<h1>{this.state.job.title}</h1>
						<div
							dangerouslySetInnerHTML={this.createMarkup(
								this.state.job.description
							)}
						/>
						<h3>Apply here:</h3>
						<div
							dangerouslySetInnerHTML={this.createMarkup(
								this.state.job.how_to_apply
							)}
						/>
					</div>
				);
    }
}

export default SeeMore;