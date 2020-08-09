import { Request, Response } from 'express';
import { Collection, ObjectID } from 'mongodb';
import HttpStatus from 'http-status-codes';
import { getCollection } from '../database/mongo';
import { create } from 'domain';

const COLLECTION = "events";

export async function getAll(req: Request, res: Response) {
    const collection: Collection = await getCollection(COLLECTION);

    const result = await collection.find({}).toArray();
    
    res.status(HttpStatus.OK);
    res.send(result);
};

export async function getOne(req: Request, res: Response) {
    const id: string = req.params.id;

    const collection: Collection = await getCollection(COLLECTION);

    const result = await collection.findOne({
        _id: new ObjectID(id)
    });
    
    res.status(HttpStatus.OK);
    res.send(result);
};

export async function createOne(req: Request, res: Response) {
    const createObj = req.body;

    const collection: Collection = await getCollection(COLLECTION);

    const result = await collection.insertOne(createObj);

    res.status(HttpStatus.ACCEPTED);
    res.send(result);
};

export async function findOneAndUpdate(req: Request, res: Response) {
    const updatedObj = req.body;
    updatedObj._id = new ObjectID(updatedObj._id);

    const collection: Collection = await getCollection(COLLECTION);

    const result = await collection.findOneAndUpdate({
        _id: new ObjectID(updatedObj._id)
    }, updatedObj);

    res.status(HttpStatus.OK);
    res.send(result);
};

export default {
    getAll,
    getOne,
    createOne,
    findOneAndUpdate,
};
