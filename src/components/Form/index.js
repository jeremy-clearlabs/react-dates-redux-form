import React from 'react';
import { Values } from 'redux-form-website-template';
import { SimpleForm } from '../../containers';

const Form = props => (
  <div>
    <SimpleForm />
    <Values form="simple" />
  </div>
);

export default Form;