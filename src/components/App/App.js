import React, { Component } from 'react';
import Header from '../Header/Header'
import Joblist from '../JobList/JobList';
import {Route, Link} from 'react-router-dom'
import Job from "../Job/Job"

const jobUrl =
	'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
    }
  }

  componentDidMount() {
    fetch(jobUrl)
    .then((res) => res.json())
    .then((json) => {
      this.setState({jobs: json})
     
    })

    .catch(err => {
      console.error(err)
    })
  }
  render() {
    return (
      <div className= 'jobs'>
        
        <Header />
        <Route path='/' exact render={() =>{
          return <Joblist jobs={this.state.jobs} />
        }} />
        
      </div>
    );
  
  }
}

export default App;
