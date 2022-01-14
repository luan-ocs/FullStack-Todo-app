import ListModel from "../models/listModel.js"
import mongoose from "mongoose"

export const getLists = async (req, res) => {
    try {
        const lists = await ListModel.find();

        console.log(lists)
        
        res.status(200).json(lists)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
} 

export const createList = async (req, res) => {
    const values = req.body;

    const newList = new ListModel(values);

    try {
        await newList.save();

        res.status(201).json(newList)
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

export const updateList = async (req, res) => {
    const {id} = req.params;
    const list = req.body;

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("no post with that id")

    const updatedList = await ListModel.findByIdAndUpdate(id, {...list, _id:id }, {new: true})

    res.json(updatedList)
}

export const deleteList = async (req, res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("no list with that id")

    await ListModel.findByIdAndDelete(id);

    res.json("list deleted sucessfully!")
    
}

export const updateChecklist = async (req, res) => {
    const {id, checklistId} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("no list with that id")
    
    if(!mongoose.Types.ObjectId.isValid(checklistId))
        return res.status(404).send("no checklist with that id")

    const list = await ListModel.findById(id)

    const newChecklist = list.checklist.filter((item) => item._id.toString() !== checklistId)

    newChecklist.push({...req.body, _id: checklistId})

    list.checklist = newChecklist;

    console.log(newChecklist)

    const updatedList = await ListModel.findByIdAndUpdate(id, {...list, _id:id}, {new: true})

    res.json(updatedList);

}
