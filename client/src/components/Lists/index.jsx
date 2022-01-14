import React, { useState } from "react";

import { Container } from "./styles";
import { useSelector } from "react-redux";
import ListCard from "./ListCard";

function Lists({setCurrentId}) {

  const lists = useSelector((state) => state.lists);

  return (
    <Container>
      {lists.map((item) => (
          <ListCard key={item._id} data={item} setCurrentId={setCurrentId}/>
      ))}
    </Container>
  );
}

export default Lists;
