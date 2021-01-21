import { from, Observable } from 'rxjs';
import { AuthorModel } from './author.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel('Author') private readonly authorModel: Model<AuthorModel>,
  ) {}

  public findAll():Observable<AuthorModel[]>{
      return from(this.authorModel.find().exec())
  }

}
