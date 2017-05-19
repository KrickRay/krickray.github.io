import React from 'react'

export default class Switch extends React.Component {
    static defaultProps = {
        leftLabel: 'on',
        rightLabel: 'off',
        onClick: ()=>{},
        style: {},
        active: 0
    };

    state = {
    };

    static styles = {
        switch: {
            background: '#fff',
            borderRadius: 100,
            display: 'inline-block',
            height: 'auto',
            position: 'relative',
            // border: '1px solid',
            padding: 7,
            cursor: 'pointer',
            userSelect: 'none',
            backgroundColor: '#eaeaea'
        },
        label: {
            color: '#777',
            textTransform: 'uppercase',
            transition: 'all .2s ease',
            minWidth: 44,
            display: 'inline-block',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
        },
        labelLeft: {},
        labelRight: {},
        labelActive: {
            color: '#fff',
            fontWeight: 600
        },
        toggle: {
            background: '#4a4a4a',
            borderRadius: 100,
            height: 'calc(100% - 2px)',
            left: 1,
            position: 'absolute',
            top: 1,
            transition: 'left .2s ease',
            width: 'calc(50% + 4px)'
        },
        toggleSwitched: {
            left: 'calc(50% - 5px)'
        }
    };

    render() {
        const styles = Switch.styles;
        const {active} = this.props;
        return (
            <div style={{...styles.switch, ...this.props.style}} onClick={this._onClick}>
                <span style={{...styles.label, ...styles.labelLeft, ...(active === 0 ? styles.labelActive : {})}}>{this.props.leftLabel}</span>
                <span style={{...styles.label, ...styles.labelRight, ...(active === 1 ? styles.labelActive : {})}}>{this.props.rightLabel}</span>
                <span style={{...styles.toggle, ...(active === 1 ? styles.toggleSwitched : {})}}/>
            </div>
        );
    }

    _onClick = (e) => {
        //this.setState({active: Number(!this.state.active)});
        this.props.onClick(e);
    }
}