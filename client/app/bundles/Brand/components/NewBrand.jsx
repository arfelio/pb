import React, { PropTypes } from 'react';
export default class Header extends React.Component {
  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
  }
  
  handleClick() { 
    let name = this.refs.name.value; 
  
    $.ajax({ 
      url: '/items.json',
      type: 'POST', 
      data: { item: { name: name } }, 
      success: (item) => {
        this.props.handleSubmit(item);
        
      } 
    });
  } 
  render() { 
    return ( 
      <div> 
        <h1>new item</h1>
        <input ref="name" placeholder="Enter the name of the brand" />  
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>  
    ) 
  }
}


