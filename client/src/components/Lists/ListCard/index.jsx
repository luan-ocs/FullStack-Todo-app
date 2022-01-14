import { Card, CardActions, CardContent, List, Button } from "@mui/material";
import React from "react";
import moment from "moment";
import { CardHeader, CardMain }from "./styles.js"
import CheckboxListItem from "./CheckboxListItem/index.jsx";
import { useDispatch } from "react-redux";
import { deleteList } from "../../../actions/lists.js"

function ListCard({ data, setCurrentId }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{display: "block", minWidth: "275px"}}>
      <CardContent>
        <CardHeader>
            <h6>{data.associatedPersons.join(", ")}</h6>
            <span>{moment(data.when).fromNow()}</span>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
        </CardHeader>
        <CardMain>
          <List sx={{width: "100%"}}>
            {data.checklist.map((item) => <CheckboxListItem key={item._id} data={item} listId={data._id}/>)}
          </List>
        </CardMain>
      </CardContent>
      <CardActions>
        <Button color="error" variant="contained" onClick={e => dispatch(deleteList(data._id))}>
          Delete
        </Button>
        <Button color="primary" variant="contained" onClick={e => setCurrentId(data._id)}> Edit </Button>
      </CardActions>
    </Card>
  );
}

export default ListCard;
