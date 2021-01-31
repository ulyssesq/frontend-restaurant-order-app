function OrderForm() {
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
        <form className="order-form">
            <div className="form-control">
                <label>Input</label>
                <input type="text"></input>
            </div>
            <div className="form-control">
                <label>Output</label>
                <input type="text"></input>
            </div>

            <button onClick={send}>Send Order</button>
        </form>
    );
}

export default OrderForm;