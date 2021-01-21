import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Cat } from './../../../Cat/cat.schema';

export type OwnerDocument = Owner & mongoose.Document;
@Schema()
export class Owner {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cat' }] })
  cat: Cat[];
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
