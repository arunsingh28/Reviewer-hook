import React, { useState } from "react";
import {
  Heading,
  Flex,
  SmallHeading,
  RadioButton,
  RadioButtonLabel,
  Item,
  Container,
} from "./Element";
const Review = () => {
  const [ui, setUi] = useState(1);
  const [all, setAll] = useState(1);
  const handleUi = (event) => {
    const value = event.target.value;
    setUi(value);
  };
  const handleAll = (event) => {
    const value = event.target.value;
    setAll(value);
  };
  return (
    <Container>
      <Heading>Give us feedback.</Heading>
      <SmallHeading>Rate the UI</SmallHeading>
      <Flex>
        <Item>
          <RadioButton
            type="radio"
            name="radio"
            value="optionA"
            checked={ui === "optionA"}
            onChange={(event) => handleUi(event)}
          />
          <RadioButtonLabel />
          <div>1</div>
        </Item>
        <Item>
          <RadioButton
            type="radio"
            name="radio"
            value="optionB"
            checked={ui === "optionB"}
            onChange={(event) => handleUi(event)}
          />
          <RadioButtonLabel />
          <div>2</div>
        </Item>
      </Flex>

      {/* second polling */}
      <SmallHeading>Rate the UI</SmallHeading>
      <Flex></Flex>
    </Container>
  );
};

export default Review;
