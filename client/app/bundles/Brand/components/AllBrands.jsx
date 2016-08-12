import React, { PropTypes } from 'react';

export default class AllBrands extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired
  }
  
  render() { 
    const items = this.props.items.map((item, index) => { 
      return ( 
        <div key={index} > 
          <a className="btn btn-primary">{item.id}</a>
          <p>{item.name}</p> 
        </div> 
      ) 
    }); 
    return( 
      <div> {items} </div> 
    )
  }
}