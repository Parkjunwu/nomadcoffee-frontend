import styled from "styled-components";
import { color } from "../../color";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex:1;
  width: 100%;
  max-width: 400px;
  /* background-color: tomato; */
`;
export const TextInput = styled.input`
  margin-bottom: 15px;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 15px;
  border: 0;
`;
export const SubmitBtn = styled.input`
  background-color: ${color.btnBackgroundColor};
  color:${color.btnTextColor};
  margin-top: 15px;
  padding: 15px 25px;
  border-radius: 30px;
  font-size: 15px;
  border: 0;
`;