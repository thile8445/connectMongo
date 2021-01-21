import { AuthorModel } from './../author/author.schema';
import { Document, model, Schema } from 'mongoose';

export interface BookModel extends Document {
  //   id: string
  name: string;
  date: string;
  nha_xb: string;
  author: AuthorModel;
}
export const BookSchema = new Schema(
  {
    name: String,
    date: String,
    nha_xb: String,
    author: { type: Schema.Types.ObjectId, ref: 'Author' },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);
export const BookModelSchema = model('Book', BookSchema,'Book');
