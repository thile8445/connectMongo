import { from, Observable } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Cat, CatDocument } from './cat.schema';
import { Model } from 'mongoose';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>,
  ) {}

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }
  public findAllByOwner(idOwner: string): Observable<any>{
    return from(this.catModel.find({'owner_id' : idOwner}).exec());
  }
}
