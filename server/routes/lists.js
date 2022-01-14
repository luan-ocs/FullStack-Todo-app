import express from "express"
import { getLists, createList, updateList, updateChecklist, deleteList} from "../controllers/lists.js";

const router = express.Router();

router.get("/", getLists);
router.post("/", createList);
router.patch("/:id", updateList)
router.patch("/:id/checklist/:checklistId", updateChecklist)
router.delete("/:id", deleteList)


export default router
