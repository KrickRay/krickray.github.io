import React from 'react'
import Radium from 'radium'

@Radium
class Line extends React.Component {
    state = {};

    static styles = {
        line: {
            display: 'table-row',
        },
        date: {
            display: 'table-cell',
            borderRight: '3px #e5e5d1 solid',
            position: 'relative',
            paddingTop: 7,
            paddingRight: 15,
            verticalAlign: 'top',
            textTransform: 'uppercase',
            textAlign: 'center',
            minWidth: 170,
            '@media screen and (max-width: 560px)': {
                display: 'block',
                border: 'none'
            }
        },
        dateContent: {
            float: 'right',
            '@media screen and (max-width: 560px)': {
                float: 'none'
            }
        },
        dot: {
            position: 'absolute',
            right: -8,
            top: 20,
            width: 12,
            height: 12,
            backgroundColor: '#3c4854',
            borderRadius: '100%',
            '@media screen and (max-width: 560px)': {
                display: 'none'
            }
        },
        content: {
            display: 'table-cell',
            padding: 10,
            paddingRight: 0,
            verticalAlign: 'top',
            '@media screen and (max-width: 560px)': {
                display: 'block'
            }
        }
    };

    render() {
        const {styles} = Timeline.Line;
        const {locale, title, type, description, time, document, place} = this.props;
        return (
            <div style={styles.line}>
                <div style={styles.date}>
                    <div style={styles.dateContent}>
                        {
                            time[0].getFullYear() === time[1].getFullYear() ?
                                <div style={{display: 'inline-block'}}>
                                    <div>{time[0].toLocaleString(locale, {month: 'long'})}&nbsp;-&nbsp;{time[1].toLocaleString(locale, {month: 'long'})}</div>
                                    <div style={{fontWeight: 600, fontSize: '22px', color: '#333'}}>{time[0].getFullYear()}</div>
                                </div>
                                :
                                <div>
                                    <div style={{display: 'inline-block'}}>
                                        <div>{time[0].toLocaleString(locale, {month: 'long'})}</div>
                                        <div style={{fontWeight: 600, fontSize: '22px', color: '#333'}}>{time[0].getFullYear()}</div>
                                    </div>
                                    <div style={{display: 'inline-block',verticalAlign: 'top'}}>
                                        <div style={{}}>&nbsp;-&nbsp;</div>
                                    </div>
                                    <div style={{display: 'inline-block'}}>
                                        <div>{time[1].toLocaleString(locale, {month: 'long'})}</div>
                                        <div style={{fontWeight: 600, fontSize: '22px', color: '#333'}}>{time[1].getFullYear()}</div>
                                    </div>
                                </div>
                        }
                        <div style={styles.dot}/>
                    </div>
                </div>
                <div style={styles.content}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {locale === 'ru' ? <p><b>{place.town}</b>, <i>{place.department} {place.name}</i></p>
                            : <p><i>{place.name} ({place.department})</i>, <b>{place.town}</b></p>}
                </div>
            </div>
        );
    }
}

export default class Timeline extends React.Component {
    static defaultProps = {};

    state = {};

    render() {
        return (
            <div style={{display: 'table'}}>
                {this.props.children}
            </div>
        );
    }

    static Line = Line;
}