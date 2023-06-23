import { Form } from "react-bootstrap";
import styled from "styled-components";

const Input = (props) => <FormControl {...props} />;

export default Input;

const FormControl = styled(Form.Control)`
  margin-bottom: 25px !important;
  border: 1px solid #eeeeee !important;
  border-radius: 8px !important;
  padding: 15px !important;
  height: auto !important;
  font-size: 15px !important;

  &::placeholder {
    font-size: 14px !important;
    opacity: 0.6 !important;
  }
`;
