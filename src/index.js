import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function Practice() {

  useEffect(() => {
    document.getElementById('submit-button').addEventListener('click', e => {
      e.preventDefault();
      alert('submitted');
    });
  });
  

  return (
    <>
      <form method="POST" action="" enctype="multipart/form-data">
        <div>
          <label for="profile-pic">Choose a file</label>
          <input type="file" id="profile-pic" name="profilepic" />
        </div>
        <div>
          <input type="submit" id="submit-button" value="Submit" />
        </div>
      </form>
    </>
  );
}
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);