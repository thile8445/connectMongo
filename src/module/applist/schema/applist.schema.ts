import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AppListDocument = AppList & Document ;

@Schema()
export class AppList {
  @Prop()
  name: string;

  @Prop()
  data: string;

  @Prop()
  saveData: string;
}

export const AppListSchema = SchemaFactory.createForClass(AppList);

