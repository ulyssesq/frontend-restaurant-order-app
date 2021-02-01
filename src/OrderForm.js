import React from 'react';

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '' };

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSendOrder = this.handleSendOrder.bind(this);
    }

    handleSendOrder(event) {
        event.preventDefault();
        console.log(this.state.inputValue);

        fetch('https://localhost:44350/order/' + this.state.inputValue)
        .then(function(response) {
            if ( response.status !== 200 ) {
                console.log(response);
                console.log('Status Code: ' +  response.status);
                return;
            }

            response.json().then(function(data) {
                
                console.log(data);
            });
        });
    }

    handleChangeInput(event){
        this.setState({inputValue: event.target.value});
    }

    render() {
        return (
            <form className="order-form">
                <div className="form-control">
                    <label>Input</label>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChangeInput}></input>
                </div>
                <div className="form-control">
                    <label>Output</label>
                    <input type="text"></input>
                </div>

                <button onClick={this.handleSendOrder}>Send Order</button>
            </form>
        );
    }

}

export default OrderForm;