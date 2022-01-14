import React from "react";

import { Container } from "./styles";

function Labels({ items, setListData, listData }) {
  return (
    <Container>
      {items.map((item, index) => (
        <span
          key={index}
          onClick={(e) => {
            setListData({...listData, associatedPersons: items.filter((value) => value !== item)})
          }}
        >
          {item}
        </span>
      ))}
    </Container>
  );
}

export default Labels;
