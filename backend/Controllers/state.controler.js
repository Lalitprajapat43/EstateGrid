import { Router } from "express";
import  stateModel from "../Models/stateModel.js"


export async function  getAllState(req,res){

    try
    {
        let Data= await stateModel.find();
        return res.status(200).json(Data);
    }
    catch(error)
    {
        return res.status(500).json({ message : error.message})
    }
}
export async function  getStateById(req,res){

    try
    {
        let StateId = req.params.StateId;
        let state= await stateModel.findById(StateId);
        return res.status(200).json(state);
    }
    catch(error)
    {
        return res.status(500).json({ message : error.message})
    }
}
export async function  addState(req,res){

    try
    {
        let newState = new stateModel(req.body)
        await newState.save()
        return res.status(201).json(newState);
    }
    catch(error)
    {
        return res.status(500).json({ message : error.message})
    }
}
export async function  updateState(req,res){

    try
    {
        message:"Your now are update state"
    }
    catch(error)
    {
        return res.status(500).json({ message : error.message})
    }
}
export async function  deleteState(req,res){

    try
    {
        message:"Your now are deletestate"
    }
    catch(error)
    {
        return res.status(500).json({ message : error.message})
    }
}



