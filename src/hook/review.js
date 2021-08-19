import React, { useState } from "react";
import {
  Heading,
  Flex,
  SmallHeading,
  RadioButton,
  Item,
  Container,
  Form,
  Wrapper,
} from "./Element";
const Review = () => {
  const [ui, setUi] = useState();
  const [all, setAll] = useState();
  const handleUi = (event) => {
    const value = event.target.value;
    setUi(value);
  };
  const handleAll = (event) => {
    const value = event.target.value;
    setAll(value);
  };
  console.log("Latest value:", ui);
  return (
    <Container>
      <Heading> Give us feedback. </Heading>
      <Wrapper>
        <SmallHeading> Rate the UI </SmallHeading>
        <Form></Form>
      </Wrapper>

      <Wrapper>
        {/* second polling */}
        <SmallHeading> Rate the UI </SmallHeading>
        <Flex> </Flex>
      </Wrapper>
    </Container>
  );
};

export default Review;
