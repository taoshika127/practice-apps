import React from 'react';
import GlossaryEntry from './glossaryEntry.jsx';

class Glossary extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.data.map((entry, index) => {
          return (<div key={index}>
            <GlossaryEntry data={entry} id = {index} handleChange={this.props.handleChange}/>
          </div>)
        })}
      </div>
    )
  }
}

export default Glossary;