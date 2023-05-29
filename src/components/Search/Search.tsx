import React, { FC } from 'react'
import { Button, Form } from 'react-bootstrap';
interface IProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (e: React.FormEvent<YourFormElement>) => void;
}
export interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
interface FormElements extends HTMLFormControlsCollection {
  yourInputName: HTMLInputElement;
}
const Search: FC<IProps> = ({ placeholder, value, onChange, submit }) => {
  return (
    <Form className="d-flex" onSubmit={submit}>
      <Form.Control
        onChange={onChange}
        type="search"
        placeholder={placeholder}
        className="me-2"
        aria-label="Search"
        value={value}
      />
      <Button type="submit" variant="outline-success">
        Search
      </Button>
    </Form>
  );
};

export default Search