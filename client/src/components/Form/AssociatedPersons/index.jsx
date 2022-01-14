import React, { useState } from "react";

import { Container } from "./styles";
import { InputBase, IconButton } from "@mui/material";

function AssociatedPersons({ listData, setListData }) {
  const [namePerson, setNamePerson] = useState("");

  const clear = () => {
    setNamePerson("");
  }

  return (
    <Container>
      <InputBase
        placeholder="Incluir pessoas à tarefa"
        sx={{ display: "flex", width: "100%" }}
        onChange={(e) => setNamePerson(e.target.value)}
        value={namePerson}
      />
      <IconButton aria-label="adicionar" sx={{ p: "10px" }} onClick={e => {
        let newAssociatedPerson = listData.associatedPersons;
        newAssociatedPerson.push(namePerson);
        setListData({...listData, associatedPersons: newAssociatedPerson})
        clear();
      }}>
        +
      </IconButton>
    </Container>
  );
}

export default AssociatedPersons;
