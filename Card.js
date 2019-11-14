import React, { Component } from 'react';
import tachyons from 'tachyons';

class Card extends Component{
    render(){
        return(
          <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
          <img src={`https://robohash.org/${this.props.id}?200x200`} alt='photos'/>
          <div>
              <h2>{this.props.name}</h2>
              <p>{this.props.email}</p>
          </div>
          </div>
        );
    }
}

export default Card;