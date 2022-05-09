/* eslint-disable react/no-children-prop */
import { EmailIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

import "./Subscribe.css";
// import mailIcon from "../../images/Subscribe/Icon-Email.svg";

function Subscribe() {
  return (
    <Flex justify="center" align="center" className="subscribe">
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        className="subscribe-container"
      >
        <Flex direction="column" align="center">
          <p className="subscribe-title">SUBSCRIBE</p>
          <p className="subscribe-description">
            Get the day’s top news stories delivered to your inbox.
          </p>
        </Flex>
        <Flex direction="column">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon className="email-icon" />}
            />
            <Input placeholder="Your Email" className="email-input" />
          </InputGroup>
          <button type="submit" className="email-submit">
            Subscribe
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Subscribe;
