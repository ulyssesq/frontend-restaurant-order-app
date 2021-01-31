import './App.css';
import OrderForm from './OrderForm';
import History from './History';

function App() {

  function send(e) {
    e.preventDefault();
    console.log('ok');
    // fetch('https://localhost:44350/order/')
    // .then(function(response) {
    //     if ( response.status !== 200 ) {
    //         console.log('Status Code: ' +  response.status);
    //         return;
    //     }

    //     response.json().then(function(data) {
    //         console.log(data);
    //     });
    // });
  }

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
