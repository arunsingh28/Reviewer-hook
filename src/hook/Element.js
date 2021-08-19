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
  background: #d7e2e275;
  border-radius: 5px;
`;
export const Heading = styled.h3 `
  color: #030430;
  font-size: 15px;
  text-align: center;
`;
export const SmallHeading = styled.h5 `
  color: #6a6666;
  font-size: 12px;
  text-align: center;
`;
export const Flex = styled.div `
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
  border-radius: 2px;
  padding: 5px 0;
`;
export const Button = styled.button `
  padding: 7px 40px;
  border: none;
  background: ${(background) => background.background};
  border-radius: 3px;
  color: ${(color) => color.color};
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;