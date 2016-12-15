import * as React from 'react';
import * as ReactDom from 'react-dom';

import Model from './model';


class App extends React.PureComponent<{ }, { }> {

    onClick = ( ) => {
        Model.show({ msg: 'Are you a Man?', title: 'Hello!' })
            .then(( value: string ) => {
                console.log(`value: ${value}`);
                alert(value)
            })
            .catch( e => {
                 console.log( e );
                 alert(e)
            })
    }

    render( ) {
        return (<div>
            <button onClick={this.onClick}> Click me !</button>
        </div>)
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)