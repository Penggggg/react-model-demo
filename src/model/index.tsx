import * as React from 'react';
import * as ReactDom from 'react-dom';

import './model.less'

export default class Model extends React.PureComponent< IProps, IState > {

    _container;
    _dom;
    _resolve: Function;
    _reject: Function;
    _promise: Promise<string> = new Promise<string>(( resolve, reject) => {
        this._resolve = resolve;
        this._reject = reject;
    })
    
    

    constructor( ) {
        super( );
        this.state = ({test: 1})
    }

    static defaultProps = {
        title: 'I am model'
    }

    static show( arg: { msg: string, title?: string }) {
        let div = document.createElement('div');
        let _title = arg.title ? arg.title : this.defaultProps.title;
        let _model: any = ReactDom.render(<Model msg={arg.msg} title={_title} />, div);
        let dom = document.querySelector('body').appendChild(div);
        _model._container = div;
        _model._dom = dom;
        return _model._promise;
    }

    onNo = ( ) => {
        this._reject('i choice no');
        // 销毁
        ReactDom.unmountComponentAtNode( this._container );
        this._dom.remove( );;
    }

    onYes = ( ) => {
        this._resolve('i choice yes');
        // 销毁
        ReactDom.unmountComponentAtNode( this._container );
        this._dom.remove( );       
    }

    componentWillUnmount( ) { console.log('i will be destroyed')}

    render( ) {
        let { } = this.state;
        let { title, msg } = this.props;
        return(
            <div className="m_bg">
                <div className="m_body">
                    <h3 className="title">{title}</h3>
                    <div className="msg">{ msg }</div>
                    <div className="box">
                        <a onClick={this.onNo}>No</a>
                        <a onClick={this.onYes}>Yes</a>
                    </div>
                </div>
            </div>
        )
    }
}

interface IProps {
    title?: string,
    msg: string
}

interface IState {
    test: 1
}