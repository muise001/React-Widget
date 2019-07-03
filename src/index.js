import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EventEmitter from "uevents";

const emitter = new EventEmitter();

ReactDOM.render(<App emitter={emitter}/>, document.getElementById('root'));
