import { from, Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookModel, BookModelSchema } from './book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel('Book') private readonly bookModel: Model<BookModel>,
  ) {}

  public findAll(): Observable<BookModel[]>{
      return from(this.bookModel.find().exec())
  }
  public getA():Observable<any[]>{
      console.log(BookModelSchema.find());
      
      return from(BookModelSchema.find().exec());
  }
}
