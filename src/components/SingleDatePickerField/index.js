import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class SingleDatePickerField extends PureComponent {
  static propTypes = {
    // The props are supplied via redux-form's <Field /> component
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string,
    }).isRequired,
    meta: PropTypes.shape({
      error: PropTypes.string,
      touched: PropTypes.bool,
    }).isRequired,
  };

  state = { focused: null };
  handleFocusChange = ({ focused }) => this.setState({ focused });
  normalize = date => moment(date);  

  render() {
    const {
      meta: { error, touched },
      input: { value = null, onChange },
      ...props,
    } = this.props;
    const { focused = null } = this.state;

    return (
      <div>
        <SingleDatePicker
          date={value ? this.normalize(value) : undefined}
          focused={focused}
          onDateChange={onChange}
          onFocusChange={this.handleFocusChange}
          {...props}
        />
        {error && touched && <span>{error}</span>}
      </div>
    );
  }
}

export default SingleDatePickerField;
