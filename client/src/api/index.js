import axios from "axios";
const url = "http://localhost:5000/lists"

export const fetchLists = () => axios.get(url)

export const createList = (newList) => axios.post(url, newList)

export const updateList = (id, updatedList) => axios.patch(`${url}/${id}`, updatedList)

export const deleteList = (id) => axios.delete(`${url}/${id}`)

export const updateChecklist = (id, checklistId, ChecklistItem) => axios.patch(`${url}/${id}/checklist/${checklistId}`, ChecklistItem)