import connection from './connection';

abstract class DBModel {
  protected collection: string = '';

  constructor(collection: string) {
    this.collection = collection;
  }

  public async findOne(filter = {}) {
    const db = await connection();
    const product = await db.collection(this.collection).findOne(filter);
    return product;
  }

  public async find(filter = {}, projection = {}) {
    const db = await connection();
    const product = await db.collection(this.collection).find(filter, { projection }).toArray();
    return product;
  }

  public async insertOne(item: object) {
    const db = await connection();
    const response = await db.collection(this.collection).insertOne(item);
    return response;
  }

  public async updateOne(filter: object, modify: object) {
    const db = await connection();
    const response = await db.collection(this.collection).updateOne(filter, modify);
    return response;
  }

  public async deleteOne(filter: object) {
    const db = await connection();
    const response = await db.collection(this.collection).deleteOne(filter);
    return response;
  }
}

export default DBModel;
