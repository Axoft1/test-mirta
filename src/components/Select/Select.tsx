import React, { FC } from "react";
import { Form } from "react-bootstrap";

interface IProps {
  optons: { value: string; name: string }[];
  defaultValue: string;
  value: string;
  onChange: (e: string) => void;
}

const Select:FC<IProps> = ({ optons, defaultValue, value, onChange }) => {
  return (
    <Form.Select
      aria-label="Default select example"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option >{defaultValue}</option>
      {optons.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Form.Select>
  );
};

export default Select;
