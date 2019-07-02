import React, {Component} from 'react';
import Notification from './Notifications'
import ProjectList from '../projects/Project_list'

class Dashbord extends Component {
  render() {
    return( 
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
          <ProjectList/>
          </div>
          <div className="col s12 m5 offser-m1">
            <Notification/>
          </div>  
        </div>
      </div>
    )
  }
}

export default Dashbord;