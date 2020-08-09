import {MongoClient, Db} from 'mongodb';
import { start } from 'repl';

let database: Db | null = null;

export async function startDatabase() {
    const connection = await MongoClient.connect(process.env.MONGO_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
    database = connection.db();
}

export async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

export async function getCollection(collectionName: string) {
    const db: Db = await getDatabase();
    return db.collection(collectionName);
}

export default {
    getCollection,
    getDatabase,
    startDatabase,
};