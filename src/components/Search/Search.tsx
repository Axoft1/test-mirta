import React, { FC } from 'react'
import { Form } from 'react-bootstrap';
interface IProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
interface FormElements extends HTMLFormControlsCollection {
  yourInputName: HTMLInputElement;
}
const Search: FC<IProps> = ({ placeholder, value, onChange }) => {
  return (
    <Form className="d-flex" >
      <Form.Control
        onChange={onChange}
        type="search"
        placeholder={placeholder}
        className="me-2"
        aria-label="Search"
        value={value}
      />
    </Form>
  );
};

export default Search