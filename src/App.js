import './App.css';
import OrderForm from './OrderForm';
import History from './History';

function App() {
  return (
    <div className="app">
      <div className="container">
        <OrderForm></OrderForm>
        <History></History>
      </div>
    </div>
  );
}

export default App;
