import React from 'react'
import resume from '../resume/arsaev'
import Switch from './Switch'
import Timeline from './Timeline'

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    const params = {};
    let tokens;
    const re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

function createQueryString(q) {
    return Object.keys(q).map(key => key + '=' + q[key]).join('&');
}

export default class Content extends React.Component {
    static defaultProps = {};

    state = {
        lang: getQueryParams(document.location.search).lang || 'ru'
    };

    static styles = {
        content: {
            height: '100%',
            margin: '0 40px',
            padding: '25px 0',
            position: 'relative'
        },
        skill: {
            backgroundColor: '#e6e6e6',
            borderRadius: 100,
            padding: '0 12px',
            marginRight: 5,
            marginBottom: 5,
            lineHeight: 1.6,
            display: 'inline-block'
        }
    };

    render() {
        const {lang} = this.state;
        const RU = lang === 'ru';
        const EN = lang === 'en';
        const cv = {
            ...(lang === 'ru' ? resume['en'] : resume['ru']),
            ...resume[lang]
        };
        const {styles} = Content;
        return (
            <div style={styles.content}>
                <div style={{display: 'table', width: '100%'}}>
                    <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                        <img src="/public/images/me.jpg" alt=""
                             style={{height: 100, borderRadius: '100%', position: 'relative', float: 'left'}}/>
                    </div>
                    <div style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: '30px', width: '100%'}}>
                        <h1 style={{marginBottom: 7}}>{cv.name}</h1>
                        <span>{cv.title}</span>
                    </div>
                    <div style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: '30px', textAlign: 'right'}}>
                        <Switch leftLabel="ru"
                                rightLabel="en"
                                active={lang === 'ru' ? 0 : 1}
                                style={{whiteSpace: 'nowrap'}}
                                onClick={e => {
                                    //console.log();
                                    const nextLang = lang === 'ru' ? 'en' : 'ru';
                                    this.setState({lang: nextLang});
                                    const nextUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + createQueryString({
                                            ...getQueryParams(document.location.search),
                                            lang: nextLang
                                        });
                                    window.history.pushState({path: nextUrl}, '', nextUrl);
                                }}/>
                    </div>
                </div>
                <br/>
                <div>
                    <table>
                        <tr>
                            <td><b>{RU ? 'Место жительства' : 'Location'}</b></td>
                            <td>{cv.location}</td>
                        </tr>
                        <tr>
                            <td><b>{RU ? 'Возраст' : 'Age'}</b></td>
                            <td>{Math.floor((Date.now() - cv.birthday) / 1000 / 3600 / 24 / 365)}</td>
                        </tr>
                        <tr>
                            <td><b>{RU ? 'Номер телефона' : 'Phone number'}</b></td>
                            <td>{cv.phoneNumber} <i className="mdi mdi-whatsapp" style={{color: '#666'}}/> <a
                                className="mdi mdi-telegram" href="https://telegram.me/krick_ray" target="blank"/></td>
                        </tr>
                        <tr>
                            <td><b>Email</b></td>
                            <td>{cv.email}</td>
                        </tr>
                        <tr>
                            <td><b>{RU ? 'Социальные сети' : 'Social network'}</b></td>
                            <td>
                                <a className="mdi mdi-vk" href="https://vk.com/krikray" target="blank"/>
                                <a className="mdi mdi-skype" href="skype:encasor@yandex.ru" target="blank"/>
                                <a className="mdi mdi-github-circle" href="https://github.com/KrickRay" target="blank"/>
                                <a className="mdi mdi-npm" href="https://www.npmjs.com/~krickray" target="blank"/>
                            </td>
                        </tr>
                    </table>
                    <p>{cv.description}</p>
                    {
                        Object.keys(cv.skills).map(skillKey => {
                            return (<div>
                                <b>{skillKey}:</b> {
                                cv.skills[skillKey].map(skill => {
                                    return (
                                        <span style={styles.skill}>{skill}</span>
                                    )
                                })
                            }
                            </div>);
                        })
                    }
                    <br/>
                    <Timeline>
                        {
                            cv.timeline.map(line => {
                                return (
                                    <Timeline.Line locale={lang} {...line}/>
                                )
                            })
                        }
                    </Timeline>
                </div>
            </div>
        );
    }
}