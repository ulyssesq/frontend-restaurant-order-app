function History() {
    return (
        <div className="history">
            <h2>History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Input</th>
                        <th>Output</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>morning, 1, 2, 3</td>
                        <td>eggs, toast, coffee</td>
                    </tr>
                    <tr>
                        <td>morning, 2, 1, 3</td>
                        <td>eggs, toast, coffee</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default History;