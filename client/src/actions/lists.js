import * as api from "../api"

export const getLists = () => async(dispatch) => {
    try {
        const { data } = await api.fetchLists();
        dispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    } 
}

export const createList = (post) => async(dispatch) => {
    try {
        const { data } = await api.createList(post);
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error.message);
    } 
}

export const updateList = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updateList(id, post);
        dispatch({type: "UPDATE", payload: data})
    } catch(error) {
        console.log(error.message);
    }
}

export const deleteList = (id) => async(dispatch) => {
    try {
        console.log(id);
        await api.deleteList(id)
        dispatch({type: "DELETE", payload: id})
    } catch(error) {
        console.log(error.message)
    }
}

export const updateChecklist = (id, checklistId, checklistItem) => async(dispatch) => {
    try {
        const {data} = await api.updateChecklist(id, checklistId, checklistItem)
        dispatch({type: "UPDATE", payload: data})
    } catch (error) {
        console.log(error.message)
    }
}