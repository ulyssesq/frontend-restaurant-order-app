import HistoryItem from './HistoryItem';

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
                    <HistoryItem historyData={{input : "morning, 1, 2, 3", output: "eggs, toast, coffee"}}></HistoryItem>
                    <HistoryItem historyData={{input : "morning, 2, 1, 3", output: "eggs, toast, coffee"}}></HistoryItem>
                </tbody>
            </table>
        </div>
    );
}

export default History;