import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Chef from '../models/chef.model';
import { ChefService } from '../services/chef.service';

const createChef = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, image, description } = req.body;
        const addedChef = await ChefService.createChef({ name, image, description });
        res.status(201).json({ chef: addedChef });
    } catch (err) {
        return res.status(500).json({ error: 'Failed to add chef' });
    }
};
const readChef = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const chefId = req.params.chefId;
        console.log(chefId);

        const chef = await ChefService.getChefById(chefId);
        console.log(chef);
        res.status(200).json({ chef });
    } catch (err) {
        res.status(500).json({ error: 'Failed to get chef' });
    }
};
const readAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const chefs = await ChefService.getChefs();
        res.status(200).json({ chefs });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get chefs' });
    }
};
const updateChef = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const chefId = req.params.chefId;
        const updatedChef = await ChefService.updateChef(chefId, req.body);
        console.log(updatedChef);

        res.status(200).json({ chef: updatedChef });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update chef' });
    }
};
const deleteChef = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const chefId = req.params.chefId;
        const chef = await ChefService.deleteChef(chefId);
        chef ? res.status(200).json({ message: 'Chef deleted successfully' }) : res.status(404).json({ message: 'Chef not found' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete chef' });
    }
};

export default {
    createChef,
    readChef,
    readAll,
    updateChef,
    deleteChef
};
