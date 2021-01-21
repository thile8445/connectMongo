import { Document, model, Schema } from "mongoose";

export interface AuthorModel extends Document{
    name : string,
    age : number
}
export const AuthorSchema = new Schema({
    name : String,
    age : Number,
    books : [{ type: Schema.Types.ObjectId, ref: 'Book' }],
},{
    toJSON: {
        virtuals: true,
      },
})
const AuthorModelSchema = model('Author',AuthorSchema);