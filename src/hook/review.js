import React, { useState, useRef } from "react";
import {
  Heading,
  Flex,
  SmallHeading,
  Container,
  Wrapper,
  Button,
} from "./Element";
const Review = () => {
  const [yes, setYes] = useState();
  const [no, setNo] = useState();
  const container = useRef();
  const handleData = (e) => {
    e.preventDefault();
    if (yes === 1) {
      // user like the ui
      console.log("like it");
    } else {
      // use does't like the ui
      console.log("dont like it");
    }
    container.current.style.display = "none";
  };
  return (
    <Container ref={container}>
      <Heading> Give us feedback. </Heading>
      <form onSubmit={handleData}>
        <Wrapper>
          <SmallHeading>Do you like the UI</SmallHeading>
          <Flex>
            <Button
              background="#7dea90"
              color="black"
              onClick={() => setYes(1)}
            >
              Yes
            </Button>
            <Button background="#fa5c69" color="#fff" onClick={() => setNo(0)}>
              No
            </Button>
          </Flex>
        </Wrapper>
      </form>
    </Container>
  );
};

export default Review;
