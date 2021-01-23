import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Papa from 'papaparse';
import Sort from './Sort';

function parse(file) {
  return new Promise(function(resolve) {
    Papa.parse(file, {
      complete: function(results) {
        console.log("Finished:", results.data);
        resolve(results.data);
      }
    });
  });
}

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
  }

  async handleChange(event) {
    event.preventDefault();
    let data = await parse(this.fileInput.current.files[0]);
    data.splice(0, 2);
    data.pop();
    console.log(data);
    ReactDOM.render(
      <React.StrictMode>
        <Sort data={data} />
      </React.StrictMode>,
      document.getElementById('table')
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} onChange={this.handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FileInput;
