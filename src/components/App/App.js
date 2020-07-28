import React, { Component } from 'react';
import Header from '../Header/Header'
import Joblist from '../JobList/JobList';
import {Route, Link} from 'react-router-dom'
import Job from "../Job/Job"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
    }
  }

  componentDidMount() {
    fetch('https://jobs.github.com/positions.json')
    .then((res) => res.json())
    .then((json) => {
      this.setState({jobs: json})
    })
  }
  render() {
    return (
      <div className='Jobs'>
        <p>Jobs</p>
        <Header />
        <Route path='/' exact render={() =>{
          return <Joblist jobs={this.state.jobs} />
        }} />
        
      </div>
    );
  
  }
}

export default App;
