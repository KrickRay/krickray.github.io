import React from 'react'

export default class Content extends React.Component {
    static defaultProps = {};

    state = {};

    static style = {
        height: '100%',
        padding: '25px 40px'
    };

    render() {
        return (
            <div style={Content.style}>

            </div>
        );
    }
}