import React from 'react';
import './App.css';
import OrderForm from './OrderForm';
import History from './History';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addToHistory = this.addToHistory.bind(this);
    this.state = { history: [], outputValue: '' };
  }

  addToHistory(data){
    let historyItens = this.state.history;
    historyItens.push(data);
    this.setState({history: historyItens});
  }

  render() {
    const history = this.state.history;

    return (
      <div className="app">
        <div className="container">
          <OrderForm addToHistory={this.addToHistory} outputValue={this.state.outputValue}></OrderForm>
          <History historyItens={history}></History>
        </div>
      </div>
    );
  }
}

export default App;
