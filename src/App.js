import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Papa from 'papaparse';
import Sort from './Sort';

function parse(file) {
  return new Promise(function(resolve) {
    Papa.parse(file, {
      complete: function(results) {
        resolve(results.data);
      }
    });
  });
}

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  async handleSubmit(event) {
    event.preventDefault();
    let data = await parse(this.fileInput.current.files[0]);
    data.splice(0, 2);
    data.pop();
    ReactDOM.render(
      <React.StrictMode>
        <Sort data={data} />
      </React.StrictMode>,
      document.getElementById('table')
    );
  }

  render() {
    return (
      <div>
        <form class="mt-3 mb-3 p-2 bg-light shadow rounded text-center" onSubmit={this.handleSubmit}>
          Upload CSV file to load table <br/>
          <label class="mb-0 mt-2">
            Upload file:
            <input type="file" ref={this.fileInput} className="ml-2" />
          </label>
          <button class="btn btn-outline-success">Submit</button>
        </form>
      </div>
    );
  }
}

export default FileInput;
