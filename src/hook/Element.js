import styled from "styled-components";

export const Container = styled.div `
  background: #fafafa;
  height: auto;
  width: 400px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 3px;
  padding: 10px 10px;
  font-family: Arial, Helvetica, sans-serif;
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

export const Item = styled.div `
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border-radius: 2px;
  margin-bottom: 10px;
`;

export const RadioButtonLabel = styled.label `
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
export const RadioButton = styled.input `
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
  }
  &:checked + ${Item} {
    background: yellowgreen;
    border: 2px solid yellowgreen;
  }
  &:checked + ${RadioButtonLabel} {
    background: yellowgreen;
    border: 1px solid yellowgreen;
  }
`;