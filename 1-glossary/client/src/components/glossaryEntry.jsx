import React from 'react';
import axios from 'axios';

class GlossaryEntry extends React.Component {
  constructor (props) {
    super(props);
    this.state = {btnVal: 'Edit Entry', contentEditable: false, old: {word: '', definition: ''}};
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({contentEditable: true});
    this.setState({btnVal: 'Save Change'});
    this.setState({old: {word: document.getElementById(`word${this.props.id}`).innerHTML, definition: document.getElementById(`definition${this.props.id}`).innerHTML}});
  }

  handleSaveChange(e) {
    e.preventDefault();
    var newEntry = {word: document.getElementById(`word${this.props.id}`).innerHTML, definition: document.getElementById(`definition${this.props.id}`).innerHTML};
    var oldEntry = this.state.old;
    axios.post('http://localhost:3000/edit', { oldEntry, newEntry })
      .then((response) => {
        this.props.handleChange(response.data);
        this.setState({contentEditable: false});
      })
  }

  handleDelete(e) {
    e.preventDefault();
    var word = document.getElementById(`word${this.props.id}`).innerHTML;
    console.log(word);
    axios.post('http://localhost:3000/delete', { word })
      .then((response) => {
        this.props.handleChange(response.data);
      })
  }

  render() {
    return (
      <div className="glossaryEntry">
        <p><b>Word: </b></p>
        <p id={"word" + this.props.id} contentEditable={this.state.contentEditable} suppressContentEditableWarning={true}>{this.props.data.word}</p>
        <p><b>Definition: </b></p>
        <p id={"definition" + this.props.id} contentEditable={this.state.contentEditable} suppressContentEditableWarning={true}>{this.props.data.definition}</p>
        <button id="edit" onClick={this.state.btnVal === 'Edit Entry'? this.handleEdit.bind(this) : this.handleSaveChange.bind(this)}>{this.state.btnVal}</button>
        <button id="delete" onClick={this.handleDelete.bind(this)}>Delete Entry</button>
      </div>
    )
  }
}

export default GlossaryEntry;