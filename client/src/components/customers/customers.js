import React, { Component } from 'react';
import './customers.css';
import fetch from 'node-fetch';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    fetch('/api/apollo11')
      .then(res => res.json())
      .then(data => this.setState({ data : data.collection }, () => console.log('data fetched..', data.collection.href)));
  }

  render() {
    return (
    <div>
      <h2>Customers</h2>
      <p>
      {this.state.data.map(data => 
<li key={data.collection.href}>{ data.collection.href } { data.collection.href }</li>)}
        </p>
    </div>
    
    )};
}

//frontend request for data that will be sent as a query to end of api link on backend in order to reach
//NASA API
// const api_url = `weather/${lat},${lon}`;
// const response = await fetch(api_url);
// const json = await response.json();
// console.log(json);
/* <ul>  
{this.state.data.map(data => 
<li key={data.collection.href}>{ data.collection.href } { data.collection.href }</li>)}

</ul> */

export default Customers;
