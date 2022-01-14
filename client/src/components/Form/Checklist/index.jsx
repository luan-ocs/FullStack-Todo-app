import React, { useState } from "react";

import { Container } from "./styles";
import { InputBase, IconButton } from "@mui/material";

function Checklist({ listData, setListData }) {
  const [checklist, setCheckList] = useState({
    title: ""
  });

  const clear = () => {
    setCheckList({ title: "" });
  }

  return (
    <Container>
      <InputBase
        placeholder="Incluir item à checklist"
        sx={{ display: "flex", width: "100%" }}
        onChange={(e) => setCheckList({title: e.target.value})}
        value={checklist.title}
      />
      <IconButton aria-label="adicionar" sx={{ p: "10px" }} onClick={e => {
        let newChecklist = listData.checklist;
        newChecklist.push(checklist);
        setListData({...listData, checklist: newChecklist})
        clear();
      }}>
        +
      </IconButton>
    </Container>
  );
}

export default Checklist;
