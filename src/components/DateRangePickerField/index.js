import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class DateRangePickerField extends PureComponent {
  static propTypes = {
    endDateId: PropTypes.string,
    endDatePlaceholderText: PropTypes.string,
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      value: PropTypes.shape({
        startDate: PropTypes.string,
        endDate: PropTypes.string,
      }),
    }).isRequired,
    meta: PropTypes.shape({
      error: PropTypes.string,
      touched: PropTypes.bool,
    }).isRequired,
    startDateId: PropTypes.string,
    startDatePlaceholderText: PropTypes.string,
  };

  static defaultProps = {
    endDateId: 'endDate',
    endDatePlaceholderText: 'End Date',
    startDateId: 'startDate',
    startDatePlaceholderText: 'Start Date',
  }

  state = { focusedInput: null };
  handleFocusChange = focusedInput => this.setState({ focusedInput });

  render() {
    const {
      meta: { error, touched },
      input: {
        value: { startDate = null, endDate = null },
        onChange
      },
      ...props,
    } = this.props;
    const { focusedInput = null } = this.state;

    return (
      <div>
        <DateRangePicker
          endDate={endDate}
          focusedInput={focusedInput}
          onDatesChange={onChange}
          onFocusChange={this.handleFocusChange}
          startDate={startDate}
          {...props}
        />
        {error && touched && <span>{error}</span>}
      </div>
    );
  }
}
export default DateRangePickerField;
