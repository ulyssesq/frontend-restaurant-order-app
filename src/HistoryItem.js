import React from 'react';

class HistoryItem extends React.Component {
    constructor(props) {
        super(props);
    }

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