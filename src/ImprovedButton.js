import React from 'react';
import { Link } from 'react-router-dom';

class ImprovedButton extends React.Component {
    render(){
        return
           <button onClick ={this.props.onClick}>
            {this.props.children};
           </button>
    }

};

export default ImprovedButton