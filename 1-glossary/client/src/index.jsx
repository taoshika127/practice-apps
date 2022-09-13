import React from 'react';
const ReactDOM = require('react-dom/client');
import Search from './components/search.jsx';
import Input from './components/input.jsx';
import Glossary from './components/glossaryList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {glossary: []}
  }

  componentDidMount() {
    axios.get('http://localhost:3000/data')
      .then(axios.get('http://localhost:3000/home')
      .then((response) => {
        this.setState({glossary: response.data});
      }))
      .catch(err => {
        console.error(err);
      })

  }

  handleChange (data) {
    this.setState({glossary: data});
  }

  render() {
    return (
      <div>
        <h1>Personal Glossary</h1>
        <Search handleSearch={this.handleChange.bind(this)}/>
        <br />
        <Input handleInputSubmit={this.handleChange.bind(this)}/>
        <br />
        <Glossary data={this.state.glossary} handleChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



