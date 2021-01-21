import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Owner } from './../module/applist/schema/owner.schema';

export type CatDocument = Cat & mongoose.Document;
@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
  Owner: Owner;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
