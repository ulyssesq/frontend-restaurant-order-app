import React from 'react';

class HistoryItem extends React.Component {
    render() {
        const historyData = this.props.historyData;

        return (
            <tr>
                <td>{historyData.input}</td>
                <td>{historyData.output}</td>
            </tr>
        );
    }
}

export default HistoryItem;