import React from 'react';
import { Field } from 'redux-form';

import {
  // DateField,
  SingleDatePickerField,
  DateRangePickerField
} from '../index';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Start Date</label>
        <div>
          <Field
            name="startDate"
            id="start-date"
            component={SingleDatePickerField}
            placeholder="Start Date"
          />
        </div>
      </div>
      <div>
        <label>Date Range</label>
        <div>
          <Field
            name="dateRange"
            component={DateRangePickerField}
            id="date-range"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};
export default SimpleForm;
