import React from 'react';

class Progress extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="progress">
        
        <progress
           value={this.props.position}
           max="1"></progress>
         
      </div>
    )
  }

}

export default Progress
// <span className="player__time-elapsed">{this.props.elapsed}</span>

// <span className="player__time-total">{this.props.total}</span>