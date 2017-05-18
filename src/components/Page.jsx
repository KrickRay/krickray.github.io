import React from 'react'
import Content from './Content'
import Radium from 'radium'

@Radium
export default class Page extends React.Component {
    static defaultProps = {};

    state = {};

    static style = {
        maxWidth: '210mm',
        height: '297mm',
        margin: '30px auto',
        background: '#fdfdfd',
        borderRadius: 4,
        '@media print': {
            margin: 0,
            background: '#fff'
        }
    };

    render() {
        return (
            <div style={Page.style}>
                <Content/>
            </div>
        );
    }
}