import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
  return <h1>Hello, World!</h1>;
}

ReactDOM.render(<Example />, document.getElementById('app'));
