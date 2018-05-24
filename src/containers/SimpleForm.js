import React from 'react';
import { reduxForm } from 'redux-form';

import { SimpleForm } from '../components';

const FormWrapper = props => <SimpleForm {...props} />;

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(FormWrapper);
