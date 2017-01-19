
import * as mongoose from 'mongoose';

export interface IStuff extends mongoose.Document {
 prop1: string,
 prop2: string
}

let schema = new mongoose.Schema({
  prop1: String,
  prop2: String
});

export default mongoose.model<IStuff>('Stuff', schema);
