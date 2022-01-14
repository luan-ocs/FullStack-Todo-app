import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { Container, FormContainer } from "./styles";
import { MobileDatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import Labels from "./Labels";
import Checklist from "./Checklist";
import AssociatedPersons from "./AssociatedPersons";
import ChecklistItems from "./List";
import { useDispatch, useSelector } from "react-redux";
import { createList, updateList } from "../../actions/lists";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();

  const listDataEmpty = {
    title: "",
    description: "",
    when: new Date(),
    associatedPersons: [],
    checklist: [],
  };

  const [listData, setListData] = useState(listDataEmpty);

  const list = useSelector((state) =>
    currentId ? state.lists.find((l) => l._id === currentId) : null
  );

  useEffect(() => {
    if (list) {
      setListData(list);
    }
  }, [list]);

  const [mistakes, setMistakes] = useState({
    title: false,
    description: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!listData.title) {
      setMistakes({ ...mistakes, title: true });
      return
    }

    if (!listData.description)  {
      setMistakes({ ...mistakes, description: true });
      return
    }

    if (!currentId) {
      dispatch(createList(listData));
    } else {
      dispatch(updateList(currentId, listData));
    }
    setCurrentId(null);
    setListData(listDataEmpty);
  };

  return (
    <Container>
      <FormContainer noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          error={mistakes.title}
          helperText={mistakes.title ? "Por favor, digite um titulo." : ""}
          name="title"
          variant="outlined"
          label="Titulo"
          fullWidth
          value={listData.title}
          onChange={(e) => {
            setListData({ ...listData, title: e.target.value });
            if (e.target.value) {
              setMistakes({ ...mistakes, title: false });
            }
          }}
        />
        <TextField
          error={mistakes.description}
          helperText={
            mistakes.description ? "Por favor, digite uma descrição" : ""
          }
          name="description"
          variant="outlined"
          label="Descrição"
          fullWidth
          value={listData.description}
          onChange={(e) => {
            setListData({ ...listData, description: e.target.value });
            if (listData.description) {
              setMistakes({ ...mistakes, description: false });
            }
          }}
        />
        <LocalizationProvider dateAdapter={DateAdapter}>
          <MobileDatePicker
            label="fazer até"
            inputFormat="DD/MM/yyyy"
            value={listData.when}
            onChange={(e) => setListData({ ...listData, when: e })}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <AssociatedPersons listData={listData} setListData={setListData} />
        <Labels
          items={listData.associatedPersons}
          setListData={setListData}
          listData={listData}
        />
        <Checklist listData={listData} setListData={setListData} />
        <ChecklistItems
          items={listData.checklist}
          listData={listData}
          setListData={setListData}
        />
        <Button variant="contained" type="submit">
          {currentId ? "Edit" : "Submit"}
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={(e) => {
            setListData(listDataEmpty);
            setCurrentId(null);
          }}
        >
          Clear
        </Button>
      </FormContainer>
    </Container>
  );
};

export default Form;
