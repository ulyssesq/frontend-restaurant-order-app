import React from 'react';

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '', outputValue: '' };

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSendOrder = this.handleSendOrder.bind(this);
    }

    handleSendOrder(event) {
        event.preventDefault();
        var self = this;

        var inputValue = this.state.inputValue;

        if (inputValue == '') {
            self.setState({outputValue : "error"});
            self.props.addToHistory({
                input: this.state.inputValue,
                output: "error"
            });
            return;
        }

        fetch('https://localhost:44350/order/' + this.state.inputValue)
        .then(function(response) {
            if ( response.status !== 200 ) {
                console.log(response);
                return;
            }

            response.json().then(function(data) {
                self.setState({outputValue : data.output});
                self.props.addToHistory(data);
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
                
                    <button onClick={this.handleSendOrder}>Send Order</button>
                </div>
                
                <div className="form-control">
                    <label>Output</label>
                    <input type="text" readOnly={true} value={this.state.outputValue} className="output"></input>
                </div>
            </form>
        );
    }
}

export default OrderForm;