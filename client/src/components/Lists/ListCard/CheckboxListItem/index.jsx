import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox
} from "@mui/material";
import {useDispatch} from "react-redux"
import { updateChecklist } from "../../../../actions/lists"

function CheckboxListItem({data, listId}) {
  const dispatch = useDispatch();
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={e => dispatch(updateChecklist(listId, data._id, {...data, done: !data.done}))}>
        <ListItemIcon>
          <Checkbox edge="start" checked={data.done} disableRipple/>
        </ListItemIcon>
        <ListItemText>{data.title}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default CheckboxListItem;
