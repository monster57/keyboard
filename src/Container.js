import React from 'react';
import ReactDOM from 'react-dom';
// import ButtonSet from './ButtonSet';

import AppContainer from './containers/app.container'


class Container extends React.Component {
    render() {
        return ( < AppContainer / > );
    }
}


React.render( < Container / > ,
    document.getElementById('container')
);
