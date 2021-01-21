import { from, Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Owner, OwnerDocument } from './../applist/schema/owner.schema';


@Injectable()
export class OwnerService {
  constructor(
    @InjectModel(Owner.name) private readonly ownerModel: Model<OwnerDocument>,
  ) {}

  public findAll(): Observable<Owner[]> {
    return  from(this.ownerModel.find().exec());
  }
}
