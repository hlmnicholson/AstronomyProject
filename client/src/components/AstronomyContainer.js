import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard.js';
import Search from './Search.js';
import './AstronomyContainer.css';

class AstronomyContainer extends Component {
  constructor() {
    super();
    this.state = {
        astronomy : { title: '', url: '', hdurl: '', explanation: '', date: '', copyright: '' }
    }
  }

  UNSAFE_componentWillMount() {
     fetch('/api')
      .then(res => res.json())
      .then(json => this.setState({ astronomy: json }))
      .catch(error => console.log(error, 'Fetch request unsuccessful'))
  }

  componentDidMount() {
    this.fetchData();
  }
//assign first fetch to constant, await it and then do this.fetchData (after i have the constant - short circuit)
  fetchData = (searchValue) => {
        fetch(`/api/${searchValue}`)
        .then(res => res.json())
        .then(json => this.setState({ astronomy: json}))
        .catch(error => console.log(error, 'Fetch request unsuccessful'))

  }

  render() {
    const { astronomy } = this.state;
        return (
            
            <div className='AstronomyContainer'>
            <AstronomyCard data={astronomy} />
            <Search onSubmit={this.fetchData} />
            </div>
        )
    }

}

export default AstronomyContainer;

