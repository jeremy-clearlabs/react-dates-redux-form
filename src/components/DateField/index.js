import React, { Component } from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
// import omit from 'lodash/omit';
import { Field } from 'redux-form';

import { SingleDatePicker } from 'react-dates';

// Wrap the Airbnb component so that it conforms to the property API expected by redux-form
// See: https://github.com/erikras/redux-form/issues/1860
// Also, see: https://github.com/airbnb/react-dates/blob/master/examples/SingleDatePickerWrapper.jsx
class DateField extends Component {
  // The props are supplied via redux-form's <Field /> component
  static propTypes = {
    autoFocus: PropTypes.bool,
    initialDate: momentPropTypes.momentObj,
    input: PropTypes.shape({
      onBlur: PropTypes.func.isRequired,
      onChange: PropTypes.func.isRequired,
      onFocus: PropTypes.func.isRequired,
      value: PropTypes.string,
    }).isRequired,
    meta: PropTypes.shape({
      error: PropTypes.string,
      touched: PropTypes.bool,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: props.autoFocus,
      date: props.initialDate
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // on clear
    if (this.props.input.value === '' && prevProps.input.value !== this.props.input.value) {
      this.onDateChange(null);
    }
  }

  // Use empty value instead of null to ensure it's treated as a controlled component
  getValueAsString = date => (date ? date.toISOString() : '');

  onDateChange(date) {
    this.setState({ date }, () => {
      const { input } = this.props;
      const { date } = this.state;
      const { onChange } = input;
      const dateStr = this.getValueAsString(date);
      onChange(dateStr);
    });
  }

  onFocusChange({ focused }) {
    this.setState({ focused }, () => {
      const { input } = this.props;
      const { date } = this.state;
      const { onFocus, onBlur } = input;
      const dateStr = this.getValueAsString(date);

      focused ? onFocus(dateStr) : onBlur(dateStr);
    });
  }

  renderHiddenField = field => <input {...field.input} type={'hidden'} />;

  render() {
    const { input, name, meta: { error, touched }, autoFocus, initialDate, type, ...props } = this.props;
    const { focused, date } = this.state;
    const dateStr = this.getValueAsString(date);

    return (
      <div>
        <Field
          {...this.props}
          name={`_hidden_${input.name}`}
          value={dateStr}
          component={this.renderHiddenField}
        />
        <SingleDatePicker
          id={`_wrapped_${input.name}`}
          date={date}
          focused={focused}
          onDateChange={this.onDateChange}
          onFocusChange={this.onFocusChange}
          {...props}
        />
        {error && touched && <span>{error}</span>}
      </div>
    );
  }
}

export default DateField;
