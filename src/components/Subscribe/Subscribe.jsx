/* eslint-disable react/no-children-prop */
import React from "react";

import { EmailIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe-container">
        <div className="top-subscribe">
          <p className="subscribe-title">SUBSCRIBE</p>
          <p className="subscribe-description">
            Get the day’s top news stories delivered to your inbox.
          </p>
        </div>
        <div className="bottom-subscribe">
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
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
