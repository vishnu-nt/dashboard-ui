import { useState } from "react";
import ReactDatePicker from "react-date-picker";
import { AiFillCloseCircle } from "react-icons/ai";
import "./datePicker.css";

interface Props {
  value: Date | null;
  onChange(date: Date): void;
  className?: string;
}

const DatePicker = (props: Props) => {
  const [value, onChange] = useState(props.value);

  const handleChange = (date: Date) => {
    onChange(date);
    props.onChange(date);
  };

  return (
    <div className={props.className}>
      <ReactDatePicker
        onChange={handleChange}
        value={value}
        calendarIcon={null}
        clearIcon={<AiFillCloseCircle className="text-gray-400" />}
        className="app-datepicker"
      />
    </div>
  );
};

export default DatePicker;
