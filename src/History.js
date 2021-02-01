import React from 'react';
import HistoryItem from './HistoryItem';

class History extends React.Component {
    render() {
        const history = this.props.historyItens;

        if (history.length === 0) {
            return (null);
        }

        const rows = history.map((row, index) => {
            return (
                <HistoryItem historyData={row} key={index}></HistoryItem>
            )
        });

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
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}

export default History;