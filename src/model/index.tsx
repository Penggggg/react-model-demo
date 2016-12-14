import * as React from 'react';
import * as ReactDom from 'react-dom';

import './model.less'

export default class Model extends React.PureComponent< IProps, { }> {

    _resolve: Function;
    _reject: Function;
    _promise: Promise<string> = new Promise<string>(( resolve, reject) => {
        this._resolve = resolve;
        this._reject = reject;
    })
    _dom;
    

    constructor( ) {
        super( );
    }

    static defaultProps = {
        title: 'I am model'
    }

    static show( ) {
        let div = document.createElement('div');
        let _model: any = ReactDom.render(<Model msg="are you a beauty?" />, div);
        let dom = document.querySelector('body').appendChild(div);
        _model._dom = dom;
        return _model._promise;
    }

    onNo = ( ) => {
        this._reject('i choice no');
        // dom销毁
        this._dom.remove( );
        // 内存销毁
        this = null;
    }

    onYes = ( ) => {
        this._resolve('i choice yes');
    }

    render( ) {
        let { title, msg } = this.props;
        return(<div className="m_bg">
            <div className="m_body">
                <h3 className="title">{title}</h3>
                <div className="msg">{ msg }</div>
                <div className="box">
                    <a onClick={this.onNo}>No</a>
                    <a onClick={this.onYes}>Yes</a>
                </div>
            </div>
        </div>)
    }
}

interface IProps {
    title?: string,
    msg: string
}