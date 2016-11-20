import React from 'react';
import { render } from 'react-dom';
import 'react-widgets/lib/less/react-widgets.less';
import DateTimePicker from'react-widgets/lib/DateTimePicker';

const DateTimeInput = ({ input, label, meta: { touched, error } }) => (
    <DateTimePicker  onChange={input.onChange}  />
);

export default DateTimeInput;