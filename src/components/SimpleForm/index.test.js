import React from 'react';
import ReactDOM from 'react-dom';
import SimpleForm from './SimpleForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
