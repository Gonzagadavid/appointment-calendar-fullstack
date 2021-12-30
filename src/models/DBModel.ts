// import * as mongoDB from 'mongodb';
import connection from './connection';

class DBModel {
  collection: string = '';

  constructor(collection: string) {
    this.collection = collection;
  }

  async findOne(filter = {}) {
    const db = await connection();
    const product = await db.collection(this.collection).findOne(filter);
    return product;
  }

  async find(filter = {}) {
    const db = await connection();
    const product = await db.collection(this.collection).find(filter).toArray();
    return product;
  }

  async insertOne(item: object) {
    const db = await connection();
    const response = await db.collection(this.collection).insertOne(item);
    return response;
  }

  async updateOne(filter: object, modify: object) {
    const db = await connection();
    const response = await db.collection(this.collection).updateOne(filter, modify);
    return response;
  }

  async deleteOne(filter: object) {
    const db = await connection();
    const response = await db.collection(this.collection).deleteOne(filter);
    return response;
  }
}

export default DBModel;
