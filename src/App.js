import React, { Component } from 'react';
import "./index.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cross: [],
      term: '',
      items: []
    }
    this.onRemove = this.onRemove.bind(this)
    this.csschange = this.csschange.bind(this)
  }
  onRemove(index, event) {
    eval(this[event.target.name]).bind(this)(index, event)
  }
  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
  item(event) {
    this.setState({ item: event.target.value })
  }
  removeItem(index) {
    const items = this.state.items
    items.splice(index, 1)
    this.setState({ items })
  }
  csschange(index) {
    let arr = this.state.cross;// cross=[]
    arr[index] = !arr[index]
    this.setState({
      cross: arr
    })
  }
  render() {
    console.log(this.state)
    const items = (this.state.items || []).map((item, index) => (
      <li key={index}>
        <label className={this.state.cross[index] ? 'cross post_options' : 'post_options'}>{item}</label>
        <button style={{ backgroundColor: 'red', color: 'white', float: 'right' }} name="removeItem"
          onClick={event => this.onRemove(index, event)}>x</button>
        <button style ={{float: 'right'}}
          onClick={event => this.csschange(index, event)}>Cross
        </button>
      </li>
    ))
    return (
      <div >
        <h1>{this.state.name}</h1>
        <div>
          <form className="App" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button style={{
              backgroundColor: 'blue', color: 'white', width: '200px',
              height: '50px', fontFamily: 'Montserrat, sans-serif'
            }}>Add</button>
          </form>
          <div>
            <ol>
              {items}
              {
                this.state.item &&
                <li>{this.state.item}</li>
              }
            </ol>
          </div>
        </div>
      </div>

    );
  }
}