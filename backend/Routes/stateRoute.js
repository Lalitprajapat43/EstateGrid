import { Router } from "express";
import {
    getAllState,
    getStateById,
    addState,
    updateState,
    deleteState
} from "../Controllers/state.controler.js"

let router = Router();

router.get("/list",getAllState )
router.get("/:stateId", getStateById)
router.post("/addState",addState )
router.put("/updateState/:stateId",updateState)
router.delete("deleteState/:stateId", deleteState)


export default router;