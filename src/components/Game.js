import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import calculateScore from "../lib/calculateScore";
import getRoll from "../lib/getRoll";

const Game = function () {
  const [roll, setRoll] = useState([0, 0, 0, 0, 0]);

  return (
    <>
      <InputGroup className="mb-4 mt-4">
        <InputGroup.Text id="dice-rolls">Your Roll</InputGroup.Text>

        <Form.Control
          size="large"
          aria-label="Your Roll"
          aria-describedby="dice-rolls"
          value={roll}
          readOnly={true}
        />

        <Button onClick={() => setRoll(getRoll())}>Roll!</Button>
      </InputGroup>

      <InputGroup className="mb-4">
        <InputGroup.Text id="score">Your Score:</InputGroup.Text>

        <Form.Control
          size="large"
          aria-label="Your Score"
          aria-describedby="score"
          placeholder="1200"
          value={calculateScore(roll)}
          readOnly={true}
        />
      </InputGroup>
    </>
  );
};

export default Game;
