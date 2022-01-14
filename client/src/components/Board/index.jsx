import React, { useState } from "react";

import { Container } from "./styles";
import Lists from "../Lists";
import Form from "../Form";

function Board() {

  const [currentId, setCurrentId] = useState(null);
  return (
    <Container>
      <Lists setCurrentId={setCurrentId}/>
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
    </Container>
  );
}

export default Board;
