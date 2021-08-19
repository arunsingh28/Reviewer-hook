import styled from "styled-components";

export const Container = styled.div `
  background: #fafafa;
  height: auto;
  width: 400px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-radius: 3px;
  padding: 10px 10px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 0px 25px 5px rgba(0, 0, 0, 0.1),
    0 20px 20px -5px rgba(0, 0, 0, 0.04);
`;
export const Wrapper = styled.div `
  padding: 5px 10px;
`;
export const Heading = styled.h3 `
  color: #030430;
  font-size: 15px;
  text-align: center;
`;
export const SmallHeading = styled.h3 `
  color: #6a6666;
  font-size: 12px;
`;
export const Flex = styled.div `
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
  background: #d7e2e275;
  border-radius: 2px;
`;

export const Form = styled.form `
  background: gray;
`;

export const RadioButton = styled.input `
  opacity: 1;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
`;