import React, { Component } from 'react';
import Header from '../components/Header'
import AllBrands from '../components/AllBrands'
import NewBrand from '../components/NewBrand'

// Simple example of aqwa React "smart" component
export default class BrandCont extends Component {
  state = { items: []}
  
  handleSubmit(item) {
    const newState = this.state.items.concat(item); 
    this.setState({ items: newState })
  }
  
  componentDidMount(){
    this.loadItems()
  
  }
  
  loadItems(){
    $.getJSON('/items.json')
    .then((response) => { 
      this.setState({ items: response });
    }); 
  }
  
  render() { 
    return ( 
      <div>
        <Header/>
        <NewBrand handleSubmit={this.handleSubmit.bind(this)}/>
        <AllBrands items={this.state.items}/> 
      </div> ) 
  }
}