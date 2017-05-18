import React from 'react'
import Page from '../components/Page'
import {StyleRoot} from 'radium';

export default class Root extends React.Component {

    render() {
        return (
            <StyleRoot>
                <Page/>
            </StyleRoot>
        );
    }
}
