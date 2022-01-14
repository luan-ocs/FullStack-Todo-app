import React from "react";

import List from "@mui/material/List";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { Container } from "./styles";
import DeleteIcon from '@mui/icons-material/Delete';

function ChecklistItems({ items, listData, setListData }) {
  return (
    <Container>
      <List style={{width: "100%"}}>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding secondaryAction={
              <IconButton edge="end" onClick={e => setListData({...listData, checklist: items.filter((value) => value !== item)})}>
                  <DeleteIcon />
              </IconButton>
          }>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ChecklistItems;
