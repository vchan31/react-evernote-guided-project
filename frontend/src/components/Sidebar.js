import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {



  render() {
  	// console.log("Look here: ", this.props)
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={this.props.notes} handleClick={this.props.handleClick}/>
        <button onClick={() => this.props.handleNewClick()}>New</button>
      </div>
    );
  }
}

export default Sidebar;
