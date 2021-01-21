import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './book.controller';
import { BookSchema } from './book.schema';
import { BookService } from './book.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Book', schema: BookSchema, collection: 'book' },
    ]),
  ],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}
